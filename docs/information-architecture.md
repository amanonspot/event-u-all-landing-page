# Event‑U‑All — Information Architecture

Corporate event management landing site · Next.js 16 App Router
Primary goal: **proposal form submissions** · Secondary: calls, WhatsApp chats

Local dev: `http://localhost:3002` · Repo: `github.com/amanonspot/event-u-all-landing-page`

---

## 1. Site map

```
/                        Homepage (single-scroll, 14 sections — see §2)
├── /services            5 service groups (anchor targets: #corporate #rr #offsites #launches #exhibitions)
├── /destinations        8 destination cards (Goa, Thailand, Vietnam, Dubai, Bali, Bengaluru, Coorg, Lonavala)
├── /gallery             Masonry photo grid + click-to-open lightbox
├── /contact             Contact cards (call / email / WhatsApp / office) + full proposal form
│
├── /about               Stub — "coming soon" + Get Proposal CTA
├── /case-studies        Stub — "coming soon" + Get Proposal CTA
├── /blog                Stub — "coming soon"
├── /privacy             Stub — legal placeholder
├── /terms               Stub — legal placeholder
│
├── /sitemap.xml         Generated (src/app/sitemap.ts)
└── /robots.txt          Generated (src/app/robots.ts)
```

Persistent on every page: **sticky Nav**, **Footer**, **floating WhatsApp button**.

---

## 2. Homepage section order

| # | Section | id | Surface | Content / behaviour |
|---|---------|----|---------|---------------------|
| 1 | Hero | — | dark | Looping muted aerial event video bg (`/videos/hero-aerial.mp4`), headline "Corporate Events Planned to Perfection.", CTAs **Get Proposal** → `/contact`, **Explore Services** → `/services`, 3 animated stats (20+ yrs · 1,000+ clients · 5,000+ events) |
| 2 | Trusted By | — | dark | Infinite logo marquee (⚠ placeholder brand names) |
| 3 | What Are You Planning? | `#services`* | light | 6 photo category tiles → `/services` anchors (R&R, Offsites, Team Building, Annual Day, Real Estate Launch, Expos) |
| 4 | Featured Destinations | — | light | Horizontal scroll-snap carousel, 8 photo cards → `/destinations` |
| 5 | Team Building Activities | `#activities` | light | 6 photo cards + "View All Activities" → `/services#team-building` |
| 6 | Artist Categories | `#artists` | dark | 6 photo cards (Celebrity, Bands, Comedians, Speakers, Emcees, DJs) |
| 7 | Image Gallery preview | — | light | 4 photos + "View Full Gallery" → `/gallery` |
| 8 | Featured Work (films) | `#work` | dark | 4 event-film cards (16:9 posters) → lightbox video player; "coming soon" state until hosted URLs are set |
| 9 | Why Event‑U‑All | — | light | 4 animated stat cards + 6 checkmark differentiators |
| 10 | Testimonials | — | light | 5★ quote carousel with dot pagination (⚠ placeholder quotes) |
| 11 | Industries Served | — | light | 11 industry chips |
| 12 | Process | — | dark | 7-step timeline (Requirement → Feedback) |
| 13 | FAQ | — | light | 6-question accordion |
| 14 | Get Proposal | `#proposal` | light | Benefits list + full proposal form (primary conversion point) |

\* the tile grid carries the `services` id for in-page linking.

---

## 3. Navigation

**Header (sticky; transparent over hero → solid on scroll):**
Home `/` · Services `/services` · Destinations `/destinations` · Activities `/#activities` · Artists `/#artists` · Gallery `/gallery` · Contact `/contact` · **Call Now** `tel:` · **Get Proposal** `/contact` (primary CTA). Mobile: hamburger → full-screen drawer.

**Footer (dark):** brand blurb + contact info · Services (anchor links into `/services`) · Company (About, Case Studies, Gallery, Contact) · Socials (LinkedIn, Instagram, Facebook, YouTube) · Privacy / Terms.

**Floating:** WhatsApp button (`wa.me` deep link, pre-filled message) on every page.

---

## 4. Conversion paths

```
Primary    Any page → Get Proposal CTA → /contact form → Formspree → sales follow-up
           Homepage scroll → #proposal form (same form component)
Secondary  Call Now (tel:) · WhatsApp float / post-submit "Continue on WhatsApp" · mailto:
```

Proposal form fields: name*, company*, email*, phone*, event type* (8 options), date, guests, destination, budget (5 brackets), requirements. Client-side validation → POST to `NEXT_PUBLIC_FORMSPREE_ENDPOINT` → success card with WhatsApp handoff.

---

## 5. Content sources (single source of truth)

| File | Owns |
|------|------|
| `src/lib/site.ts` | Brand/contact info, nav links, stats, client logos, categories, destinations, activities, artists, why-us, process, testimonials, industries, service groups, FAQs |
| `src/lib/videos.ts` | Hero video + 4 featured-work films (external URLs via `NEXT_PUBLIC_*` env) |
| `src/lib/gallery.ts` | Gallery items (Unsplash photo IDs → swap for real photos) |
| `src/lib/images.ts` | `ux()` Unsplash URL helper + hero image id |
| `public/videos/` | Bundled hero clip + film poster JPGs |
| `public/logo.png` | Brand wordmark (black on transparent; CSS-inverted to white on dark surfaces) |

---

## 6. Known placeholders (swap before launch)

- Client logo marquee names (unverified brands) — replace with real clients or soften copy
- Contact details: phone, email, address, WhatsApp number, social URLs (`src/lib/site.ts`)
- Testimonial quotes
- Featured-work video URLs (upload compressed MP4s, set `NEXT_PUBLIC_WORK_VIDEO_*`)
- Domain `eventuall.com` (`NEXT_PUBLIC_SITE_URL`)
- Stub pages: About, Case Studies, Blog, Privacy, Terms
