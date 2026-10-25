# loki495.github.io

Personal landing page: a single static page built with Alpine.js and Tailwind CSS.

## Files

- `index.html`: the landing page (dark/light follows the system, toggle in the header).
- `content.js`: all the text and links (projects, skills, experience). Edit this to change content.
- `fade.js`: scroll effects (fade and blur by distance from the screen center, background parallax). Disabled for visitors who prefer reduced motion.
- `styles.css`: compiled Tailwind output, committed because Pages has no build step. Do not edit by hand.
- `favicon.svg`: the "AC" tab icon.
- `techy.html`: an alternate terminal-style version. Nothing links to it.
- `input.css`, `tailwind.config.js`, `build.sh`: Tailwind source and build.

Alpine.js is loaded from jsDelivr, pinned to an exact version with a Subresource Integrity hash.

## Preview locally

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## After changing code or content

Run `./build.sh` (needs Node). It recompiles `styles.css` and stamps `styles.css`, `content.js` and `fade.js` references in both pages with a content hash (`?v=...`), so browsers fetch the new files. Commit the result. A new Tailwind class in any page or in `content.js` only takes effect after a rebuild.

## Publishing

GitHub Pages serves the `main` branch root at <https://loki495.github.io>.
