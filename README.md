# loki495.github.io

Personal landing page: a single static page built with Alpine.js and Tailwind (both loaded from a CDN, no build step).

## Files

- `index.html`: the landing page (dark/light follows the system, toggle in the header).
- `content.js`: all the text and links (projects, skills, experience). Edit this to change content.
- `fade.js`: scroll effects (fade and blur by distance from the screen center, background parallax). Disabled for visitors who prefer reduced motion.
- `techy.html`: an alternate terminal-style version. Nothing links to it.

## Preview locally

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>. After editing `content.js` or `fade.js`, hard-reload; browsers cache them.

## Publishing

GitHub Pages serves the `main` branch root at <https://loki495.github.io>.
