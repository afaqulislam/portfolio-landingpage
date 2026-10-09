<div align="center">
  <img src="./assets/aui-animated.svg" width="248" alt="AUI — animated mark" />
  <h1>Afaq Ul Islam</h1>
  <p><strong>Full-Stack &amp; AI Engineer</strong> &nbsp;·&nbsp; Co-Founder &amp; COO, Neofyx</p>
  <p>
    Web apps, AI agents, and the automation in between — designed, built and deployed end to end.
  </p>
</div>

<div align="center">

| Live site | Email | GitHub | LinkedIn |
| :---: | :---: | :---: | :---: |
| [portfolio-landingpage-aui.vercel.app](https://portfolio-landingpage-aui.vercel.app) | [afaqulislam707@gmail.com](mailto:afaqulislam707@gmail.com) | [@afaqulislam](https://github.com/afaqulislam) | [in/afaqulislam](https://linkedin.com/in/afaqulislam) |

</div>

---

An editorial portfolio built with **Next.js 15**, **React 19** and **Tailwind CSS** — warm
paper surfaces, one vermilion accent, hairline rules, square corners. No template, no stock
photography, no UI kit, no contact form.

<div align="center">

`Next.js 15.5` `React 19` `TypeScript` `Tailwind 3` `ESLint 8`

</div>

## Contents

- [What it is](#what-it-is)
- [Design system](#design-system)
- [Sections](#sections)
- [Stack](#stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Editing content](#editing-content)
- [Engineering notes](#engineering-notes)
- [Deploying](#deploying)
- [Licence](#licence)

## What it is

A single static page carrying the work. Every section is built from real content held in
one file, so the site can be rewritten without touching a component.

Three decisions shape the whole build:

1. **Self-hosted fonts.** Instrument Serif, Instrument Sans and JetBrains Mono are
   committed as WOFF2 and loaded through `next/font/local`. No request to
   `fonts.gstatic.com`, no render-blocking round trip, and `npm run build` works offline.
2. **No backend.** The contact section is information only — `mailto:` and `tel:` links.
   The page is a static export with no environment variables and no credentials.
3. **Almost no dependencies.** Runtime is `next`, `react`, `react-dom` and
   `react-fast-marquee` — the one library bought in, because it closes the ticker loop
   without the seam a hand-rolled track leaves. No component library, no icon package, no
   state manager, no analytics.

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

**Type.** Instrument Serif for display, Instrument Sans for body, JetBrains Mono for
indices and metadata. Corners are square throughout. Section indices are mono numerals
followed by a rule that fills the remaining width, and links carry an accent underline
that sweeps in from the left.

**Motion is continuous, not decorative.** The stack ticker scrolls indefinitely, the brand
mark's tile rotates beneath glyphs that stay upright and breathe on a staggered loop, and
the About mark drifts inside a slowly turning registration target.

## Sections

| # | Section | Contents |
| :-: | :--- | :--- |
| 01 | Work | Ten projects with stack, period and outcome |
| 02 | About | Long-form bio, fact table, animated mark |
| 03 | Capabilities | Grouped capabilities across four columns |
| 04 | Track | Roles and education |
| 05 | Recognition | Competitions and programmes |
| 06 | Contact | Email, phone, social links |

Two bands run full-bleed on the ink colour: the technology ticker under the hero and the
Recognition section, which share the same palette treatment.

## Stack

| Layer | Used for |
| :--- | :--- |
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript, strict |
| Styling | Tailwind CSS 3 over CSS custom properties |
| Linting | ESLint 8 with `eslint-config-next` |
| Icons | Hand-written SVG — no icon package |
| Ticker | `react-fast-marquee` (autoFill, pause on hover) |
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
| `npm run lint` | ESLint over `app`, `components`, `lib` |

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

## Engineering notes

**Ticker.** The technology band scrolls with `react-fast-marquee`. The first pass doubled
the list by hand and slid it `-50%`, which only lines up if the copy is exactly half the
track — rounding put a visible gap at the seam on every loop. `autoFill` measures the
children and repeats them instead, so the loop closes cleanly. `speed` is px/s, not a
duration, so the rate does not drift with viewport width, and it pauses on hover.

The library has no reduced-motion handling of its own, so `play` is driven from a
`matchMedia` hook. Under `prefers-reduced-motion` the band swaps to the same list laid
out in full — readable, not clipped.

The component returns `null` until it has measured itself, so it renders nothing on the
server. Until it mounts the band carries a one-line stand-in at the same 16 px as the
marquee track: the height is reserved before the swap, so the page never moves. All
sixteen items are still in the HTML — only the overflow is clipped.

**Static output.** One route, prerendered. First-load JS is roughly 107 kB, nearly all of
it the React runtime.

**Accessible.** Skip link, semantic landmarks, visible focus rings, a labelled
`role="marquee"` band with a readable static fallback, and a `prefers-reduced-motion`
block that neutralises animation and transitions. The animated mark and README SVG both
honour the same preference.

**SEO.** Full Open Graph and Twitter cards, canonical URL, `robots` directives, and
JSON-LD `Person` schema. The social card is generated from the same palette as the site.

**Dead code removed.** The starter shipped `components/ui`, `lib/utils`, the `public`
folder and a shadcn dependency tree — six packages supporting a single button. The button
is now plain markup and runtime dependencies number four.

## Deploying

Import the repository at [vercel.com/new](https://vercel.com/new). Nothing to configure:
no environment variables, no custom build command, `npm run build` is the default.

The page also exports cleanly to any static host.

## Licence

Code released for reference. Content and personal details are the author's own.

<div align="center">
  <sub>AUI · Karachi, Pakistan</sub>
</div>