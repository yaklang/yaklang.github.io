#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "$0")/.." && pwd)"
source_video="$repo_dir/materials/home-media-sources/ascii-magic-47.mp4"
output_dir="$repo_dir/static/img/home-optimized/hero"

mkdir -p "$output_dir"

ffmpeg -hide_banner -loglevel error -y -i "$source_video" \
  -an -c:v libx264 -preset slow -crf 33 -movflags +faststart \
  -pix_fmt yuv420p -vf "scale=1280:-2:flags=lanczos,fps=24" \
  "$output_dir/ascii-magic-47.mp4"

ffmpeg -hide_banner -loglevel error -y -ss 0.5 -i "$source_video" \
  -frames:v 1 -vf "scale=1280:-2:flags=lanczos" \
  -c:v libwebp -quality 88 \
  "$output_dir/ascii-magic-47-poster.webp"

video_bytes=$(wc -c < "$output_dir/ascii-magic-47.mp4")
poster_bytes=$(wc -c < "$output_dir/ascii-magic-47-poster.webp")
if (( video_bytes > 1100000 || poster_bytes > 180000 )); then
  echo "optimized hero media exceeds budget: video=$video_bytes poster=$poster_bytes" >&2
  exit 1
fi

echo "Generated hero media: video=$video_bytes bytes poster=$poster_bytes bytes"
