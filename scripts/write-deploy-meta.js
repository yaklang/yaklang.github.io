#!/usr/bin/env node

const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const output = path.resolve(root, process.argv[2] || "build/deploy-meta.json");
const pkg = require(path.join(root, "package.json"));
const commit =
  process.env.GITHUB_SHA ||
  execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim();

const metadata = {
  project: "yaklang.github.io",
  version: pkg.version,
  commit,
  ref: process.env.GITHUB_REF || null,
  runId: process.env.GITHUB_RUN_ID || null,
  generatedAt: new Date().toISOString(),
};

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(metadata, null, 2)}\n`);
process.stdout.write(`Wrote ${path.relative(root, output)} for ${commit}\n`);
