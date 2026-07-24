# Event‑U‑All — Corporate Events Landing Site

Premium, conversion-focused landing site for **Event‑U‑All**, a concept-to-execution
corporate event management company. Built with Next.js 16 (App Router), React 19,
Tailwind CSS 4, and Framer Motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your Formspree endpoint + WhatsApp number
npm run dev
```

Open [http://localhost:3100](http://localhost:3100).

> **Local dev port: 3100** (pinned in `package.json`). Each project on this machine
> uses its own fixed port so several can run at once without colliding. Ports in
> use locally: `3000` Spoto Ranger (frontend), `3001` Spoto Ranger (admin),
> `3002` SPOTO Tech Labs, `3210` pitch deck. Give any new project its own unused
> port in its `dev` script.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Where the proposal/contact form POSTs leads |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL for metadata/sitemap |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Number behind the floating WhatsApp button |

## Structure

- `src/app` — routes (`/`, `/services`, `/destinations`, `/gallery`, `/contact`, stubs)
- `src/components/home` — homepage sections
- `src/components` — shared primitives (`Nav`, `Footer`, `FadeIn`, `AnimatedCounter`, `Carousel`, `ProposalForm`, `WhatsAppButton`, `StubPage`)

## Design system

Dark cinematic hero → light content body. Brand tokens live in `src/app/globals.css`
(`--hero-*` for dark surfaces, `--bg`/`--surface`/`--fg` for the light body). Swap the
`--accent` / `--accent-2` values and the logo once final brand assets are available.
