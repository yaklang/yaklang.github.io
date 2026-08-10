#!/usr/bin/env node

"use strict";

const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..");

const parseVersion = (value) => {
  const match = String(value).trim().match(/^v?(\d+)\.(\d+)\.(\d+)$/);
  if (!match) return null;
  return match.slice(1).map(Number);
};

const compareVersions = (left, right) => {
  for (let index = 0; index < 3; index += 1) {
    if (left[index] !== right[index]) return left[index] - right[index];
  }
  return 0;
};

const nextMinorVersion = (packageVersion, tags) => {
  const packageParts = parseVersion(packageVersion);
  if (!packageParts) {
    throw new Error(`package.json contains an invalid version: ${packageVersion}`);
  }

  const versions = [packageParts, ...tags.map(parseVersion).filter(Boolean)];
  const highest = versions.reduce((current, candidate) =>
    compareVersions(candidate, current) > 0 ? candidate : current,
  );

  return `${highest[0]}.${highest[1] + 1}.0`;
};

const selftest = () => {
  assert.equal(nextMinorVersion("0.397.0", ["v0.398.0"]), "0.399.0");
  assert.equal(nextMinorVersion("0.399.0", ["v0.398.0"]), "0.400.0");
  assert.equal(nextMinorVersion("1.2.7", ["v1.1.0", "not-a-version"]), "1.3.0");
  console.log("next-site-version selftest passed");
};

if (process.argv.includes("--selftest")) {
  selftest();
} else {
  const packageJson = require(path.join(repoRoot, "package.json"));
  const tags = execFileSync("git", ["tag", "--list", "v*"], {
    cwd: repoRoot,
    encoding: "utf8",
  })
    .split(/\r?\n/)
    .filter(Boolean);
  process.stdout.write(`${nextMinorVersion(packageJson.version, tags)}\n`);
}
