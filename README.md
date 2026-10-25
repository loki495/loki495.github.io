# loki495.github.io

Personal landing page: a single static page built with Alpine.js and Tailwind CSS.

## Files

- `index.html`: the landing page (dark/light follows the system, toggle in the header).
- `content.js`: all the text and links (projects, skills, experience). Edit this to change content.
- `fade.js`: scroll effects (fade and blur by distance from the screen center, background parallax). Disabled for visitors who prefer reduced motion.
- `styles.css`: compiled Tailwind output, committed because Pages has no build step. Do not edit by hand.
- `favicon.svg`: the "AC" tab icon.
- `og.png`: 1200x630 social preview image used by the Open Graph and Twitter tags. `apple-touch-icon.png`: 180x180 home-screen icon.
- `robots.txt`, `sitemap.xml`: crawler files (single page).
- `techy.html`: an alternate terminal-style version. Nothing links to it, and it is marked `noindex`.
- `input.css`, `tailwind.config.js`, `build.sh`: Tailwind source and build.

Alpine.js is loaded from jsDelivr, pinned to an exact version with a Subresource Integrity hash.

## SEO and sharing

`index.html` carries the title, description, canonical URL, Open Graph and Twitter tags, and JSON-LD (`WebSite`, `ProfilePage`, `Person`). The page is rendered client-side, so a `<noscript>` block holds the essentials (name, role, summary, contact links) for crawlers and visitors without JavaScript. That block, the meta description and the JSON-LD repeat text from `content.js`; update them when the pitch, role or location change.

The canonical host is `https://loki495.github.io/`. It appears in `index.html` (canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD) and in `robots.txt` and `sitemap.xml`. If the site moves to another domain, replace it in those files.

## Preview locally

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## After changing code or content

Run `./build.sh` (needs Node). It recompiles `styles.css` and stamps `styles.css`, `content.js` and `fade.js` references in both pages with a content hash (`?v=...`), so browsers fetch the new files. Commit the result. A new Tailwind class in any page or in `content.js` only takes effect after a rebuild.

## Publishing

GitHub Pages serves the `main` branch root at <https://loki495.github.io>.
