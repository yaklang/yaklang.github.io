const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const FEISHU_APP_ID = process.env.FEISHU_APP_ID;
const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET;
const INPUT_URL = process.env.INPUT_URL;
const INPUT_TITLE = process.env.INPUT_TITLE || '';
const INPUT_AUTHOR = process.env.INPUT_AUTHOR || '';
const INPUT_TAGS = process.env.INPUT_TAGS || '';
const GH_TOKEN = process.env.GH_TOKEN;
const REPO = process.env.GITHUB_REPOSITORY;

// 工具函数：HTTP 请求
function request(options, body = null) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch {
                    resolve(data);
                }
            });
        });
        req.on('error', reject);
        if (body) req.write(body);
        req.end();
    });
}

async function postJson(url, body, headers = {}) {
    const parsed = new URL(url);
    const options = {
        hostname: parsed.hostname,
        path: parsed.pathname + parsed.search,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    };
    return request(options, JSON.stringify(body));
}

async function getJson(url, headers = {}) {
    const parsed = new URL(url);
    const options = {
        hostname: parsed.hostname,
        path: parsed.pathname + parsed.search,
        method: 'GET',
        headers
    };
    return request(options);
}

// 下载文件（通用 URL）
function downloadFile(url, destPath, headers = {}) {
    return new Promise((resolve, reject) => {
        const parsed = new URL(url);
        const options = {
            hostname: parsed.hostname,
            path: parsed.pathname + parsed.search,
            method: 'GET',
            headers
        };
        const file = fs.createWriteStream(destPath);
        https.get(options, (res) => {
            if (res.statusCode === 302 || res.statusCode === 301) {
                file.close();
                fs.unlinkSync(destPath);
                downloadFile(res.headers.location, destPath, headers).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode !== 200) {
                file.close();
                fs.unlinkSync(destPath);
                reject(new Error(`Download failed: ${res.statusCode}`));
                return;
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            file.close();
            if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
            reject(err);
        });
    });
}

// 从 URL 提取 document_id
// 支持 docx URL 和 wiki URL
async function extractDocId(url, token) {
    const docxMatch = url.match(/\/docx\/([a-zA-Z0-9]+)/);
    if (docxMatch) return docxMatch[1];

    const wikiMatch = url.match(/\/wiki\/([a-zA-Z0-9]+)/);
    if (wikiMatch) {
        const wikiToken = wikiMatch[1];
        console.log(`   检测到 Wiki 文档，正在获取 document_id...`);
        const data = await getJson(
            `https://open.feishu.cn/open-apis/wiki/v2/spaces/get_node?token=${wikiToken}`,
            { 'Authorization': `Bearer ${token}` }
        );
        if (data.code !== 0) {
            throw new Error(`获取 Wiki 文档信息失败: ${data.msg}`);
        }
        const docId = data.data.node.obj_token;
        console.log(`   Wiki document_id: ${docId}`);
        return docId;
    }

    throw new Error('无法从 URL 中提取文档 ID，请确认是新版 Docx 或 Wiki 文档链接');
}

// 生成 URL 友好的 slug
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s一-龥]/g, '-')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .substring(0, 50);
}

// 获取飞书 tenant_access_token
async function getTenantAccessToken(appId, appSecret) {
    const data = await postJson(
        'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
        { app_id: appId, app_secret: appSecret }
    );
    if (data.code !== 0) {
        throw new Error(`获取 token 失败: ${data.msg}`);
    }
    return data.tenant_access_token;
}

// 获取文档元数据
async function getDocumentMeta(docId, token) {
    const data = await getJson(
        `https://open.feishu.cn/open-apis/docx/v1/documents/${docId}`,
        { 'Authorization': `Bearer ${token}` }
    );
    if (data.code !== 0) {
        throw new Error(`获取文档元数据失败: ${data.msg}`);
    }
    return data.data.document;
}

// 获取文档 raw_content（Markdown）
async function getRawContent(docId, token) {
    const data = await getJson(
        `https://open.feishu.cn/open-apis/docx/v1/documents/${docId}/raw_content`,
        { 'Authorization': `Bearer ${token}` }
    );
    if (data.code !== 0) {
        throw new Error(`获取文档内容失败: ${data.msg}`);
    }
    return data.data.content;
}

// 获取文档所有 blocks（支持分页）
async function getDocumentBlocks(docId, token) {
    const blocks = [];
    let pageToken = '';
    const pageSize = 500;

    while (true) {
        let url = `https://open.feishu.cn/open-apis/docx/v1/documents/${docId}/blocks?document_revision_id=-1&page_size=${pageSize}`;
        if (pageToken) url += `&page_token=${pageToken}`;

        const data = await getJson(url, { 'Authorization': `Bearer ${token}` });
        if (data.code !== 0) {
            throw new Error(`获取文档 blocks 失败: ${data.msg}`);
        }

        blocks.push(...(data.data.items || []));

        if (!data.data.has_more) break;
        pageToken = data.data.page_token;
    }

    return blocks;
}

