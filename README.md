<div align="center">
  <img src="./assets/aui-animated.svg" width="248" alt="AUI — animated mark" />
  <h1>Afaq Ul Islam</h1>
  <p><strong>Full-Stack &amp; AI Engineer</strong> &nbsp;·&nbsp; Co-Founder &amp; COO, Neofyx</p>
  <p>Web apps, AI agents, and the automation in between — designed, built and deployed end to end.</p>
</div>

<div align="center">

[Live site](https://portfolio-landingpage-aui.vercel.app) &nbsp;·&nbsp; [Email](mailto:afaqulislam707@gmail.com) &nbsp;·&nbsp; [GitHub](https://github.com/afaqulislam) &nbsp;·&nbsp; [LinkedIn](https://linkedin.com/in/afaqulislam)

</div>

---

An editorial portfolio built with **Next.js 15**, **React 19** and **Tailwind CSS** — warm paper
surfaces, a single vermilion accent, hairline rules and square corners. No template, no stock
photography and no UI kit.

`Next.js 15.5` &nbsp;·&nbsp; `React 19` &nbsp;·&nbsp; `TypeScript` &nbsp;·&nbsp; `Tailwind 3` &nbsp;·&nbsp; `ESLint 8`

## Contents

- [Overview](#overview)
- [Design system](#design-system)
- [Sections](#sections)
- [Built with](#built-with)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Editing content](#editing-content)
- [Implementation notes](#implementation-notes)
- [Deployment](#deployment)
- [Licence](#licence)

## Overview

A single-page portfolio, statically prerendered, with every word, project, date and link held
in one content file. The site can be rewritten end to end without touching a component.

Three principles shape the build:

- **Self-hosted fonts.** Instrument Serif, Instrument Sans and JetBrains Mono are committed as
  WOFF2 and loaded through `next/font/local`, so there is no render-blocking request to a font
  CDN and `npm run build` works offline.
- **No backend.** The contact section is information only — `mailto:` and `tel:` links. The
  page ships as a static prerender with no environment variables and no credentials.
- **Minimal dependencies.** The runtime is `next`, `react`, `react-dom` and
  `react-fast-marquee`. No component library, no icon package, no state manager, no analytics.

## Design system

One palette, applied consistently. Vermilion is the only saturated colour on the page.

| Token | Hex | Role |
| :--- | :--- | :--- |
| `--paper` | `#FAF7F4` | Page surface |
| `--paper-raised` | `#F4F0EB` | Alternating bands |
| `--ink` | `#201D17` | Primary text, dark bands |
| `--ink-muted` | `#736A62` | Body copy |
| `--ink-faint` | `#9A948D` | Labels, indices |
| `--rule` | `#E4DDD7` | Hairlines |
| `--rule-strong` | `#C4BDB4` | Emphasised borders |
| `--brand` | `#EF5B23` | The single accent |
| `--brand-deep` | `#CA3C11` | Accent hover |
| `--brand-wash` | `#FDEDE7` | Accent tint |

**Typography.** Instrument Serif for display, Instrument Sans for body and JetBrains Mono for
indices and metadata. Corners are square throughout, section indices are mono numerals
followed by a rule that fills the remaining width, and links carry an accent underline that
sweeps in from the left.

**Motion.** The stack ticker scrolls continuously, the brand mark's tile rotates beneath
upright glyphs that breathe on a staggered loop, and the About mark drifts inside a slowly
turning registration target. Every animation is disabled under `prefers-reduced-motion`.

## Sections

| # | Section | Contents |
| :-: | :--- | :--- |
| 01 | Work | Ten projects with stack, period, outcome and repository / live links |
| 02 | About | Long-form bio, fact table, animated mark |
| 03 | Capabilities | Grouped capabilities across four columns |
| 04 | Track | Roles and education |
| 05 | Recognition | Competitions and programmes |
| 06 | Contact | Email, phone and social links |

Two bands run full-bleed on the ink colour — the technology ticker beneath the hero and the
Recognition section — and share the same palette treatment.

## Built with

| Layer | Used for |
| :--- | :--- |
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 over CSS custom properties |
| Linting | ESLint 8 with `eslint-config-next` |
| Icons | Hand-written SVG |
| Ticker | `react-fast-marquee` |
| Fonts | 7 self-hosted WOFF2 files |

## Project structure

```text
next.config.ts       Next.js configuration
tailwind.config.ts   Design tokens and the custom keyframe animations
postcss.config.mjs   Tailwind and PostCSS pipeline
tsconfig.json        TypeScript configuration and the @/ path alias
.eslintrc.json       ESLint rules for app, components and lib
package.json         Scripts and the four runtime dependencies
package-lock.json    Locked dependency tree
.gitignore           Ignored build output and editor files
app/
  icon.svg             AUI mark — favicon, and the source of the logo
  opengraph-image.tsx  1200x630 social card, generated at build time
  fonts/               7 self-hosted WOFF2 files
  globals.css          Palette tokens, component layer, motion guards
  layout.tsx           Font loading, metadata, JSON-LD, viewport
  page.tsx             Section composition
assets/
  aui-animated.svg     Animated mark used by this README
components/
  brand-mark.tsx       The mark as inline SVG, optionally animated
  site-header.tsx      Sticky nav, mobile menu, scroll state
  site-footer.tsx      Contact block, index, oversized wordmark
  live-year.tsx        Current year without a hydration mismatch
  local-clock.tsx      Client-side clock for a given timezone
  sections/            One file per section
lib/
  data.ts              All content — the only file you edit to update the site
```

## Getting started

```bash
git clone https://github.com/afaqulislam/portfolio-landingpage.git
cd portfolio-landingpage
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Development server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint over `app`, `components` and `lib` |

## Editing content

Every word, project, date and link lives in `lib/data.ts`. Update it and the whole site
follows — no component needs editing.

```ts
export const profile = {
  name: "Afaq Ul Islam",
  role: "Full-Stack & AI Engineer",
  roleSecondary: "Co-Founder & COO, Neofyx",
  timezoneLabel: "PKT (UTC+05:00)",
  email: "afaqulislam707@gmail.com",
  // ...
}
```

The live domain is `profile.site.url` in the same file. Canonical, Open Graph, Twitter,
JSON-LD and the social card all derive from it, so changing it in one place updates
everywhere.

## Implementation notes

**Ticker.** The technology band scrolls with `react-fast-marquee`, which measures its
children and repeats them so the loop closes without a seam. Scroll speed is a rate in px/s
rather than a duration, so it does not drift with viewport width, and it pauses on hover.
Because the library has no reduced-motion handling of its own, playback is driven from a
`matchMedia` hook — under `prefers-reduced-motion` the band swaps to the full, readable list.
The component renders nothing until it has measured itself, so a height-matched stand-in holds
the track's space before hydration and the layout never shifts.

**Performance.** The page is prerendered as a single static route, with a first-load JS of
roughly 107 kB, almost all of it the React runtime.

**Accessibility.** A skip link, semantic landmarks, visible focus rings, a labelled
`role="marquee"` band with a readable static fallback, and a `prefers-reduced-motion` block
that neutralises animation and transitions.

**SEO.** Full Open Graph and Twitter cards, a canonical URL, `robots` directives and JSON-LD
`Person` schema. The social card is generated at build time from the same palette as the site.

## Deployment

Import the repository at [vercel.com/new](https://vercel.com/new). Nothing to configure — no
environment variables, no custom build command; `npm run build` is the default. The output is
static and deploys to any static host.

## Licence

Code released for reference. Content and personal details are the author's own.
