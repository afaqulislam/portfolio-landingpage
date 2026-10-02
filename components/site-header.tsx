"use client";

import { useEffect, useState } from "react";

import BrandMark from "@/components/brand-mark";
import { nav, profile } from "@/lib/data";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        lifted || open ? "border-rule bg-paper/92 backdrop-blur-sm" : "border-transparent bg-paper"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="group flex items-center gap-3 text-ink transition-colors duration-200 hover:text-brand"
          aria-label={`${profile.name}, back to top`}
        >
          <BrandMark className="h-7 w-7 shrink-0 text-brand transition-transform duration-300 ease-editorial group-hover:-rotate-6 motion-reduce:group-hover:rotate-0" />
          <span className="text-sm font-semibold uppercase tracking-[0.14em]">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Sections">
            <ul className="flex items-center gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-baseline gap-1.5 font-mono text-2xs uppercase tracking-micro text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    <span className="text-ink-faint transition-colors duration-200 group-hover:text-brand">
                      {item.index}
                    </span>
                    <span className="sweep">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="flex items-center gap-2 border-l border-rule pl-8 font-mono text-2xs uppercase tracking-micro text-ink-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-brand motion-safe:animate-pulse-dot"
            />
            Available
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex items-center gap-2.5 font-mono text-2xs uppercase tracking-micro text-ink md:hidden"
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true" className="flex h-3 w-4 flex-col justify-between">
            <span
              className={`h-px w-full bg-ink transition-transform duration-300 ease-editorial ${
                open ? "translate-y-[5.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-ink transition-transform duration-300 ease-editorial ${
                open ? "-translate-y-[5.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="animate-fade-in border-t border-rule bg-paper md:hidden"
      >
        <nav aria-label="Sections" className="shell py-2">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 transition-colors duration-200 hover:text-brand"
                >
                  <span className="font-serif text-3xl leading-none">{item.label}</span>
                  <span className="font-mono text-2xs uppercase tracking-micro text-ink-faint">
                    {item.index}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2 py-5 font-mono text-2xs uppercase tracking-micro text-ink-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-brand motion-safe:animate-pulse-dot"
            />
            Available for work
          </p>
        </nav>
      </div>
    </header>
  );
}
