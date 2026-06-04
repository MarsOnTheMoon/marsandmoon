# Mars & Moon · Site Specification
**Volume I · Edition 01 · MMXXVI**
*A document for those building the digital atelier.*

---

## 0. Context & Scope

Mars & Moon is a private atelier of slow-fashion lingerie delivered in limited subscription drops. This document specifies the **marketing website** — the brand's public face, designed to convert qualified visitors into subscribers and communicate the house's identity to press, investors, and partners.

The site is not a shop. It is a salon. It opens the door.

A companion mobile application (the subscription dashboard — "a pocket atelier") will share this design system. All CSS tokens, typography scales, and spacing units defined here must be exported and reused for that build. Do not diverge.

**Reference sites for feel (not structure):**
- yse-paris.com — full-bleed imagery, restrained nav, editorial pacing
- oliviavonhalle.com — film-grade photography as primary content, minimal chrome
- netterose.com — generous negative space, type-led hierarchy

---

## 1. Brand Tokens (Design System)

These are the single source of truth. All values must be set as CSS custom properties on `:root`.

### 1.1 Color

```css
:root {
  /* Surfaces — 60/20/15/5 discipline */
  --color-moonlight:   #FBF7EF;   /* lightest surface */
  --color-ivory:       #F5EFE6;   /* default surface · 60% of compositions */
  --color-bone:        #EAE2D6;   /* section divisions, card surfaces */
  --color-veil:        #C7BEB2;   /* hairline rules on light */
  --color-mist:        #A8A29A;   /* secondary midtone */

  /* Mid-tones */
  --color-rose:        #D9B6B0;   /* skin, intimacy — never buttons */
  --color-smoke:       #6B6660;   /* body copy on light surfaces */

  /* Accents — 5% combined maximum */
  --color-champagne:   #B89F7E;   /* single metallic · tagline · ornaments */
  --color-plum:        #3D1E2E;   /* velvet, ceremonial surfaces */
  --color-midnight:    #0E1A2B;   /* primary dark · all type on light */

  /* Semantic aliases */
  --color-surface:     var(--color-ivory);
  --color-text-primary:   var(--color-midnight);
  --color-text-body:      var(--color-smoke);
  --color-text-accent:    var(--color-champagne);
  --color-border:         var(--color-veil);
}
```

**Rules:**
- No pure black (`#000`), no pure white (`#FFF`). Route all darks through `--color-midnight`, all lights through `--color-ivory`.
- Rose is for skin-adjacent surfaces only (imagery overlays, tissue, packaging callouts). Never use for buttons, links, or interactive elements.
- Champagne appears on the tagline lockup, the Cormorant ampersand in the wordmark, section ornaments, and hairline rules on dark surfaces only.

### 1.2 Typography

**Font loading** (Google Fonts or self-hosted):
```
Tenor Sans: 400
Cormorant Garamond: 300, 300 italic, 400, 400 italic
Inter: 400, 500
```

```css
:root {
  --font-display:   'Tenor Sans', sans-serif;       /* headlines, eyebrows, buttons */
  --font-editorial: 'Cormorant Garamond', serif;    /* subheads, pull-quotes, tagline */
  --font-ui:        'Inter', sans-serif;            /* body, captions, nav, UI */
}
```

**Type scale:**

| Role | Font | Size | Line Height | Tracking | Case |
|------|------|------|-------------|----------|------|
| Display / Hero | Tenor Sans | 96px | 1.0 | +40 | ALL CAPS |
| H1 | Tenor Sans | 64–72px | 1.1 | +60 | ALL CAPS |
| H2 | Tenor Sans | 40–48px | 1.15 | +60 | ALL CAPS |
| H3 / Sub-head | Cormorant Garamond | 22–28px | 1.3 | 0 | Title case |
| Pull Quote | Cormorant Garamond Italic 300 | 24–36px | 1.4 | +20 | Sentence case |
| Body | Inter Regular | 16–18px | 1.6 | +10 | Sentence case |
| Caption / Metadata | Inter Regular | 13–14px | 1.5 | +10 | Sentence case |
| Eyebrow / Button | Inter Medium | 11–13px | 1.4 | +200 | ALL CAPS |

**Rules:**
- ALL CAPS is reserved for Tenor Sans display and Inter eyebrow/button contexts. Never apply to Cormorant.
- Italics in Cormorant are reserved for emotion: the tagline, pull quotes, asides.
- No emoji. Ever.

### 1.3 Spacing

8px base unit. All spacing values are multiples.

