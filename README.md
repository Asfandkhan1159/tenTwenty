# TenTwenty Frontend Assessment

## Setup

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

For a production build:
```bash
npm run build
npm run preview
```

---

## Image Assets

Place your Figma-exported images in `/public/images/`:

| File | Used for |
|------|----------|
| `slide-1.jpg` … `slide-4.jpg` | Hero slider backgrounds |
| `product-1.jpg` … `product-5.jpg` | Quality Products carousel cards |

The slide data (labels, client names, locations) lives in `src/constants/slides.ts` — edit freely.

---

## Tech Decisions

**Vite + React + TypeScript** — No CRA. Vite gives sub-second HMR and clean ESM output. TypeScript catches interface mismatches before they become runtime bugs.

**TailwindCSS** — Utility classes for layout and spacing. Custom component styles (`.hero-slide`, `.carousel-card`, etc.) live in `src/styles/index.css` using `@layer components` to keep specificity predictable.

**GSAP** — Used for:
- Hero text word-by-word reveal on slide change (`translateY 110% → 0`)
- Scroll-triggered section title + paragraph reveal (ScrollTrigger)
- Carousel card rotation/scale transitions on active index change
- Live drag position updates (bypasses React state for 60fps)

**Work Sans** — As specified. Loaded via Google Fonts with `display=swap` to prevent FOIT.

**Custom cursor** — Single `position: fixed` div with `mix-blend-mode: difference`. Expands to 80px circle over carousel, showing `‹ prev` and `next ›`. Mouse position updates DOM directly (no React re-render on every `mousemove`).

**SVG border animation** — The thumbnail border uses `stroke-dashoffset` CSS keyframes. The animation duration matches the autoplay interval (5s). On slide change, the class is removed, a forced reflow happens via `getBoundingClientRect()`, then the class is re-added — this restarts the CSS animation cleanly without GSAP.

---

## Structure

```
src/
  components/
    Navbar/         Navbar.tsx
    Hero/           Hero.tsx · HeroSlide.tsx · HeroThumbnail.tsx
    Products/       ProductCarousel.tsx · CarouselCard.tsx
    CustomCursor/   CustomCursor.tsx
  hooks/
    useSlider.ts    Autoplay + SVG border restart logic
    useMousePosition.ts  Direct DOM cursor update (no re-renders)
  constants/
    slides.ts       All slide + carousel data
  styles/
    index.css       Tailwind base + all component styles
```

---

## Lighthouse Notes

- Slide 1 image uses `loading="eager"`, all others `loading="lazy"`
- Semantic HTML: single `<h1>` in hero, `<h2>` in products section
- `<nav>` with `aria-label`, `aria-hidden` on decorative elements
- Meta tags: `description`, `og:title`, `og:description`, `og:image`, `og:type`
- Work Sans loaded with `display=swap` — no render blocking
