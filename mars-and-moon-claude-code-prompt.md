# Claude Code Prompt · Mars & Moon Marketing Site
**Paste this prompt in full when starting a new Claude Code session.**

---

You are building the marketing website for **Mars & Moon** — a private atelier of slow-fashion lingerie delivered in limited subscription drops. This is not an e-commerce site. It is a salon. It opens the door.

## Your Reference Document

Read the full site specification in `mars-and-moon-site-spec.md` before writing any code. Every decision about color, type, spacing, layout, animation, and media is defined there. Do not deviate from those tokens.

## What to Build

A multi-page marketing website with the following routes:

```
/                  Home
/collections       Collections index
/collections/[slug] Collection detail
/journal           Editorial index
/about             The house story
/subscribe         Subscription landing (primary conversion page)
```

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** CSS Modules (one per component) + a global `tokens.css` for all CSS custom properties
- **Animation:** Framer Motion for scroll reveals and page transitions
- **Fonts:** Load via `next/font/google` — Tenor Sans (400), Cormorant Garamond (300, 300 italic, 400, 400 italic), Inter (400, 500)
- **Images:** `next/image` with `priority` on the hero, `lazy` on everything below the fold
- **Video:** Native HTML5 `<video autoplay muted loop playsinline>` with MP4 + WebM sources

## Design Principles (Non-Negotiable)

1. **The brand is in the restraint.** When in doubt, take something away. Add space, not elements.
2. **Whitespace is the luxury.** Section gaps are 96–128px. Hero breathing room is 192px. Never compress.
3. **Images lead, type supports.** Every full-bleed image should feel like a frame from a film, not a banner ad.
4. **No pure black or pure white.** All darks route through `--color-midnight` (`#0E1A2B`). All lights through `--color-ivory` (`#F5EFE6`).
5. **Tracking is the signature.** Eyebrows and buttons: Inter Medium, ALL CAPS, +200 letter-spacing. Display: Tenor Sans, +40 to +60.
6. **Animation is slow and inevitable.** 900ms reveals with `cubic-bezier(0.16, 1, 0.3, 1)`. Stagger siblings 120ms. Never snappy.
7. **No emoji. No radius on product cards. No shadows on wordmark.**

## Color Tokens (implement as CSS custom properties on `:root`)

```css
--color-moonlight:    #FBF7EF;
--color-ivory:        #F5EFE6;
--color-bone:         #EAE2D6;
--color-veil:         #C7BEB2;
--color-mist:         #A8A29A;
--color-rose:         #D9B6B0;
--color-smoke:        #6B6660;
--color-champagne:    #B89F7E;
--color-plum:         #3D1E2E;
--color-midnight:     #0E1A2B;
--color-surface:      var(--color-ivory);
--color-text-primary: var(--color-midnight);
--color-text-body:    var(--color-smoke);
--color-text-accent:  var(--color-champagne);
--color-border:       var(--color-veil);
```

## Typography

```css
--font-display:   'Tenor Sans', sans-serif;
--font-editorial: 'Cormorant Garamond', serif;
--font-ui:        'Inter', sans-serif;
```

Scale: Display/Hero = Tenor Sans 96px ALL CAPS tracking +40. H1 = 64px. H2 = 40px. H3 = Cormorant 24px title case. Pull quote = Cormorant Italic 300 30px. Body = Inter 16–18px. Eyebrow/Button = Inter Medium 11–13px ALL CAPS tracking +200.

## Navigation

Fixed, 72px height. `--color-ivory` at 80% opacity. `backdrop-filter: blur(20px)` activates after 20px scroll. 1px hairline rule beneath in `--color-veil`. Logo (wordmark SVG) centered. Nav links left cluster, account/search/bag right cluster. All links: Inter Medium 11px +200 tracking ALL CAPS `--color-smoke`. Mobile: full-screen overlay in `--color-midnight`.

## Home Page Sections (in order)

### 1. Hero — Full Viewport (`100vw × 100vh`)
- Background: image OR video (autoplay muted loop). Slot: `HERO_VIDEO` / `HERO_IMAGE`
- Gradient overlay: `transparent` at 50% to `rgba(14,26,43,0.45)` at bottom
- Content bottom-left (80px margin):
  - Eyebrow: `A NEW ARRIVAL · THE TWELFTH` — Inter Medium 11px +200 --color-champagne
  - H1 (96px Tenor Sans ivory): `THE VELVET / HOUR.`
  - Sub: Cormorant Italic 300 24px ivory 80%: `Worn close. Held longer.`
  - CTA link with champagne hairline underline: `BEGIN THE SUBSCRIPTION →`
- Scroll indicator: 1px line 48px tall, centered bottom, fades after 200px

### 2. Editorial Spread — 50/50 split, 100vh min
- Left: full-bleed image slot `EDITORIAL_SPREAD_IMAGE`
- Right: `--color-ivory` bg, content vertically centered, 80px padding
  - Eyebrow: `THE COLLECTION`
  - H2: `FOUNDATIONS.`
  - Pull quote: Cormorant Italic, brand story excerpt
  - Body copy: 2 sentences max
  - CTA + 4-point star ornament in champagne

