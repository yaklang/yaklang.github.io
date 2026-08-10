#!/usr/bin/env bash

set -euo pipefail

node scripts/next-site-version.js --selftest
NEXT_VERSION=$(node scripts/next-site-version.js)
yarn version --new-version "${NEXT_VERSION}"
git push
git push --tags
