# DataFlow AI — Landing Page

> **FB Round 1 Submission** · Next-Gen AI Platform Speed Run · 26 June 2026

A premium, high-converting, responsive SaaS landing page for an AI-driven data automation platform. Built under a 4-hour countdown as part of the FB Round 1 challenge.

---

## 🔗 Live Demo

**[→ dataflow-ai.vercel.app](https://dataflow-ai.vercel.app)** *(update after deployment)*

---

## ✨ Features

### Feature 1 — Matrix-Driven Pricing & Currency Switcher
- Toggle between **Monthly** and **Annual** billing (flat **20% discount** on annual)
- Switch between **INR (₹)**, **USD ($)**, and **EUR (€)** currencies
- Prices computed via a **multi-dimensional configuration matrix** — `basePrice × billingMultiplier × regionalTariff`
- **Zero global re-renders** on toggle — currency state is stored in a `useRef`, price updates write directly to DOM text nodes via `requestAnimationFrame`, strictly isolated from the component tree

### Feature 2 — Bento-to-Accordion with Context Lock
- **Desktop (≥768px):** 9-card asymmetric **Bento Grid** with mini visual widgets per card (sparklines, ring charts, tag clouds, code snippets, pipeline diagrams)
- **Mobile (<768px):** Fluid touch-optimised **Accordion** list
- **Context Lock Constraint:** If a bento card is active on desktop and the window is resized below the mobile breakpoint, the exact `activeIndex` transfers to the Accordion — the corresponding panel opens **smoothly** using `useLayoutEffect` + `requestAnimationFrame` to animate `0px → scrollHeight` with a `300ms ease-in-out` transition, then `scrollIntoView` fires after the animation completes

---

## 🏗️ Architecture

```
src/
├── components/
│   ├── features/        # BentoGrid, BentoCard, AccordionList, AccordionItem
│   ├── layout/          # Header, Footer, MobileMenu
│   ├── pricing/         # PricingCard, BillingToggle, CurrencySwitcher
│   ├── sections/        # HeroSection, FeatureShowcase, PricingSection,
│   │                    # TestimonialSection, CtaSection
│   └── ui/              # MetaManager (react-helmet-async)
├── data/                # features.ts, pricing.ts, testimonials.ts
├── hooks/               # useBreakpoint, useFocusTrap, useReducedMotion
├── icons/               # Custom SVG icon components (no external icon lib)
├── types/               # Shared TypeScript interfaces
└── utils/               # pricingCalc.ts (computePrice, formatPrice)
```

---

## 🛠️ Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS v3 + custom CSS (variables, keyframes) |
| Fonts | Barlow (display) · Inter (body) · JetBrains Mono (code) via Google Fonts |
| SEO | react-helmet-async + static OG/Twitter tags in `index.html` |
| Animations | Native CSS Transitions / Keyframes / Web Animations API — **no runtime animation engines** |
| Testing | Vitest + fast-check (property-based tests for pricing logic) |
| Deployment | Vercel |

---

## ✅ FB Round 1 Compliance

### Scoring (100 pts)

| Category | Points | Status |
|---|---|---|
| Feature 1 — Dynamic pricing matrix | 15 | ✅ |
| Re-render & state isolation guardrail | 15 | ✅ |
| Feature 2 — Bento↔Accordion + context lock | 10 | ✅ |
| Semantic DOM layout | 15 | ✅ |
| SEO hygiene & metadata | 10 | ✅ |
| Loading sequence performance (≤500ms) | 5 | ✅ |
| Asset compliance & design polish | 15 | ✅ |
| Breakpoint fluidity | 10 | ✅ |
| Motion accuracy | 5 | ✅ |

### Motion Constraints

| Type | Duration | Easing |
|---|---|---|
| Hover / micro-interactions | 150ms | ease-out |
| Accordion open/close | 300ms | ease-in-out |
| Carousel slide | 400ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Section reveal | 600ms | ease-out |

### Banned Libraries — Confirmed Absent
`Framer Motion` · `Radix UI` · `Shadcn` · `HeadlessUI` · `Tailwind UI`  
All animations are hand-written CSS transitions / keyframes.

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Clone the repo
git clone https://github.com/Preet-Kotak/Front-end-Battle-vibecoding-competition.git
cd Front-end-Battle-vibecoding-competition

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output → dist/
```

### Preview Production Build

```bash
npm run preview
# → http://localhost:4173
```

---

## 📦 Deployment (Vercel)

This repo includes a [`vercel.json`](./vercel.json) that configures:
- **Build command:** `npm run build`
- **Output directory:** `dist/`
- **SPA rewrites:** all routes → `index.html`

**Deploy in one click:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or via CLI:
```bash
npm i -g vercel
vercel --prod
```

---

## 📐 Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Background | `#172b36` | Page background |
| Surface | `rgba(17, 76, 90, 0.22)` | Cards |
| Text primary | `#f1f6f4` | Headings |
| Text muted | `rgba(217,232,226,0.5)` | Body copy |
| Accent | `#ff9932` | Deep Saffron — CTAs, active states |
| Secondary | `#ffc880` | Forsythia — highlights |
| Tertiary | `#d9e8e2` | Mystic Mint — borders, subtle text |

### Typography
- **Display:** Barlow 700, letter-spacing -0.03em
- **Body:** Inter 400/500/600
- **Mono:** JetBrains Mono 400/500

---

## 📁 Key Files

| File | Purpose |
|---|---|
| [`src/data/pricing.ts`](src/data/pricing.ts) | Multi-dimensional pricing matrix |
| [`src/utils/pricingCalc.ts`](src/utils/pricingCalc.ts) | `computePrice()` — the pricing formula |
| [`src/components/sections/PricingSection.tsx`](src/components/sections/PricingSection.tsx) | State-isolated currency/billing engine |
| [`src/components/sections/FeatureShowcase.tsx`](src/components/sections/FeatureShowcase.tsx) | Bento↔Accordion context lock |
| [`src/components/features/AccordionItem.tsx`](src/components/features/AccordionItem.tsx) | Smooth-open via `useLayoutEffect` + rAF |
| [`src/hooks/useBreakpoint.ts`](src/hooks/useBreakpoint.ts) | `matchMedia` breakpoint hook |
| [`src/index.css`](src/index.css) | Design tokens, keyframes, card styles |

---

## 📄 License

MIT
