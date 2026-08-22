#!/usr/bin/env python3

"""Upload a prepare-oss-assets manifest to Aliyun OSS and verify public URLs."""

from __future__ import annotations

import argparse
import concurrent.futures
import json
import mimetypes
import os
import pathlib
import sys
import threading
import time
import urllib.error
import urllib.request


def fail(message: str) -> None:
    raise RuntimeError(message)


def load_manifest(path: pathlib.Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    if data.get("version") != 1 or not isinstance(data.get("assets"), list):
        fail("unsupported or malformed OSS asset manifest")
    return data


def content_type(path: str) -> str:
    overrides = {
        ".mp4": "video/mp4",
        ".webm": "video/webm",
        ".woff": "font/woff",
        ".woff2": "font/woff2",
        ".ttf": "font/ttf",
        ".otf": "font/otf",
        ".wasm": "application/wasm",
    }
    suffix = pathlib.PurePosixPath(path).suffix.lower()
    return overrides.get(suffix) or mimetypes.guess_type(path)[0] or "application/octet-stream"


def verify_public(asset: dict, attempts: int = 5) -> None:
    last_error: Exception | None = None
    for attempt in range(attempts):
        try:
            request = urllib.request.Request(
                asset["url"],
                method="HEAD",
                headers={"Origin": "https://yaklang.com"},
            )
            with urllib.request.urlopen(request, timeout=30) as response:
                if response.status != 200:
                    fail(f"unexpected HTTP {response.status}")
                length = int(response.headers.get("Content-Length", "-1"))
                if length != asset["size"]:
                    fail(f"Content-Length {length} != {asset['size']}")
                cors = response.headers.get("Access-Control-Allow-Origin", "")
                if cors not in {"*", "https://yaklang.com"}:
                    fail(f"missing compatible CORS response header: {cors!r}")
                return
        except (OSError, RuntimeError, urllib.error.URLError) as error:
            last_error = error
            if attempt + 1 < attempts:
                time.sleep(2**attempt)
    fail(f"public verification failed for {asset['url']}: {last_error}")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("manifest", type=pathlib.Path)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--prune-after-verify", action="store_true")
    args = parser.parse_args()

    manifest_path = args.manifest.resolve()
    manifest = load_manifest(manifest_path)
    expected_prefix = manifest["objectPrefix"].rstrip("/") + "/"
    project_root = pathlib.Path.cwd()
    build_dir = (project_root / manifest["buildDir"]).resolve()
    if not build_dir.is_dir():
        fail(f"manifest build directory does not exist: {build_dir}")

    prune_targets: dict[pathlib.Path, int] = {}

    for asset in manifest["assets"]:
        source = (project_root / asset["sourceFile"]).resolve()
        if not source.is_file():
            fail(f"source asset does not exist: {source}")
        if source.stat().st_size != asset["size"]:
            fail(f"source asset size changed: {source}")
        if not asset["objectKey"].startswith(expected_prefix):
            fail(f"object key escaped configured prefix: {asset['objectKey']}")
        relative_paths = asset.get("relativePaths")
        if not isinstance(relative_paths, list) or not relative_paths:
            fail(f"asset has no relativePaths: {asset['objectKey']}")
        for relative_path in relative_paths:
            target = (build_dir / relative_path).resolve()
            if not target.is_relative_to(build_dir):
                fail(f"prune target escaped build directory: {target}")
            if not target.is_file() or target.stat().st_size != asset["size"]:
                fail(f"manifest asset path changed or is missing: {target}")
            prune_targets[target] = asset["size"]

    if args.dry_run:
        prune_bytes = sum(prune_targets.values())
        print(
            f"validated {len(manifest['assets'])} OSS assets; "
            f"prunable_paths={len(prune_targets)}, prunable_bytes={prune_bytes}"
        )
        return 0

    access_key_id = os.environ.get("OSS_KEY_ID")
    access_key_secret = os.environ.get("OSS_KEY_SECRET")
    if not access_key_id or not access_key_secret:
        fail("OSS_KEY_ID and OSS_KEY_SECRET are required")

    try:
        import oss2  # type: ignore
    except ImportError as error:
        fail(f"oss2 is required: {error}")

    endpoint = os.environ.get("OSS_ENDPOINT", "https://oss-accelerate.aliyuncs.com")
    bucket_name = os.environ.get("OSS_BUCKET", "yaklang")
    workers = int(os.environ.get("OSS_UPLOAD_WORKERS", "12"))
    if not 1 <= workers <= 32:
        fail(f"OSS_UPLOAD_WORKERS must be between 1 and 32, got {workers}")
    auth = oss2.Auth(access_key_id, access_key_secret)
    thread_state = threading.local()

    def get_bucket():
        if not hasattr(thread_state, "bucket"):
            thread_state.bucket = oss2.Bucket(auth, endpoint, bucket_name)
        return thread_state.bucket

    def publish(asset: dict) -> tuple[str, str]:
        bucket = get_bucket()
        key = asset["objectKey"]
        source = str((project_root / asset["sourceFile"]).resolve())
        exists = False
        try:
            head = bucket.head_object(key)
            exists = head.content_length == asset["size"]
        except oss2.exceptions.NoSuchKey:
            exists = False
        except oss2.exceptions.ServerError as error:
            if getattr(error, "status", None) != 404:
                raise

        if exists:
            return "exists", key

        headers = {
            "Cache-Control": "public, max-age=31536000, immutable",
            "Content-Type": content_type(asset["relativePath"]),
            "x-oss-meta-sha256": asset["sha256"],
            "x-oss-object-acl": "public-read",
        }
        result = bucket.put_object_from_file(key, source, headers=headers)
        if result.status not in {200, 201}:
            fail(f"upload failed for {key}: HTTP {result.status}")
        return "uploaded", key

    uploaded = 0
    skipped = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        publication_results = list(executor.map(publish, manifest["assets"]))
    for status, key in publication_results:
        if status == "exists":
            skipped += 1
            print(f"exists: {key}")
        else:
            uploaded += 1
            print(f"uploaded: {key}")

    def verify(asset: dict) -> str:
        verify_public(asset)
        return asset["url"]

    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        verified_urls = list(executor.map(verify, manifest["assets"]))
    for url in verified_urls:
        print(f"verified: {url}")

    pruned_bytes = 0
    if args.prune_after_verify:
        for target, size in prune_targets.items():
            target.unlink()
            pruned_bytes += size
        print(
            f"pruned verified local build copies: paths={len(prune_targets)}, "
            f"bytes={pruned_bytes}"
        )

    print(
        f"OSS asset publication complete: uploaded={uploaded}, skipped={skipped}, "
        f"verified={len(manifest['assets'])}, bytes={manifest['totalBytes']}, "
        f"pruned_bytes={pruned_bytes}"
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:
        print(f"ERROR: {error}", file=sys.stderr)
        raise SystemExit(1)