// 用 Drive API 下载文件
function downloadDriveFile(fileToken, destPath, token) {
    return new Promise((resolve, reject) => {
        const url = `https://open.feishu.cn/open-apis/drive/v1/medias/${fileToken}/download`;
        const parsed = new URL(url);
        const options = {
            hostname: parsed.hostname,
            path: parsed.pathname + parsed.search,
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        };
        const file = fs.createWriteStream(destPath);
        https.get(options, (res) => {
            if (res.statusCode === 302 || res.statusCode === 301) {
                file.close();
                fs.unlinkSync(destPath);
                downloadFile(res.headers.location, destPath, {}).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode !== 200) {
                file.close();
                fs.unlinkSync(destPath);
                reject(new Error(`Drive download failed: ${res.statusCode}`));
                return;
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            file.close();
            if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
            reject(err);
        });
    });
}

// 处理图片：下载并替换路径
// 策略：1) raw_content 中的标准 Markdown 图片; 2) Block API 补充 raw_content 未正确转换的图片
async function processImages(markdown, docId, token, slug) {
    const imgDir = path.join('articles', 'images', slug);
    fs.mkdirSync(imgDir, { recursive: true });

    let processedMarkdown = markdown;
    let successCount = 0;
    let failCount = 0;
    let imageIndex = 0;

    // 第一步：处理 raw_content 中的标准 Markdown 图片语法 ![alt](url)
    const mdImgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let mdMatch;
    while ((mdMatch = mdImgRegex.exec(markdown)) !== null) {
        const alt = mdMatch[1];
        const url = mdMatch[2];
        imageIndex++;
        const ext = path.extname(new URL(url).pathname) || '.png';
        const filename = `image-${imageIndex}${ext}`;
        const localPath = path.join(imgDir, filename);
        const relativePath = `/articles/images/${slug}/${filename}`;

        try {
            const isFeishuUrl = url.includes('feishu.cn') || url.includes('larksuite.com');
            const headers = isFeishuUrl ? { 'Authorization': `Bearer ${token}` } : {};
            await downloadFile(url, localPath, headers);
            processedMarkdown = processedMarkdown.replace(url, relativePath);
            successCount++;
            console.log(`  ✅ Markdown 图片已下载: ${filename}`);
        } catch (err) {
            failCount++;
            console.warn(`  ⚠️ Markdown 图片下载失败: ${err.message}`);
        }
    }

    // 第二步：用 Block API 获取所有图片 block，补充 raw_content 未正确输出的图片
    console.log('  🔍 通过 Block API 查找更多图片...');
    let blockImages = [];
    try {
        const blocks = await getDocumentBlocks(docId, token);
        // block_type 27 = image
        blockImages = blocks.filter(b => b.block_type === 27).map(b => ({
            fileToken: b.image?.token || b.image?.file_token
        })).filter(img => img.fileToken);
        console.log(`     找到 ${blockImages.length} 个图片 block`);
    } catch (err) {
        console.warn(`     Block API 获取失败: ${err.message}`);
    }

    // 第三步：用 Block API 的图片替换 Markdown 中的图片占位符
    // raw_content 可能把图片输出为 "image.png" 或 "xxx.jpg" 这样的纯文本
    const placeholderRegex = /^(\s*)image\.(png|jpg|jpeg|gif|webp|bmp)\s*$/gim;
    let placeholderMatch;
    let placeholderCount = 0;

    while ((placeholderMatch = placeholderRegex.exec(processedMarkdown)) !== null) {
        const fullMatch = placeholderMatch[0];
        const indent = placeholderMatch[1];

        if (placeholderCount < blockImages.length) {
            imageIndex++;
            const fileToken = blockImages[placeholderCount].fileToken;
            const filename = `image-${imageIndex}.png`;
            const localPath = path.join(imgDir, filename);

            try {
                await downloadDriveFile(fileToken, localPath, token);
                const replacement = `${indent}![image](/articles/images/${slug}/${filename})`;
                processedMarkdown = processedMarkdown.replace(fullMatch, replacement);
                successCount++;
                console.log(`  ✅ Block 图片已下载: ${filename}`);
            } catch (err) {
                failCount++;
                console.warn(`  ⚠️ Block 图片下载失败: ${err.message}`);
            }
        }
        placeholderCount++;
    }

    // 如果还有未匹配到的 Block 图片（Markdown 中没有占位符），追加到文末
    const remainingBlocks = blockImages.slice(placeholderCount);
    if (remainingBlocks.length > 0) {
        console.log(`  📎 ${remainingBlocks.length} 个图片未在正文中找到对应位置，追加到文末`);
        for (const block of remainingBlocks) {
            imageIndex++;
            const filename = `image-${imageIndex}.png`;
            const localPath = path.join(imgDir, filename);
            try {
                await downloadDriveFile(block.fileToken, localPath, token);
                successCount++;
                processedMarkdown += `\n\n![image](/articles/images/${slug}/${filename})`;
                console.log(`  ✅ 追加图片已下载: ${filename}`);
            } catch (err) {
                failCount++;
                console.warn(`  ⚠️ 追加图片下载失败: ${err.message}`);
            }
        }
    }

    // 清理空图片目录
    if (successCount === 0 && fs.existsSync(imgDir)) {
        const files = fs.readdirSync(imgDir);
        if (files.length === 0) {
            fs.rmdirSync(imgDir);
        }
    }

    return { markdown: processedMarkdown, successCount, failCount, imgDir };
}

// 创建 Pull Request
async function createPullRequest(branch, title, body) {
    const data = await postJson(
        `https://api.github.com/repos/${REPO}/pulls`,
        {
            title: `feat: publish article "${title}"`,
            head: branch,
            base: 'master',
            body
        },
        {
            'Authorization': `token ${GH_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    );
    if (data.message) {
        throw new Error(`创建 PR 失败: ${data.message}`);
    }
    return data;
}

// 主流程
async function main() {
    console.log('🚀 开始发布飞书文档...\n');

    // 1. 获取 token（Wiki 文档需要先有 token 才能解析 document_id）
    console.log('🔑 获取飞书访问令牌...');
    const token = await getTenantAccessToken(FEISHU_APP_ID, FEISHU_APP_SECRET);
    console.log('   ✅ 获取成功\n');

    // 2. 提取 docId
    console.log('📎 解析文档链接...');
    const docId = await extractDocId(INPUT_URL, token);
    console.log(`   文档 ID: ${docId}\n`);

    // 3. 获取文档元数据
    console.log('📄 获取文档元数据...');
    const meta = await getDocumentMeta(docId, token);
    console.log(`   文档标题: ${meta.title || '(无)'}\n`);

    // 4. 获取文档内容
    console.log('📝 获取文档内容...');
    let markdown = await getRawContent(docId, token);
    console.log(`   内容长度: ${markdown.length} 字符\n`);

    // 5. 处理图片
    console.log('🖼️  处理图片...');
    const slug = slugify(INPUT_TITLE || meta.title || docId);
    const { markdown: processedMd, successCount, failCount } = await processImages(markdown, docId, token, slug);
    console.log(`   成功: ${successCount}, 失败: ${failCount}\n`);

    // 6. 确定最终元数据
    const title = INPUT_TITLE || meta.title || 'Untitled';
    const author = INPUT_AUTHOR || '';
    const tags = INPUT_TAGS ? INPUT_TAGS.split(',').map(t => t.trim()).filter(Boolean) : [];
    const date = new Date().toISOString().split('T')[0];
    const filename = `${date}-${slug}.md`;
    const filePath = path.join('articles', filename);

    console.log('📋 文章信息:');
    console.log(`   标题: ${title}`);
    console.log(`   作者: ${author || '(空)'}`);
    console.log(`   标签: ${tags.length > 0 ? tags.join(', ') : '(空)'}`);
    console.log(`   文件名: ${filename}\n`);

    // 7. 生成文件
    console.log('💾 生成文章文件...');
    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"\ndescription: ""\ndate: "${date}"\nauthor: "${author.replace(/"/g, '\\"')}"\ntags: [${tags.map(t => `"${t.replace(/"/g, '\\"')}"`).join(', ')}]\n---\n\n${processedMd}`;

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, frontmatter, 'utf-8');
    console.log(`   ✅ 已保存: ${filePath}\n`);

    // 8. Git 操作
    console.log('🔀 创建分支并提交...');
    const branch = `feat/article-${date}-${slug}`;
    execSync('git config user.name "GitHub Actions"');
    execSync('git config user.email "actions@github.com"');
    execSync(`git checkout -b ${branch}`);
    execSync('git add .');
    execSync(`git commit -m "feat: publish article ${title}"`);
    execSync(`git push origin ${branch}`);
    console.log(`   ✅ 分支已推送: ${branch}\n`);

    // 9. 创建 PR
    console.log('📬 创建 Pull Request...');
    const prBody = `## 新文章发布\n\n| 字段 | 内容 |\n|------|------|\n| **来源** | [飞书文档](${INPUT_URL}) |\n| **标题** | ${title} |\n| **作者** | ${author || '-'} |\n| **标签** | ${tags.length > 0 ? tags.join(', ') : '-'} |\n| **日期** | ${date} |\n| **图片** | ${successCount} 张成功${failCount > 0 ? `, ${failCount} 张失败` : ''} |\n\n> 由 GitHub Actions 自动生成。`;

    const pr = await createPullRequest(branch, title, prBody);
    console.log(`   ✅ PR 创建成功!`);
    console.log(`   链接: ${pr.html_url}\n`);
    console.log('🎉 完成! 请 review 并 merge PR 后手动触发部署。');
}

main().catch(err => {
    console.error('\n❌ 错误:', err.message);
    if (err.stack) console.error(err.stack);
    process.exit(1);
});
