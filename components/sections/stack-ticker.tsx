import { ticker } from "@/lib/data";

/**
 * Dark band between the hero and the work index. Deliberately shares the
 * Recognition palette — ink ground, bone type, vermilion only on the
 * separators — so the page reads as one system instead of two.
 */
export default function StackTicker() {
  const run = [...ticker, ...ticker];

  return (
    <div
      className="border-b border-paper/15 bg-ink py-4"
      role="marquee"
      aria-label="Technologies I work with"
    >
      <div
        className="flex w-max animate-ticker items-center motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-6"
        style={{ ["--ticker-duration" as string]: "56s" }}
      >
        {run.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center whitespace-nowrap px-7 font-mono text-2xs uppercase tracking-micro text-paper/70"
          >
            {item}
            <span
              aria-hidden="true"
              className="ml-7 h-1 w-1 shrink-0 rotate-45 bg-brand"
            />
          </span>
        ))}
      </div>

      {/* Reduced-motion fallback: the same list, laid out and readable. */}
      <ul className="hidden list-none px-5 text-center font-mono text-2xs uppercase tracking-micro text-paper/70 motion-reduce:flex motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-6 motion-reduce:gap-y-2">
        {ticker.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}