```css
:root {
  --space-1:   4px;    /* hairline padding */
  --space-2:   8px;    /* metadata gap */
  --space-4:   16px;   /* card padding */
  --space-6:   32px;   /* component gap */
  --space-8:   64px;   /* section gap (mobile) */
  --space-9:   96px;   /* section gap (default) */
  --space-10:  128px;  /* hero-to-content */
  --space-12:  192px;  /* hero breathing room */
}
```

### 1.4 Grid

- Desktop: 12-column, 80px outer margin, 24px gutters
- Tablet: 8-column, 48px outer margin, 20px gutters
- Mobile: 4-column, 20px outer margin, 16px gutters

### 1.5 Motion

All animations must feel *slow, deliberate, inevitable* — not snappy or springy.

```css
:root {
  --ease-reveal:    cubic-bezier(0.16, 1, 0.3, 1);   /* elements entering */
  --ease-fade:      cubic-bezier(0.4, 0, 0.2, 1);    /* opacity transitions */
  --duration-slow:  900ms;
  --duration-med:   600ms;
  --duration-fast:  300ms;
}
```

Default reveal: elements enter with `opacity: 0 → 1` + `transform: translateY(20px) → translateY(0)` over `900ms` with `--ease-reveal`. Stagger siblings by `120ms`.

### 1.6 Iconography

Single-weight geometric line set. 1.5px stroke at 24px base. Rounded caps. Icons inherit `currentColor`. Celestial icons (crescent, star, orbit) render in `--color-champagne`. Functional icons (search, bag, account, menu, close) render in `--color-midnight` or `--color-smoke`.

---

## 2. Site Architecture

```
/                     → Home (the salon door)
/collections          → Collections index
/collections/[slug]   → Collection detail (editorial + pieces)
/journal              → Editorial / brand storytelling
/journal/[slug]       → Article / campaign
/about                → The house story
/subscribe            → Subscription landing (primary CTA)
/contact              → Atelier contact
```

---

## 3. Navigation

**Structure:** Fixed top nav, 72px height. Background: `--color-ivory` at 80% opacity. `backdrop-filter: blur(20px)` on scroll (activates after 20px scroll). 1px hairline rule beneath in `--color-veil`.

**Layout:**
```
[COLLECTIONS]  [JOURNAL]  [ABOUT]       Mars & Moon       [SUBSCRIBE]  [SEARCH]  [BAG · 0]
```
- Left cluster: Inter Medium, +200 tracking, 11px, ALL CAPS, color: `--color-smoke`
- Center: Wordmark SVG (Tenor Sans + Cormorant ampersand), minimum 120px wide
- Right cluster: same as left, plus icon-only Search and Bag
- Active state: `--color-midnight`
- Hover: opacity 0.6 transition over 300ms

**Mobile:** Hamburger (3 × 1px lines, 24px icon). Full-screen overlay in `--color-midnight`, links in Tenor Sans ALL CAPS, 40px, `--color-ivory`.

---

## 4. Page Specifications

---

### 4.1 Home (`/`)

The home page is a sequence of full-bleed moments, not a features list. Each section breathes. Scroll is the edit.

---

#### Section 1 · Hero

**Layout:** Full viewport (`100vw × 100vh`). No margins. Image bleeds edge to edge.

**Media slot:** `HERO_IMAGE` or `HERO_VIDEO`
- If video: `<video autoplay muted loop playsinline>`. MP4 + WebM sources. Poster frame required.
- If image: `<img>` with `object-fit: cover`, portrait orientation preferred (2:3 ratio content, 16:9 display crop).
- Swap instruction: Replace `src` attribute on `<video>` or `<img>` element. File naming: `hero-[collection-name].[ext]`.

**Overlay:** Gradient from `transparent` at 50% to `rgba(14, 26, 43, 0.45)` at bottom 40%.

**Content** (bottom-left, 80px margin from left and bottom):
```
[Eyebrow]   A NEW ARRIVAL · THE TWELFTH
[H1]        THE VELVET
            HOUR.
[Subhead]   Worn close. Held longer.
[CTA]       BEGIN THE SUBSCRIPTION  →
```
- Eyebrow: Inter Medium, 11px, +200 tracking, `--color-champagne`
- H1: Tenor Sans, 96px (desktop) / 52px (mobile), `--color-ivory`, tracking +40
- Subhead: Cormorant Italic 300, 24px, `--color-ivory` 80%
- CTA: Inter Medium, 11px, +200 tracking, `--color-ivory`, no background — hairline underline in `--color-champagne`

