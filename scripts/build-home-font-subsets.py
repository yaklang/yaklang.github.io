#!/usr/bin/env python3
"""Build and verify the two Chinese serif font subsets used by the homepage."""

from __future__ import annotations

import argparse
import json
import subprocess
from pathlib import Path

from fontTools.ttLib import TTFont


ROOT = Path(__file__).resolve().parent.parent
FONT_SOURCE = ROOT / "static/fonts/noto-serif-sc"
FONT_OUTPUT = ROOT / "static/fonts/noto-serif-sc-home"
CHARSET_FILE = FONT_OUTPUT / "charset.txt"
WEIGHTS = (500, 600)
MAX_FONT_BYTES = 320 * 1024


def strings(value):
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for child in value.values():
            yield from strings(child)
    elif isinstance(value, list):
        for child in value:
            yield from strings(child)


def collect_charset() -> str:
    chars = {chr(codepoint) for codepoint in range(0x20, 0x7F)}
    translations = json.loads((ROOT / "src/locales/zh.json").read_text())
    for value in strings(translations):
        chars.update(value)
    for source in (ROOT / "src/components/homeNew").glob("*.tsx"):
        chars.update(source.read_text())

    # Keep only text-relevant code points, not arbitrary source-code symbols.
    return "".join(
        sorted(
            char
            for char in chars
            if ord(char) < 0x300
            or 0x3000 <= ord(char) <= 0x9FFF
            or 0xFF00 <= ord(char) <= 0xFFEF
        )
    )


def build(charset: str) -> None:
    FONT_OUTPUT.mkdir(parents=True, exist_ok=True)
    CHARSET_FILE.write_text(charset + "\n")
    unicodes = ",".join(f"U+{ord(char):04X}" for char in charset)
    for weight in WEIGHTS:
        source = FONT_SOURCE / f"noto-serif-sc-{weight}.woff2"
        output = FONT_OUTPUT / f"noto-serif-sc-home-{weight}.woff2"
        subprocess.run(
            [
                "pyftsubset",
                str(source),
                f"--output-file={output}",
                f"--unicodes={unicodes}",
                "--flavor=woff2",
                "--layout-features=*",
                "--glyph-names",
                "--symbol-cmap",
                "--legacy-cmap",
                "--notdef-glyph",
                "--notdef-outline",
                "--recommended-glyphs",
                "--name-IDs=*",
                "--name-legacy",
                "--name-languages=*",
            ],
            check=True,
        )


def verify(charset: str) -> None:
    if not CHARSET_FILE.exists() or CHARSET_FILE.read_text().rstrip("\n") != charset:
        raise RuntimeError("homepage font charset is stale; rebuild the subsets")
    expected = {ord(char) for char in charset}
    for weight in WEIGHTS:
        output = FONT_OUTPUT / f"noto-serif-sc-home-{weight}.woff2"
        if not output.exists():
            raise RuntimeError(f"missing homepage font subset: {output.relative_to(ROOT)}")
        size = output.stat().st_size
        if size > MAX_FONT_BYTES:
            raise RuntimeError(f"{output.relative_to(ROOT)} exceeds {MAX_FONT_BYTES} bytes")
        with TTFont(output) as font:
            available = set((font.getBestCmap() or {}).keys())
        missing = expected - available
        # Some ASCII control-style characters do not have an explicit glyph.
        missing = {codepoint for codepoint in missing if codepoint >= 0x20}
        if missing:
            preview = " ".join(f"U+{codepoint:04X}" for codepoint in sorted(missing)[:8])
            raise RuntimeError(f"{output.relative_to(ROOT)} misses glyphs: {preview}")
        print(f"verified {output.relative_to(ROOT)}: {size / 1024:.1f} KiB")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()
    charset = collect_charset()
    if args.write:
        build(charset)
    verify(charset)


if __name__ == "__main__":
    main()
