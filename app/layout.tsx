import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { profile } from "@/lib/data";

import "./globals.css";

/**
 * Fonts are self-hosted rather than pulled from `next/font/google` on purpose:
 * the build stays reproducible offline, no third-party request is made on
 * first paint, and there is no render-blocking round trip to fonts.gstatic.com.
 *
 * Type system — a deliberate editorial pairing, not a default UI sans:
 *   serif  Instrument Serif   display headlines, high contrast, 400 only
 *   sans   Instrument Sans    body copy and UI, tight grotesque
 *   mono   JetBrains Mono     indices, labels, and metadata
 *
 * Because Instrument Serif ships 400 only, never apply font-bold to a
 * `.font-serif` element — the browser would synthesise a fake bold.
 */

const serif = localFont({
  src: [
    {
      path: "./fonts/instrument-serif-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/instrument-serif-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
  // The hero headline is the LCP element, so this one is worth preloading.
  preload: true,
  fallback: ["ui-serif", "Georgia", "Times New Roman", "serif"],
  adjustFontFallback: "Times New Roman",
});

const sans = localFont({
  src: [
    {
      path: "./fonts/instrument-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/instrument-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/instrument-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: false,
  fallback: ["ui-sans-serif", "system-ui", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});

const mono = localFont({
  src: [
    {
      path: "./fonts/jetbrains-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/jetbrains-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.site.url),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  applicationName: profile.name,

  alternates: {
    canonical: "/",
  },

  // The AUI tile in app/icon.svg. SVG covers every current browser, so no
  // .ico is emitted. No apple-touch-icon: iOS will not render an SVG one.
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },

  keywords: [
    "Afaq Ul Islam",
    "full stack engineer",
    "AI engineer",
    "React developer",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "AI agents",
    "workflow automation",
    "SaaS",
    "portfolio",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: profile.name, url: profile.site.url }],
  creator: profile.name,
  publisher: profile.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.site.url,
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#201D17" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-none focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:font-mono focus:text-2xs focus:uppercase focus:tracking-micro"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
