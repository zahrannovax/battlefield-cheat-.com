# Battlefield 6 Cheats — Marketing Site

Static Astro 7 site for [battlefieldcheat.com](https://battlefieldcheat.com). Primary SEO keyword: **battlefield 6 cheats** (secondary: battlefield 6 hacks, bf6 dma cheats, battlefield 6 esp, battlefield 6 aimbot, undetected battlefield 6 cheats).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages deployment with `functions/_middleware.js`

## Quick start

```bash
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
node scripts/generate-blog-posts.mjs
npm run dev
```

Build and validate sitemaps:

```bash
npm run build:validate
```

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project named **battlefield-cheat**
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add custom domain **battlefieldcheat.com** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**

CLI deploy:

```bash
npm run pages:deploy
```

## Environment

- Node.js >= 22.12.0
- Checkout URL: Zadeyo Battlefield 6 product (`siteConfig.checkoutUrl` in `src/data/brand.ts`)
- Discord URL: `siteConfig.discordUrl` in `src/data/brand.ts`

## SEO Architecture
When retargeting another game: edit `src/data/brand.ts` first, then simple-pages / FAQs. Keep simple language, short pages, and the same title → H1 → intro → sections formula. Do not invent a new SEO architecture.

## License

Private — for battlefieldcheat.com deployment only.