**Wordmark position:** Top-center, 36px from top, `--color-ivory` version.

**Scroll indicator:** 1px vertical line, 48px tall, `--color-ivory` 40%, centered bottom, fades out after 200px scroll.

---

#### Section 2 · The Drop (Editorial Spread)

**Layout:** Full-width, `min-height: 100vh`. Two-column split on desktop (50/50). Single column on mobile (image top, text below).

**Left side:** Full-bleed image, no border, no radius.
- Media slot: `EDITORIAL_SPREAD_IMAGE` (portrait 2:3 preferred)
- Swap: replace `src`

**Right side:** `--color-ivory` background, content centered vertically with generous padding (80px).
```
[Eyebrow]   THE COLLECTION
[H2]        FOUNDATIONS.
[Pull Quote] A private atelier of slow-fashion lingerie, delivered in limited drops.
[Body]      Each piece arrives once. Considered, French-seamed, finite. The Foundations collection is the first chapter.
[CTA]       SHOP THE COLLECTION  →
[Ornament]  ✦  (4-point star in --color-champagne, 12px)
```

---

#### Section 3 · Full-Bleed Editorial Film

**Layout:** Full viewport, image or video, no chrome.

**Media slot:** `EDITORIAL_FILM_IMAGE` — use a horizontal/landscape image (16:9 or 3:2). This slot is purely atmospheric, no text overlay. Let it breathe.

Optional: Subtle caption bottom-right: *"Paris Atelier, MMXXVI"* — Inter Regular, 11px, `--color-ivory` 50%, 24px from edge.

---

#### Section 4 · Duet Grid (Image + Image)

**Layout:** Two equal columns, full height, no gutter between them. Desktop: side-by-side. Mobile: stacked.

**Media slots:**
- `DUET_LEFT` — B&W editorial detail (close-up: hands, fabric, jewelry)
- `DUET_RIGHT` — Color editorial portrait or full figure

Text appears between them on scroll as an editorial overlay (centered, translucent):
```
[Pull Quote]   "Worn close. Held longer."
```
Cormorant Italic 300, 36px, `--color-ivory`, text-shadow `0 2px 32px rgba(14,26,43,0.4)`.

---

#### Section 5 · The House

**Layout:** `--color-midnight` background. Single column, max-width 680px, centered. Generous vertical padding (192px top/bottom).

```
[Eyebrow]   A HOUSE, NOT A RETAILER
[H2]        ROMANTIC,
            WITH AN EDGE.
[Body]      Mars & Moon sits at the intersection of celestial reverence and subversive intimacy. Every collection is finite. Every delivery is an arrival, not a shipment.
[CTA]       THE HOUSE STORY  →
```
- All text: `--color-ivory` on `--color-midnight`
- Eyebrow: `--color-champagne`
- Body: Inter Regular 17px, `--color-ivory` 72%
- CTA: Inter Medium, +200 tracking, `--color-ivory`, hairline underline

---

#### Section 6 · The Collection Grid

**Layout:** 3-column grid on desktop, 2-column on tablet, 1-column on mobile. 1px gutter in `--color-bone`. No card radius. Background: `--color-bone`.

Each card:
- Image: 2:3 ratio, `object-fit: cover`, fills card
- On hover: image scales to 1.03 over 600ms (not a jump — a slow breath)
- Below image: 16px padding
  - Eyebrow: collection name, Inter Medium 11px +200 tracking `--color-smoke`
  - Product name: Cormorant Garamond 18px, `--color-midnight`
  - Price: Inter Regular 14px, `--color-smoke`

**Media slots:** `PRODUCT_CARD_[01–06]` — portrait 2:3, easily swappable via `src`.

---

#### Section 7 · The Subscription CTA

**Layout:** Full-bleed background image with `--color-midnight` overlay at 70%. Content centered.

**Media slot:** `SUBSCRIBE_BG_IMAGE`

```
[Eyebrow]   YOUR DECEMBER ARRIVES THURSDAY.
[H1]        BEGIN THE
            SUBSCRIPTION.
[Subhead]   Limited drops. Delivered to your door. A ceremony, not a shipment.
[CTA]       OPEN THE ENVELOPE  →
```

CTA button: No fill. Border: 1px `--color-ivory`. Inter Medium 11px +200 tracking. Padding 20px 40px. On hover: background `--color-ivory`, text `--color-midnight`. Transition 300ms.

---

#### Section 8 · Journal (Editorial Preview)

