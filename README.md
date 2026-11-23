# CallChrist.com

Scripture and prayer for hard moments. Static Astro site, hosted on Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
4. After the first deploy: the project → Custom domains → add `callchrist.com` and `www.callchrist.com`.
5. Redirect www to the bare domain: Rules → Redirect Rules → "Redirect from WWW to root" template.

Every push to `main` redeploys automatically.

## Settings

Edit `src/site.config.ts`:

- `newsletterAction`: the form POST URL from MailerLite / Buttondown. The form shows "coming soon" until set.
- `cfAnalyticsToken`: Cloudflare Web Analytics token (or just enable Web Analytics on the Pages project and leave this empty).
- `donateUrl`: Stripe Payment Link or similar. Shows in the footer when set.

## Adding a moment

Create `src/content/moments/<slug>.md`. Copy an existing file as a template.

| Field | Purpose |
|---|---|
| `title` | Page H1, written to the person ("When you're afraid") |
| `seoTitle` | Browser/Google title, written like a search ("Bible Verses and a Prayer for Fear") |
| `description` | Meta description, max 160 characters |
| `category` | `emotional`, `loss`, `family`, `health`, `work`, or `faith` |
| `opening` | One gentle line under the title |
| `verses` | 1–3 verses, `ref` + `text` (KJV, public domain) |
| `prayer` | One sentence group per line; each line becomes a paragraph |
| `showCrisisNote` | `true` for pages where someone may be in danger (grief, loneliness, despair, etc.) |
| `related` | Slugs of other moments to link to |
| `published` | Date |

The Markdown body is the short reflection (2–4 paragraphs). The build fails if a field is missing, so mistakes get caught before deploy.

**Check every verse against a KJV source before publishing.**
