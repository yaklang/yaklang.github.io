#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const buildDir = path.resolve(
  process.argv.find((argument) => !argument.startsWith("--") && argument !== process.argv[0] && argument !== process.argv[1]) || "build",
);
const dryRun = process.argv.includes("--dry-run");
const key = "629c41a3116dedbbf450b884f9d0d242";
const host = "yaklang.com";
const keyLocation = `https://${host}/${key}.txt`;
const endpoint = process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";

function walkFiles(root, predicate) {
  return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) return walkFiles(full, predicate);
    return entry.isFile() && predicate(entry.name) ? [full] : [];
  });
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function submit(urlList, batchNumber, totalBatches) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
        "user-agent": "yaklang.com-indexnow/1.0",
      },
      body: JSON.stringify({ host, key, keyLocation, urlList }),
    });
    if (response.status === 200 || response.status === 202) {
      console.log(
        `[indexnow] accepted batch ${batchNumber}/${totalBatches}: urls=${urlList.length}, status=${response.status}`,
      );
      return;
    }
    const responseBody = (await response.text()).slice(0, 500);
    if ((response.status === 429 || response.status >= 500) && attempt < 3) {
      console.warn(
        `[indexnow] retry batch ${batchNumber}/${totalBatches}: status=${response.status}, attempt=${attempt}`,
      );
      await wait(1000 * 2 ** (attempt - 1));
      continue;
    }
    throw new Error(
      `IndexNow rejected batch ${batchNumber}/${totalBatches}: status=${response.status}, body=${responseBody}`,
    );
  }
}

async function main() {
  if (!fs.existsSync(buildDir)) throw new Error(`missing build directory: ${buildDir}`);
  const keyFile = path.join(buildDir, `${key}.txt`);
  if (!fs.existsSync(keyFile) || fs.readFileSync(keyFile, "utf8").trim() !== key) {
    throw new Error(`missing valid IndexNow key file: ${keyFile}`);
  }

  const urls = new Set();
  for (const sitemap of walkFiles(buildDir, (name) => name === "sitemap.xml")) {
    const xml = fs.readFileSync(sitemap, "utf8").replace(/&amp;/g, "&");
    for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const url = new URL(match[1]);
      if (url.hostname !== host) throw new Error(`unexpected sitemap host: ${url.href}`);
      urls.add(url.href);
    }
  }
  if (urls.size === 0) throw new Error("no sitemap URLs found for IndexNow");

  const urlList = [...urls].sort();
  const batches = [];
  for (let offset = 0; offset < urlList.length; offset += 10000) {
    batches.push(urlList.slice(offset, offset + 10000));
  }

  if (dryRun) {
    console.log(
      `[indexnow] dry-run host=${host}, urls=${urlList.length}, batches=${batches.length}, keyLocation=${keyLocation}`,
    );
    return;
  }
  for (let index = 0; index < batches.length; index += 1) {
    await submit(batches[index], index + 1, batches.length);
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
