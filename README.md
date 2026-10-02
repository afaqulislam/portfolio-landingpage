<div align="center">
  <img src="./app/icon.svg" width="96" height="96" alt="AUI" />
  <h1>Afaq Ul Islam</h1>
  <p><strong>Full-Stack &amp; AI Engineer</strong> — Co-Founder &amp; COO, Neofyx</p>
  <p>
    <a href="https://afaqulislam.vercel.app">Live site</a> ·
    <a href="mailto:afaqulislam707@gmail.com">Email</a> ·
    <a href="https://github.com/afaqulislam">GitHub</a> ·
    <a href="https://linkedin.com/in/afaqulislam">LinkedIn</a>
  </p>
</div>

---

An editorial portfolio built with Next.js 15, React 19 and Tailwind CSS. Warm
paper surfaces, a single vermilion accent, hairline rules and a serif/sans/mono
type system. No template, no stock photography, no UI kit.

## Design system

The palette is one idea, not a theme: bone paper against near-black ink, with
vermilion as the only saturated colour on the page.

| Token | Hex | Role |
| --- | --- | --- |
| `--paper` | `#FAF7F4` | Page surface |
| `--paper-raised` | `#F4F0EB` | Alternating bands |
| `--ink` | `#201D17` | Primary text, dark fills |
| `--ink-muted` | `#736A62` | Body copy |
| `--ink-faint` | `#9A948D` | Labels, indices |
| `--rule` | `#E4DDD7` | Hairlines |
| `--rule-strong` | `#C4BDB4` | Emphasised borders |
| `--brand` | `#EF5B23` | The single accent |
| `--brand-deep` | `#CA3C11` | Accent hover |
| `--brand-wash` | `#FDEDE7` | Accent tint |

Type pairs three faces, all self-hosted as WOFF2 in `app/fonts`:

- **Instrument Serif** — display headlines, 400 only
- **Instrument Sans** — body copy and UI, 400/500/600
- **JetBrains Mono** — indices, labels, metadata

Corners are square throughout. The accent underline (`.sweep`) sweeps in from
the left on hover. Section indices are mono numerals followed by a rule that
fills the remaining width.

## Sections

| # | Section | Contents |
| --- | --- | --- |
| 01 | Work | Ten projects with stack, period and outcome |
| 02 | About | Long-form bio, fact table, markers |
| 03 | Stack | Grouped capabilities across four columns |
| 04 | Track | Roles and education |
| 05 | Awards | Recognition and performance notes |
| 06 | Contact | Email, phone, social links |

There is no contact form and no backend. Email and phone are plain `mailto:`
and `tel:` links, so the site stays a static export with no server runtime, no
environment variables and no credentials to manage.

## Getting started

```bash
git clone https://github.com/afaqulislam/portfolio-landingpage.git
cd portfolio-landingpage
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint over `app`, `components`, `lib` |

## Project structure

```
app/
  icon.svg           AUI mark — favicon and source of the logo
  fonts/             7 self-hosted WOFF2 files
  globals.css        Palette tokens, component layer, motion guards
  layout.tsx         Font loading, metadata, viewport, header/footer
  page.tsx           Section composition
components/
  brand-mark.tsx     The AUI mark as inline SVG, shared with the favicon
  site-header.tsx    Sticky nav, mobile menu, scroll state
  site-footer.tsx    Contact block, index, oversized wordmark
  live-year.tsx      Current year without a hydration mismatch
  local-clock.tsx    Client-side clock for the given timezone
  sections/          One file per section
lib/
  data.ts            All content — the only file you edit to update the site
```

## Editing content

Every word, project, date and link lives in `lib/data.ts`. Update it and the
whole site follows; no component needs touching.

```ts
export const profile = {
  name: "Afaq Ul Islam",
  role: "Full-Stack & AI Engineer",
  email: "afaqulislam707@gmail.com",
  // ...
}
```

## Tech

- **Next.js 15.5** — App Router, static prerender
- **React 19**
- **Tailwind CSS 3** — CSS custom properties for the palette
- **TypeScript** — strict mode
- **ESLint 8** with `eslint-config-next`

Runtime dependencies are deliberately minimal: `next`, `react`, `react-dom`.
No component library, no icon package, no state manager, no analytics.

## Notes on the build

Fonts are self-hosted through `next/font/local` rather than `next/font/google`
so the build works offline, first paint makes no third-party request, and
nothing render-blocks on `fonts.gstatic.com`.

The page is fully static — one route, prerendered at build time. Bundle cost
is roughly 105 kB first-load JS, nearly all of it the React runtime.

Accessibility: skip link, semantic landmarks, visible focus rings, labelled
form-free controls, and a `prefers-reduced-motion` block that neutralises
animation and transitions.

## Deploying

Push to GitHub and import the repository at [vercel.com/new](https://vercel.com/new).
No environment variables, no build settings to configure.

```bash
npm run build   # vercel runs this automatically
```

For any other host, set the output to a static build. `next build` emits
everything needed to `public/` plus the server chunks.

## Licence

Code released for reference. Content and personal details are the author's own.

<div align="center">
  <sub>AUI — Afaq Ul Islam · Karachi, Pakistan</sub>
</div>