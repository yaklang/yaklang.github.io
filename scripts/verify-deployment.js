#!/usr/bin/env node

const args = process.argv.slice(2);
const valueOf = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};
const expectedCommit = valueOf("--commit");
const expectedVersion = valueOf("--version");
const urls = args.filter((arg, index) => !arg.startsWith("--") && !args[index - 1]?.startsWith("--"));

if (!expectedCommit || !expectedVersion || urls.length === 0) {
  throw new Error(
    "usage: verify-deployment.js --commit SHA --version VERSION https://host/ ...",
  );
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function verify(baseUrl) {
  let lastError;
  for (let attempt = 1; attempt <= 24; attempt += 1) {
    try {
      const url = new URL("deploy-meta.json", baseUrl);
      url.searchParams.set("expected", expectedCommit);
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const metadata = await response.json();
      if (metadata.commit !== expectedCommit || metadata.version !== expectedVersion) {
        throw new Error(
          `found commit=${metadata.commit} version=${metadata.version}`,
        );
      }
      process.stdout.write(`${baseUrl} serves ${expectedCommit} v${expectedVersion}\n`);
      return;
    } catch (error) {
      lastError = error;
      process.stdout.write(`${baseUrl} attempt ${attempt}/24: ${error.message}\n`);
      if (attempt < 24) await wait(10000);
    }
  }
  throw new Error(`${baseUrl} did not converge: ${lastError?.message}`);
}

Promise.all(urls.map(verify)).catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
