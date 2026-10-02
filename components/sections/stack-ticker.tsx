import { ticker } from "@/lib/data";

export default function StackTicker() {
  const run = [...ticker, ...ticker];

  return (
    <div className="overflow-hidden border-b border-rule bg-paper" aria-hidden="true">
      <div
        className="flex w-max animate-ticker items-center py-4 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-6"
        style={{ ["--ticker-duration" as string]: "56s" }}
      >
        {run.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="whitespace-nowrap px-7 font-mono text-2xs uppercase tracking-micro text-ink-muted">
              {item}
            </span>
            <span className="h-1 w-1 shrink-0 rotate-45 bg-brand/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
