#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const ROOT = path.resolve(__dirname, "..");
const BUILD = path.join(ROOT, "build");
const HOME = path.join(BUILD, "index.html");
const MAX_INITIAL_BYTES = 1600 * 1024;
const MAX_HERO_VIDEO_BYTES = 1100000;
const MAX_MEDIA_ATTRIBUTES = 16;

const fail = (message) => {
  throw new Error(`homepage performance budget: ${message}`);
};
const localPath = (url) => {
  const value = url.split(/[?#]/u, 1)[0];
  if (/^(?:https?:)?\/\//iu.test(value) || value.startsWith("data:")) return null;
  const clean = value.replace(/^\/+/, "");
  const resolved = path.resolve(BUILD, clean);
  return resolved.startsWith(BUILD + path.sep) ? resolved : null;
};

if (!fs.existsSync(HOME)) fail("build/index.html is missing; run yarn build first");
const html = fs.readFileSync(HOME, "utf8");

const initialFiles = new Set([HOME]);
for (const match of html.matchAll(/<(?:script|link)\b[^>]+(?:src|href)=["']([^"']+)["'][^>]*>/giu)) {
  const file = localPath(match[1]);
  if (file && fs.existsSync(file) && /\.(?:js|css)$/iu.test(file)) initialFiles.add(file);
}

const mediaUrls = [];
for (const match of html.matchAll(/<(?:img|video|source)\b[^>]+(?:src|poster)=["']([^"']+)["'][^>]*>/giu)) {
  mediaUrls.push(match[1]);
  const file = localPath(match[1]);
  if (file && fs.existsSync(file)) initialFiles.add(file);
}
if (mediaUrls.length > MAX_MEDIA_ATTRIBUTES) {
  fail(`${mediaUrls.length} SSR media URLs exceed the limit of ${MAX_MEDIA_ATTRIBUTES}`);
}

const forbiddenInitial = [
  "/img/partner/",
  "/img/home-optimized/partners/",
  "/img/home-optimized/milestones/",
  "/img/home-optimized/testimonials/",
  "/img/newHome/Yakit MITM",
  "/img/newHome/插件使用",
];
for (const prefix of forbiddenInitial) {
  if (mediaUrls.some((url) => decodeURIComponent(url).includes(prefix))) {
    fail(`deferred asset leaked into SSR: ${prefix}`);
  }
}

for (const weight of [500, 600]) {
  const font = path.join(
    ROOT,
    `static/fonts/noto-serif-sc-home/noto-serif-sc-home-${weight}.woff2`,
  );
  if (!fs.existsSync(font)) fail(`missing homepage font subset ${weight}`);
  initialFiles.add(font);
}

let initialBytes = 0;
for (const file of initialFiles) {
  const bytes = fs.readFileSync(file);
  initialBytes += /\.(?:js|css|html)$/iu.test(file)
    ? zlib.gzipSync(bytes, { level: 9 }).length
    : bytes.length;
}
if (initialBytes > MAX_INITIAL_BYTES) {
  fail(`${initialBytes} initial bytes exceed ${MAX_INITIAL_BYTES}`);
}

const heroVideo = path.join(
  ROOT,
  "static/img/home-optimized/hero/ascii-magic-47.mp4",
);
const heroVideoBytes = fs.statSync(heroVideo).size;
if (heroVideoBytes > MAX_HERO_VIDEO_BYTES) {
  fail(`hero video is ${heroVideoBytes} bytes; budget is ${MAX_HERO_VIDEO_BYTES}`);
}

process.stdout.write(
  `Homepage budget passed: ${(initialBytes / 1024).toFixed(1)} KiB initial, ` +
    `${mediaUrls.length} SSR media URLs, ${(heroVideoBytes / 1024).toFixed(1)} KiB deferred video\n`,
);
