#!/usr/bin/env node

/**
 * Generate deliberately small homepage derivatives. The originals stay available
 * to documentation and detail pages; the homepage must never download them.
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const WRITE = process.argv.includes("--write");

const partnerFiles = [
  "asiainfo-sec.png",
  "logo.png",
  "hacking.png",
  "acmesec.png",
  "sec-in.png",
  "security58.png",
  "CTstack.png",
  "E安全.png",
  "4hou.png",
  "seclover.png",
  "secpulse.png",
  "zhaopin.png",
  "duxiaoman.png",
  "beike.png",
  "kuaishou.png",
  "xiaomi.png",
  "wutang.png",
  "sycsec.png",
  "c4.jpg",
];

const milestoneFiles = [
  "2021-xcon-yak-yakit-release.jpeg",
  "2023-yaklang-open-source-launch.jpg",
  "20260803-174557.jpg",
  "20260804203037.png",
  "2024-cicc-conference.jpg",
  "0718bf2f426b3b8a.png",
  "3cac0ba124b1bebc.png",
];

const testimonialFiles = [
  "img/team/ykc.jpg",
  "img/home/kio.jpeg",
  "img/home/和你.jpeg",
  "img/home/P0m32Kun.jpeg",
  "img/home/18Xtreme.jpeg",
  "img/team/国产大熊猫.jpeg",
  "img/home/CF_HB.jpeg",
  "img/home/wooluo.jpeg",
  "img/team/Vanilla.jpeg",
  "img/home/ttStorm.jpeg",
  "img/home/酒零.jpeg",
  "img/home/key@OverSpace.jpeg",
  "img/team/naiquan.jpeg",
  "img/home/sharecast.jpeg",
  "img/home/影舞者.jpeg",
  "img/team/timwhite.png",
  "img/team/Alex-null.jpeg",
  "img/home/六月初七.jpeg",
  "img/home/小米粥.jpeg",
  "img/home/李大壮.jpeg",
];

const productFiles = [
  "memft1.png",
  "memft2.png",
  "memfit3.png",
  "irify1.png",
  "irify2.png",
  "irify3.png",
];

const backgroundFiles = [
  "yakit_bg.jpg",
  "yaklang_bg.jpg",
  "memfit_bg.jpg",
  "irify_bg.jpg",
];

const webpName = (file) => `${path.parse(file).name}.webp`;
const spec = (source, output, width, height, fit, quality, maxBytes) => ({
  source: path.join(ROOT, source.startsWith("materials/") ? source : `static/${source}`),
  output: path.join(ROOT, "static", output),
  width,
  height,
  fit,
  quality,
  maxBytes,
});

const specs = [
  ...partnerFiles.map((file) =>
    spec(
      `img/partner/${file}`,
      `img/home-optimized/partners/${webpName(file)}`,
      280,
      80,
      "inside",
      80,
      48 * 1024,
    ),
  ),
  ...milestoneFiles.map((file) =>
    spec(
      `img/newHome/${file}`,
      `img/home-optimized/milestones/${webpName(file)}`,
      400,
      224,
      "cover",
      76,
      96 * 1024,
    ),
  ),
  ...testimonialFiles.map((file, index) =>
    spec(
      file,
      `img/home-optimized/testimonials/t${index}.webp`,
      96,
      96,
      "cover",
      76,
      24 * 1024,
    ),
  ),
  ...productFiles.map((file) =>
    spec(
      `materials/home-media-sources/${file}`,
      `img/home-optimized/products/${webpName(file)}`,
      960,
      720,
      "inside",
      76,
      160 * 1024,
    ),
  ),
  ...backgroundFiles.map((file) =>
    spec(
      `materials/home-media-sources/${file}`,
      `img/home-optimized/products/${webpName(file)}`,
      960,
      736,
      "cover",
      68,
      96 * 1024,
    ),
  ),
];

async function generate(item) {
  fs.mkdirSync(path.dirname(item.output), { recursive: true });
  await sharp(item.source)
    .rotate()
    .resize({
      width: item.width,
      height: item.height,
      fit: item.fit,
      position: "centre",
      withoutEnlargement: true,
    })
    .webp({ quality: item.quality, alphaQuality: 88, effort: 6 })
    .toFile(item.output);
}

async function verify(item) {
  if (!fs.existsSync(item.output)) {
    throw new Error(`missing optimized asset: ${path.relative(ROOT, item.output)}`);
  }
  const { size } = fs.statSync(item.output);
  const metadata = await sharp(item.output).metadata();
  if (size > item.maxBytes) {
    throw new Error(
      `${path.relative(ROOT, item.output)} is ${size} bytes; budget is ${item.maxBytes}`,
    );
  }
  if ((metadata.width || 0) > item.width || (metadata.height || 0) > item.height) {
    throw new Error(
      `${path.relative(ROOT, item.output)} dimensions exceed ${item.width}x${item.height}`,
    );
  }
  return size;
}

async function main() {
  if (WRITE) {
    for (const item of specs) await generate(item);
  }
  let total = 0;
  for (const item of specs) total += await verify(item);

  // The OSS rewriter can only replace concrete asset literals in compiled JS.
  // Guard against reintroducing runtime path manipulation for partner logos.
  const partnerComponent = fs.readFileSync(
    path.join(ROOT, "src/components/homeNew/HomePartnerMarquee.tsx"),
    "utf8",
  );
  for (const file of partnerFiles) {
    const expected = `/img/home-optimized/partners/${webpName(file)}`;
    if (!partnerComponent.includes(expected)) {
      throw new Error(`homepage partner component misses explicit OSS asset path: ${expected}`);
    }
  }
  if (partnerComponent.includes('.replace("/img/partner/"')) {
    throw new Error("homepage partner assets must not be constructed at runtime");
  }

  process.stdout.write(
    `${WRITE ? "Generated and verified" : "Verified"} ${specs.length} homepage assets (${(total / 1024).toFixed(1)} KiB)\n`,
  );
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
