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

## Notes for Editors

- **Footer** appears on every page — any footer change must be applied to all 7 HTML files.
- **Contact details** (phone, email, address) appear in `contact.html`, `index.html` (Schema.org JSON-LD), `services.html`, `terms.html`, and `privacy.html`.
- **portfolio.html** is very large (~9600 lines of inline SVG). Use `offset`/`limit` when reading it to avoid loading the full file.
- `terms.css` is shared between `terms.html` and `privacy.html`.

## Contact

Ralph Muranda — Heritage Plastercraft SW
48 Hampton Park, Bristol BS6 6LJ
Tel: 07946 083 027 | heritageplastercraft@gmail.com
