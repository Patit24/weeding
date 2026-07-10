# Sritikuthi The Wedding Tales

A production-ready Next.js website for a premium Bengali wedding photography, wedding film, pre-wedding, planning, and event management studio.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run typecheck
npm run build
npm start
```

## Deployment To Vercel

Import the repository in Vercel, set `NEXT_PUBLIC_SITE_URL` to the production domain, and deploy. The app uses the Next.js App Router, generated sitemap, generated robots file, and remote image configuration for Unsplash placeholders.

## Replacing Images

Edit `src/data/images.ts`. Each image has a `src` and `alt`. If you move to local assets, place files in `public/` and update the paths. If you add a new remote image host, update `next.config.ts`.

## Editing Services

Edit `src/data/services.ts`. Detailed service pages are generated from the records in `services`; overview-only services live in `overviewServices`.

## Adding Portfolio Projects

Edit `src/data/portfolio.ts`. Add a new project with a unique `slug`, cover image, gallery, story, quote, credits, and `nextProject`.

## Adding Journal Posts

Edit `src/data/journal.ts`. Add a post with a unique `slug`, category, date, excerpt, body paragraphs, and image.

## Updating Contact Information

Edit `src/data/site.ts` for email, phone, WhatsApp, address, and social links. The WhatsApp quick-contact URL is generated from this file.

## Contact Form And Resend

The form validates with React Hook Form and Zod, then posts to `src/app/api/contact/route.ts`. The route currently logs a safe summary as a mock email handler.

To connect Resend later:

1. Install Resend: `npm install resend`.
2. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
3. Replace the mock block in `src/app/api/contact/route.ts` with `resend.emails.send(...)`.

## Connecting A CMS Later

The project currently uses local TypeScript data files. To connect a CMS, replace the imports in page components with fetch functions that return the same shapes as the local data types.
