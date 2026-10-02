"use client";

import { useEffect, useState } from "react";

/**
 * Renders the current year and re-checks every minute, so the copyright line
 * rolls over on 1 January without the page needing a redeploy. The server
 * render and the first client render both use the build-time year, which keeps
 * hydration clean.
 */
export default function LiveYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setYear(new Date().getFullYear());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return <>{year ?? new Date().getFullYear()}</>;
}