### 3. Full-Bleed Film — 80vh, image only, no text
- Slot: `EDITORIAL_FILM_IMAGE`
- Optional caption: bottom-right, Inter 11px ivory 50%

### 4. Duet Grid — Two equal columns, no gutter
- Left: `DUET_LEFT` (B&W detail preferred)
- Right: `DUET_RIGHT` (color portrait preferred)
- Pull quote overlaid centered on scroll: Cormorant Italic 36px ivory

### 5. The House — Midnight background, centered column, 192px vertical padding
- Eyebrow champagne: `A HOUSE, NOT A RETAILER`
- H2 ivory: `ROMANTIC, / WITH AN EDGE.`
- Body ivory 72%: brand story paragraph
- CTA ivory: `THE HOUSE STORY →`

### 6. Collection Grid — Bone surface, 3-col desktop / 2-col tablet / 1-col mobile
- 6 product cards, slots `PRODUCT_CARD_01–06`
- Each: 2:3 image, no radius, no border
- Hover: image scale 1.03 over 600ms
- Below image: eyebrow (collection), Cormorant product name, Inter price

### 7. Subscription CTA — Full-bleed image with midnight 70% overlay
- Slot: `SUBSCRIBE_BG_IMAGE`
- Centered content: eyebrow champagne + H1 ivory + subhead + outlined CTA button
- CTA button: 1px ivory border, no fill. Hover: ivory bg, midnight text. Padding 20px 40px.

### 8. Journal Preview — Asymmetric 2-column editorial grid
- 3 article cards, slots `JOURNAL_CARD_01–03`
- Eyebrow, headline Tenor Sans 28px, date Inter 13px

### 9. Footer — Midnight background
- 4 columns: wordmark + tagline / collections nav / house nav / email signup
- Base strip: © MMXXVI Mars & Moon. Paris · Privacy · Terms
- All footer type: Inter 11px ivory 40%
- Email input: no radius, 1px border ivory 20%, 44px height

## Media Placeholder Convention

All image and video slots use this pattern so you can easily swap sources:

```jsx
// Image
<img
  src="/assets/images/HERO_IMAGE.jpg"
  alt="[descriptive]"
  data-slot="HERO_IMAGE"
  className={styles.mmMedia}
/>

// Video
<video autoPlay muted loop playsInline poster="/assets/images/HERO_VIDEO-poster.jpg">
  <source src="/assets/video/HERO_VIDEO.mp4" type="video/mp4" />
  <source src="/assets/video/HERO_VIDEO.webm" type="video/webm" />
</video>
```

Create an `/assets/images/` folder structure with clearly named placeholder files. Use a bone/ivory colored placeholder `<div>` with the slot name as text if no image file exists yet.

## Animation Requirements

```js
// Reveal variant (Framer Motion)
const revealVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

// Stagger container
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.12 } }
};
```

Apply `revealVariant` to all headline, eyebrow, body, and CTA elements. Trigger on scroll via `whileInView` with `once: true` and `amount: 0.2` viewport threshold.

Hero elements animate on mount, not on scroll.

Always implement `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

## Accessibility

- All `<img>` elements have meaningful `alt` text
- Focus styles: `outline: 2px solid var(--color-champagne); outline-offset: 2px`
- All interactive elements minimum 44×44px
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<h1>`–`<h3>` in correct hierarchy

## File Structure

```
/app
  /layout.tsx          → fonts, global meta, nav, footer
  /page.tsx            → Home
  /collections/page.tsx
  /collections/[slug]/page.tsx
  /journal/page.tsx
  /about/page.tsx
  /subscribe/page.tsx
/components
  /Nav.tsx + Nav.module.css
  /Footer.tsx + Footer.module.css
  /Hero.tsx + Hero.module.css
  /EditorialSpread.tsx
  /ProductCard.tsx + ProductCard.module.css
  /SubscribeCTA.tsx
  /JournalCard.tsx
  /RevealWrapper.tsx   → Framer Motion scroll reveal wrapper
/styles
  /tokens.css          → ALL CSS custom properties (shared with future app)
  /globals.css         → resets, base styles referencing tokens
/assets
  /images/             → placeholder images, named by slot
  /video/              → placeholder video files
/public
  /fonts/              → self-hosted WOFF2 files
```

## Token Export for App

In `tokens.css`, after all custom properties, add a JSON export comment block:

```css
/* TOKEN EXPORT — consumed by mobile app
{
  "color": { ... },
  "font": { ... },
  "space": { ... }
}
*/
```

This allows the app build to parse shared tokens without a separate design tool.

## Start Here

1. Scaffold the Next.js project
2. Create `styles/tokens.css` with all brand tokens
3. Set up `app/layout.tsx` with fonts and global styles
4. Build the `<Nav>` component
5. Build the Home page sections in order (hero first)
6. Build the `<Footer>`
7. Build remaining pages
8. Review every page against the brand principles: restraint, whitespace, tracking, slow animation

When in doubt, give it space.
*From Mars and Moon, with love.*
