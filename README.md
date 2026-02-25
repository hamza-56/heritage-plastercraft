# Heritage Plastercraft

Website for Heritage Plastercraft SW — a traditional plastering and restoration business based in Bristol, UK.

## Pages

| File | URL | Description |
|------|-----|-------------|
| `index.html` | `/` | Home — hero carousel, services overview, testimonials |
| `bio.html` | `/bio.html` | About Ralph Muranda |
| `portfolio.html` | `/portfolio.html` | Inline SVG gallery (~9600 lines) |
| `services.html` | `/services.html` | Services listing |
| `contact.html` | `/contact.html` | Contact form and details |
| `terms.html` | `/terms.html` | Terms & Conditions |
| `privacy.html` | `/privacy.html` | Privacy Policy |

## Project Structure

```
/
├── index.html
├── bio.html
├── portfolio.html
├── services.html
├── contact.html
├── terms.html
├── privacy.html
├── css/
│   ├── global.css       # Shared layout, header, footer, sub-page banners
│   ├── home.css         # Home-specific overrides (carousel banner)
│   ├── bio.css
│   ├── portfolio.css
│   ├── services.css
│   ├── contact.css
│   └── terms.css        # Shared by terms.html and privacy.html
├── js/
│   ├── global.js        # Shared behaviour (nav, footer)
│   ├── home.js          # Carousel
│   ├── portfolio.js
│   └── contact.js
├── manifest.json            # PWA web app manifest
├── sw.js                    # Service worker (precache + stale-while-revalidate)
├── images/
│   ├── logo.png
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png       # 180×180 iOS
│   ├── android-chrome-192x192.png # 192×192 PWA
│   ├── android-chrome-512x512.png # 512×512 PWA
│   ├── icon-maskable-512.png      # 512×512 maskable (Android adaptive icons)
│   ├── portfolio/
│   └── services/
└── assets/
```

## Tech Stack

Plain HTML, CSS, and JavaScript — no build tool, no framework, no dependencies.

Open any `.html` file directly in a browser, or serve locally:

```bash
npx serve .
# or
python3 -m http.server
```

## Design

- **Fonts:** Playfair Display (headings), Nunito (body), Bodoni Moda (banner titles) — loaded from Google Fonts
- **Colours:** Navy `#0b1a33`, Gold `#c6a667`, Cream `#f7f5f2`, Pastel banner `#e8e0d4`
- **Banners:** Sub-pages use a plain pastel background; the home page carousel has a black background overridden in `home.css`

## PWA

The site is a Progressive Web App — installable on mobile and desktop.

| File | Purpose |
|------|---------|
| `manifest.json` | App name, theme colour (`#0b1a33`), icon references |
| `sw.js` | Precaches all pages, CSS, JS, and `images/logo.png` on install; stale-while-revalidate for everything else |
| `js/global.js` | Registers the service worker on page load |

**Icons** (all in `images/`):

| File | Size | Used by |
|------|------|---------|
| `favicon.ico` | 16 + 32px | Browser tab (legacy) |
| `favicon-16x16.png` / `favicon-32x32.png` | 16×16, 32×32 | Browser tab |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `android-chrome-192x192.png` | 192×192 | Android / PWA install |
| `android-chrome-512x512.png` | 512×512 | PWA splash screen |
| `icon-maskable-512.png` | 512×512 | Android adaptive icons (extra safe-zone padding) |

To update icons, regenerate from `images/logo.png` at the above sizes (navy `#0b1a33` background) and update `manifest.json` if filenames change. Bump the `CACHE` version string in `sw.js` after any asset change to force clients to refetch.

## Notes for Editors

- **Footer** appears on every page — any footer change must be applied to all 7 HTML files.
- **Contact details** (phone, email, address) appear in `contact.html`, `index.html` (Schema.org JSON-LD), `services.html`, `terms.html`, and `privacy.html`.
- **portfolio.html** is very large (~9600 lines of inline SVG). Use `offset`/`limit` when reading it to avoid loading the full file.
- `terms.css` is shared between `terms.html` and `privacy.html`.

## Contact

Ralph Muranda — Heritage Plastercraft SW
48 Hampton Park, Bristol BS6 6LJ
Tel: 07946 083 027 | heritageplastercraft@gmail.com