**Layout:** Horizontal scroll on mobile, 2-column asymmetric grid on desktop (one large, one small).

Three article cards:
- Large card: spans 7 columns, full-bleed image with title overlay bottom-left
- Small card: spans 5 columns, image + text below (standard)

Each card:
- Eyebrow: category label (e.g. `THE ATELIER`)
- Headline: Tenor Sans ALL CAPS, 28px
- Date: Inter 13px `--color-smoke`

**Media slots:** `JOURNAL_CARD_[01–03]`

---

#### Section 9 · Footer

**Background:** `--color-midnight`

**Layout:** 4-column on desktop, 2-column on tablet, single on mobile.

```
Col 1: Mars & Moon wordmark (ivory version)
       "From Mars and Moon, with love." — Cormorant Italic, --color-champagne
Col 2: COLLECTIONS  [links]
Col 3: THE HOUSE    About · Journal · Press · Stockists
Col 4: SUBSCRIBE    [email input + submit]
       INSTAGRAM  PINTEREST  [icon links]
```

Footer base (below): `--color-midnight` darker strip.
- Left: `© MMXXVI Mars & Moon. Paris.`
- Right: `Privacy · Terms`
- All: Inter Regular 11px, `--color-ivory` 40%, +100 tracking

**Email input:** Ivory 10% background, no border radius, 1px border `--color-ivory` 20%. Placeholder: `YOUR ADDRESS` in Inter Medium 11px +200 tracking. On focus: border `--color-ivory` 60%.

---

### 4.2 Collections (`/collections`)

**Layout:** Full-bleed hero image (same spec as home hero, shorter — 65vh). Below: collection grid (same card spec as Section 6, but 4-column desktop). Filter bar: hairline-separated row of collection names in Tenor Sans +120 tracking, 13px, ALL CAPS. Active filter: `--color-midnight`. Inactive: `--color-smoke`.

---

### 4.3 Collection Detail (`/collections/[slug]`)

**Layout:** Editorial page — alternate image-left/text-right and image-right/text-left as you scroll.

- Opening: Full-bleed hero (100vh)
- Product details: Cormorant sub-heads, Inter body
- Piece cards: same 2:3 grid, but larger (2-column max)
- Subscription CTA: same as home Section 7

**Media slots:** `COLLECTION_HERO`, `COLLECTION_DETAIL_[01–08]`

---

### 4.4 About (`/about`)

**Layout:** Long-form editorial. Alternating full-bleed images and text panels. No sidebar.

Key sections:
1. Full-bleed hero with tagline overlay
2. Brand story (The House text, 2-column on desktop)
3. Photography philosophy (full-bleed image, no text — let it speak)
4. The subscription model explained
5. Footer CTA to Subscribe

**Media slots:** `ABOUT_HERO`, `ABOUT_MID_[01–02]`

---

### 4.5 Subscribe (`/subscribe`)

**Purpose:** Primary conversion page. Minimal chrome. Focus on the ritual.

**Layout:**
- Left half (desktop): Full-bleed image, static — the most cinematic portrait from the shoot
- Right half: `--color-ivory` panel, form content

**Form content:**
```
[Eyebrow]   A LETTER FROM THE ATELIER
[H2]        BEGIN THE
            SUBSCRIPTION.
[Body]      Each drop is finite. Curated by the atelier. Yours, each month.
[Plan options] — hairline-separated cards, Tenor Sans labels
[Form fields] Name · Email · Size preference · Delivery address
[CTA]       OPEN THE ENVELOPE  →
```

All inputs: no border-radius, 1px border `--color-bone`, 44px height, Inter Regular 16px, `--color-midnight` text. Focus: border `--color-midnight`.

**Media slot:** `SUBSCRIBE_PORTRAIT` — tallest, most cinematic portrait image.

---

## 5. Photography & Media

### 5.1 Placeholder System

All media slots use a consistent placeholder convention for easy swap-out:

```html
<!-- Image placeholder -->
<img
  src="./assets/images/[SLOT_NAME].jpg"
  alt="[Descriptive alt text]"
  data-slot="[SLOT_NAME]"
  class="mm-media"
/>

<!-- Video placeholder -->
<video autoplay muted loop playsinline poster="./assets/images/[SLOT_NAME]-poster.jpg">
  <source src="./assets/video/[SLOT_NAME].mp4" type="video/mp4">
  <source src="./assets/video/[SLOT_NAME].webm" type="video/webm">
</video>
```

To swap: replace `src` value. The `data-slot` attribute serves as a reference map.

