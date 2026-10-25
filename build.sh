#!/bin/sh
# Compiles styles.css and stamps each asset reference with a content hash so browsers refetch changed files.
set -e
cd "$(dirname "$0")"
npx --yes tailwindcss@3.4.19 -i input.css -o styles.css --minify
for f in styles.css content.js fade.js; do
  h=$(sha1sum "$f" | cut -c1-8)
  sed -i -E "s#\"$f(\?v=[0-9a-f]+)?\"#\"$f?v=$h\"#" index.html techy.html
done
