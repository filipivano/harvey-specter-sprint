# Figma → Code Design System Rules

Generated for: `harvey-specter-sprint`
Stack: **Next.js 16 · React 19 · TypeScript · Tailwind CSS v4**

---

## 1. Styling Engine — Tailwind CSS v4

This project uses **Tailwind v4**, which has breaking changes from v3:

- **No `tailwind.config.js`** — all configuration lives in CSS via `@theme` blocks.
- Entry point is `src/app/globals.css` with `@import "tailwindcss"` (not `@tailwind base/components/utilities` directives).
- Custom tokens are registered under `@theme inline { … }`.
- PostCSS plugin is `@tailwindcss/postcss` (not `tailwindcss`).

**Do not generate a `tailwind.config.js`**. Extend the theme in `globals.css` instead:

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme inline {
  --color-brand: #facc15;        /* add new tokens here */
  --font-sans: var(--font-inter);
}
```

---

## 2. Design Tokens

All semantic tokens are CSS custom properties defined in `src/app/globals.css`.

### Color Tokens

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

Exposed to Tailwind as `bg-background`, `text-foreground` via:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

**When adding new design tokens from Figma**, follow this two-step pattern:
1. Define the raw value in `:root` as a CSS custom property.
2. Map it into Tailwind under `@theme inline` so it becomes a utility class.

### Arbitrary Values

Pixel-precise values from Figma that don't map to a token are written as **Tailwind arbitrary values** directly in JSX:

```tsx
className="text-[96px] tracking-[-6.72px] h-[635px] rounded-[24px]"
```

This is the accepted pattern — do not extract one-off values into tokens.

---

## 3. Typography

Fonts are loaded via `next/font/google` in `src/app/layout.tsx` and injected as CSS variables on `<html>`.

| Font | CSS Variable | Tailwind Class |
|------|-------------|----------------|
| Geist Sans | `--font-geist-sans` | `font-sans` (mapped in `@theme`) |
| Geist Mono | `--font-geist-mono` | `font-mono` (mapped in `@theme`) |
| DM Sans | `--font-dm-sans` | use inline style (see below) |
| Inter | `--font-inter` | use inline style (see below) |

Since `--font-dm-sans` and `--font-inter` are not yet mapped in `@theme`, apply them via inline `style` prop:

```tsx
<p style={{ fontFamily: "var(--font-inter)" }}>…</p>
```

**To promote a font to a Tailwind utility**, add it to `globals.css`:

```css
@theme inline {
  --font-dm-sans: var(--font-dm-sans);   /* then use font-dm-sans class */
}
```

### Type Scale Patterns (from existing code)

```
Hero heading:   96px / 198px desktop   tracking-[-6.72px] / [-13.86px]   font-medium
Nav / body:     14px–16px              tracking-[-0.04em]                 font-semibold / font-normal
Caption/label:  14px                   uppercase                          font-geist-mono
Bio text:       14px                   font-bold italic uppercase         letter-spacing: -0.56px
```

---

## 4. Component Architecture

No component library is in use. All UI is built with **plain HTML elements + Tailwind utility classes** directly in page files.

- Components live in `src/app/` (Next.js App Router).
- There are no shared `src/components/` — extract reusable pieces there as the project grows.
- No CSS Modules, no Styled Components, no CSS-in-JS.

**Pattern for a section component:**

```tsx
// src/components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden flex flex-col h-[635px] md:h-[847px]">
      {/* … */}
    </section>
  );
}
```

---

## 5. Responsive Design

Mobile-first using a single breakpoint:

| Breakpoint | Prefix | Pixel value |
|------------|--------|-------------|
| mobile (default) | — | < 768px |
| desktop | `md:` | ≥ 768px |

**Pattern:** default classes = mobile, `md:` prefix = desktop.

```tsx
className="h-[635px] px-4 md:h-[847px] md:px-8"
```

Layout shifts between mobile and desktop are handled with `hidden md:flex` / `md:hidden`.

---

## 6. Asset Management

### Static Assets

SVG icons and images go in `/public/`. Reference as root-relative paths:

```tsx
<img src="/globe.svg" alt="Globe" />
```

### Figma MCP Assets

Hero images sourced from Figma are referenced via Figma MCP asset URLs:

```tsx
const HERO_BG_DESKTOP = "https://www.figma.com/api/mcp/asset/<uuid>";
const HERO_BG_MOBILE  = "https://www.figma.com/api/mcp/asset/<uuid>";
```

Use `<picture>` + `<source media="(min-width: 768px)">` for responsive image switching.

Always set `alt=""` and `aria-hidden` on purely decorative background images.

```tsx
<picture>
  <source media="(min-width: 768px)" srcSet={HERO_BG_DESKTOP} />
  <img
    src={HERO_BG_MOBILE}
    alt=""
    aria-hidden
    className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
  />
</picture>
```

---

## 7. Icon System

No icon library. Icons are **inline SVG in JSX**:

```tsx
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
  <line x1="3" y1="6" x2="21" y2="6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
</svg>
```

When importing icons from Figma, export as inline SVG and paste directly — do not add an icon library dependency.

---

## 8. Recurring UI Patterns

### Button

```tsx
<button className="flex items-center justify-center bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px]">
  Let&apos;s talk
</button>
```

### Frosted Glass Overlay

```tsx
<div className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)]" />
```

### Text Over Image (mix-blend-overlay)

```tsx
<h1 className="text-white mix-blend-overlay">Harvey&nbsp;&nbsp;&nbsp;Specter</h1>
```

### Navbar Layout

```tsx
<nav className="relative z-10 flex items-center justify-between py-6 md:px-8 md:h-[89px] md:py-0">
  <span>Logo</span>
  <button className="md:hidden">Hamburger</button>
  <ul className="hidden md:flex gap-14">…</ul>
  <button className="hidden md:flex">CTA</button>
</nav>
```

---

## 9. Project Structure

```
harvey-specter-sprint/
├── public/                  # Static SVGs, favicons
├── src/
│   └── app/
│       ├── globals.css      # Tailwind entry + all design tokens
│       ├── layout.tsx       # Root layout — font loading, <html>/<body>
│       └── page.tsx         # Home page
├── next.config.ts
├── postcss.config.mjs       # @tailwindcss/postcss plugin
└── tsconfig.json            # paths: "@/*" → "./src/*"
```

**Path alias**: Use `@/` to import from `src/`:

```tsx
import HeroSection from "@/components/HeroSection";
```

---

## 10. Figma → Code Workflow Notes

1. **Colors**: Map Figma color styles to CSS custom properties in `:root`, then expose via `@theme inline`.
2. **Typography**: Confirm font name matches one of the four loaded fonts (`Geist`, `Geist_Mono`, `DM_Sans`, `Inter`). If new, add `next/font/google` entry in `layout.tsx`.
3. **Spacing & sizing**: Use Tailwind arbitrary values (`w-[294px]`, `gap-[17px]`) for pixel-exact Figma measurements. Only tokenize values used 3+ times.
4. **Images**: Export from Figma via MCP asset URL or download to `/public/`.
5. **Icons**: Export as SVG, inline in JSX.
6. **No config file changes needed** for new tokens — everything goes in `globals.css`.
