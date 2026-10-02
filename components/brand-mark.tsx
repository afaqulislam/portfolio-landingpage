export default function BrandMark({
  className,
  animate = false,
}: {
  className?: string;
  /** Runs the continuous mark animation. Off by default so the favicon, the
   *  OG image and the header logo stay still and legible. */
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      {/* Vermilion ground. On the animated variant it turns slowly, which is what
          makes the whole mark feel alive rather than just sliding. */}
      <rect
        width="64"
        height="64"
        fill="currentColor"
        className={animate ? "origin-center motion-safe:animate-mark-spin" : undefined}
        style={
          animate
            ? { transformBox: "fill-box", transformOrigin: "center" }
            : undefined
        }
      />

      {/* Bone glyphs. Each carries its own counter-rotating rise so the letters
          stay upright while the tile turns underneath them. */}
      <g
        fill="#FAF7F4"
        className={animate ? "origin-center motion-safe:animate-mark-rise" : undefined}
        style={
          animate
            ? { transformBox: "fill-box", transformOrigin: "center" }
            : undefined
        }
      >
        <path
          fillRule="evenodd"
          d="M13.75 46 20.2 15h2.1l6.45 31H13.75Zm4-8h7l-3.5-9.5L17.75 38Z"
          className={
            animate
              ? "motion-safe:animate-glyph-a motion-safe:[animation-delay:-120ms]"
              : undefined
          }
        />
        <path
          d="M31.25 15h4.5v24.5a2 2 0 0 0 4 0V15h4.5v24.5a6.5 6.5 0 0 1-13 0V15Z"
          className={
            animate
              ? "motion-safe:animate-glyph-u motion-safe:[animation-delay:-240ms]"
              : undefined
          }
        />
        <path
          d="M45.75 24h4.5v22h-4.5V24Zm0-9h4.5v4.5h-4.5V15Z"
          className={
            animate
              ? "motion-safe:animate-glyph-i motion-safe:[animation-delay:-360ms]"
              : undefined
          }
        />
      </g>
    </svg>
  );
}