### 5.2 Slot Index

| Slot Name | Location | Ratio | Format | Notes |
|-----------|----------|-------|--------|-------|
| `HERO_VIDEO` / `HERO_IMAGE` | Home hero | 16:9 display / any source | MP4+WebM or JPG | Primary brand moment |
| `EDITORIAL_SPREAD_IMAGE` | Home §2 | 2:3 | JPG | Portrait, window light |
| `EDITORIAL_FILM_IMAGE` | Home §3 | 16:9 | JPG | Landscape, atmospheric |
| `DUET_LEFT` | Home §4 | 2:3 | JPG | B&W detail preferred |
| `DUET_RIGHT` | Home §4 | 2:3 | JPG | Color portrait preferred |
| `PRODUCT_CARD_01–06` | Home §6 | 2:3 | JPG | Product-forward |
| `SUBSCRIBE_BG_IMAGE` | Home §7 | 16:9 | JPG | Dark, moody |
| `JOURNAL_CARD_01–03` | Home §8 | 16:9 or 2:3 | JPG | Editorial |
| `SUBSCRIBE_PORTRAIT` | Subscribe page | 2:3 | JPG | Tallest, most cinematic |
| `COLLECTION_HERO` | Collections hero | 16:9 | JPG | Wide, atmospheric |
| `ABOUT_HERO` | About hero | 16:9 | JPG | Brand statement image |

### 5.3 Photography Rules (from brand guidelines)

- Soft, single-source light. Window light or studio equivalent. No ring light.
- Cool-celestial register — ivory and bone backdrops, plum and midnight as wardrobe accents.
- Subject occupies 40–60% of frame. Negative space is intentional.
- Mix of B&W (editorial weight) and color (intimacy moments).
- Paris interior language: herringbone parquet, ironwork, soft window geometry.
- No hard retouching. No over-saturation. No manufactured spontaneity.

---

## 6. Interactions & Micro-Animations

| Trigger | Behavior | Duration | Easing |
|---------|----------|----------|--------|
| Page load | Elements fade + translate up, staggered 120ms | 900ms | `--ease-reveal` |
| Scroll enter (IntersectionObserver) | Same as page load | 700ms | `--ease-reveal` |
| Nav on scroll | Ivory 80% + blur activates | 300ms | `--ease-fade` |
| Image hover (cards) | Scale 1.03 | 600ms | `--ease-reveal` |
| CTA hover | Underline extends / background fills | 300ms | linear |
| Full-bleed image load | Blur-to-sharp (filter: blur(12px) → 0) | 800ms | `--ease-reveal` |
| Video | Autoplay, muted, loop, no controls shown |

**Parallax:** Hero image translates at 0.3× scroll speed (CSS `transform: translateY` on scroll). Use only for hero. Do not parallax product cards.

---

## 7. Accessibility

- All images have descriptive `alt` text.
- Minimum contrast ratio 4.5:1 for body text. `--color-smoke` on `--color-ivory` = 4.8:1 ✓
- All interactive elements: minimum 44×44px touch targets.
- `prefers-reduced-motion` media query must disable all transforms and transitions, replacing with opacity-only fades.
- Navigation is keyboard-navigable. Focus styles: 2px `--color-champagne` outline, 2px offset.

---

## 8. Tech Stack Recommendation

For Claude Code implementation:

```
Framework:     Next.js 14 (App Router) or Astro
Styling:       CSS Modules or Tailwind with custom config mapped to brand tokens
Animation:     Framer Motion (React) or native CSS + IntersectionObserver
Fonts:         Self-hosted WOFF2 (Tenor Sans, Cormorant Garamond, Inter)
Images:        next/image with priority on hero, lazy on all others
Video:         Native HTML5 video element
Deployment:    Vercel
```

Token portability for the app: Export all `:root` CSS custom properties to a shared `tokens.css` or `design-tokens.json` consumed by both the site and the React Native / Expo app.

---

## 9. Shared Tokens for Future App

The following tokens are explicitly flagged for reuse in the Mars & Moon mobile app:

- All color tokens (`--color-*`)
- Typography families and scale (stepping down: H1 → 30px, body → 14–16px, eyebrow → 11px with +200 tracking)
- Spacing scale (`--space-*`)
- Easing curves (`--ease-*`)
- Hit target minimum: 44×44px
- App outer margin: 20px
- Icon set (same line set, same stroke weight)

---

*End of Site Specification · Mars & Moon · Volume I · MMXXVI*
*From Mars and Moon, with love.*
