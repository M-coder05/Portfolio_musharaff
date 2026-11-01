# Mohammed Musharaff S — Portfolio

The portfolio is a static React site. Portfolio content is maintained in one file, `src/data/portfolioData.js`; there is no database or backend. Original images, the resume, and stylesheet are retained under the same `assets/...` URLs.

## Folder structure

```text
portfolio-react/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── resume/
│   ├── 404.html
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/       # Page sections, project gallery, accessible lightbox
│   ├── data/
│   │   └── portfolioData.js
│   ├── hooks/            # Viewport reveal and live IST clock
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css         # Editorial stylesheet with dark-only palette and responsive motion
├── index.html
└── vite.config.js
```

## Add a project

Edit the `projects` array in `src/data/portfolioData.js` and add a project object. Include a unique `id`, title and description, links, metadata, specifications, and a `gallery` array. Each gallery item needs a `src` under `assets/images/`, `width`, `height`, and `caption`; add its image file under `public/assets/images/`. Also add a `tags` array (`Web`, `AI/ML`, and/or `Python`) and `caseStudy` values for `role`, `whatBuilt`, and `whatLearned`. Don't infer project claims.

## Add a certificate or achievement

Add a record to the `achievements` array in `src/data/portfolioData.js`. Give it a unique `id`, `category` (`certificates`, `awards`, or `events`), `categoryLabel`, `plateNumber`, `title`, `event`, `issuer`, `date`, `highlight`, `image`, `width`, `height`, and `alt`. Put the image at the matching path under `public/assets/images/`. The category counts and lightbox content are calculated from this array.

## Portfolio content and features

- All profile, project, repository, currently-learning, achievement, and SEO content lives in `src/data/portfolioData.js`.
- Add learning topics to `currently`; add static pinned repositories to `repositories` (no GitHub API calls are made).
- The project filters use each project's `tags`. Only tag work that is actually represented in that project.
- The intro appears once per browser session, after page load, and is omitted when reduced motion is enabled. Press any key or click it to skip.
- Keyboard navigation: press `G`, then `H`, `A`, `P`, `E`, or `C`. Press `?` for the shortcut list.
- Project case studies expand inline. The certificate inspector is code-split and retains Escape, arrow-key, focus-trap, and swipe navigation.

## Environment variables

Copy `.env.example` to `.env` in the project root and set the variables for your deployment:

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Canonical site URL, without a trailing slash. Defaults to `https://mohammedmusharaffm.in`; set it when building for another deployment URL. Generates canonical/social metadata, Person JSON-LD, the sitemap, and robots sitemap reference. |
| `VITE_ANALYTICS_URL` | Optional GoatCounter endpoint. Leave empty to prevent the analytics script from loading. |

Restart `npm run dev` after changing `.env`. Never commit `.env`; `.env.example` contains empty values and is safe to commit.

For Netlify, add the same variables under **Site configuration → Environment variables**, then redeploy the site.

The contact form runs entirely in the browser with no server, API, database, third-party form service, or secret keys. It validates the fields and prepares a `mailto:` draft; the visitor reviews and sends it from their email app. A direct email link and copy-email button are also provided.

## Search and link previews

The build fills canonical/social metadata and the Person JSON-LD schema using `VITE_SITE_URL` and `portfolioData.js`. `public/robots.txt` and `public/sitemap.xml` receive the production URL at build time. The 1200×630 preview image is `public/og-image.png`; replace it with a final 1200×630 PNG if you want different artwork. Update `seo.image` in `portfolioData.js` when changing its filename.

The favicon, SVG favicon, Apple touch icon, install icons, and dark site manifest use the circle-and-crosshair registration mark.

## Run locally

From this directory:

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

Set `VITE_SITE_URL` to the canonical deployment URL in `.env`, then publish with:

```sh
npm run deploy
```

The deploy command builds the site and publishes `dist/` to the `gh-pages` branch. The build selects `/portfolio/` for the GitHub Pages URL and `/` for Netlify/custom root deployments. Ensure GitHub Pages is configured to deploy from the `gh-pages` branch. Netlify should publish the `dist` directory; its `public/404.html` is included in the build.

## Form, analytics, and preview checks

Before deploying, add the production site URL to your hosting environment. Create a GoatCounter site and set its `/count` endpoint only if analytics is wanted. Run a production preview with:

```sh
npm run build
npm run preview
```

In Lighthouse, audit the mobile page for Performance, Accessibility, Best Practices, and SEO. Also test the contact form with valid/invalid values, the honeypot path, WhatsApp and email fallback links, keyboard shortcuts, the project filters, reduced motion, and the certificate lightbox.
