"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import { ticker } from "@/lib/data";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const list = window.matchMedia(query);
    setMatches(list.matches);

    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    list.addEventListener("change", onChange);
    return () => list.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** True from the first commit after hydration onwards. */
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

const techClass =
  "flex items-center whitespace-nowrap px-7 font-mono text-2xs uppercase tracking-micro text-paper/70";

/* One line, clipped, and the same 16px tall as the marquee track — the band
   reserves the right height before the component takes over. */
const standingRow = "flex flex-nowrap list-none overflow-hidden whitespace-nowrap px-5";

/* Reduced-motion end state: every item laid out and readable. */
const fallbackRow = "flex flex-wrap list-none justify-center px-5";

function Tech({ label }: { label: string }) {
  return (
    <span className={techClass}>
      {label}
      <span
        aria-hidden="true"
        className="ml-7 h-1 w-1 shrink-0 rotate-45 bg-brand"
      />
    </span>
  );
}

/**
 * Dark band between the hero and the work index. Deliberately shares the
 * Recognition palette — ink ground, bone type, vermilion only on the
 * separators — so the page reads as one system instead of two.
 *
 * Scroll comes from react-fast-marquee. The hand-rolled version doubled the
 * list and slid it by -50%, which assumed the copy was exactly half the track;
 * rounding put a visible gap at the seam. `autoFill` measures and repeats the
 * children instead, so the loop closes cleanly.
 *
 * That component returns null until it has measured itself, so it renders
 * nothing on the server. The standing row holds the height until it takes
 * over, and becomes the readable list for anyone asking for reduced motion.
 */
export default function StackTicker() {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const mounted = useMounted();

  const rowClass = reduced ? fallbackRow : mounted ? "hidden" : standingRow;

  return (
    <div
      className="border-b border-paper/15 bg-ink py-4"
      role="marquee"
      aria-label="Technologies I work with"
    >
      <div className="motion-reduce:hidden">
        <Marquee
          autoFill
          pauseOnHover
          play={!reduced}
          speed={45}
          gradient
          gradientColor="#201D17"
          gradientWidth={64}
        >
          {ticker.map((label) => (
            <Tech key={label} label={label} />
          ))}
        </Marquee>
      </div>

      <ul className={rowClass}>
        {ticker.map((label) => (
          <li key={label}>
            <Tech label={label} />
          </li>
        ))}
      </ul>
    </div>
  );
}