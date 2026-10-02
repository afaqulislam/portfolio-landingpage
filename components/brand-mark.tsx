/**
 * The AUI mark, shared by the favicon (`app/icon.svg`) and the header logo so the
 * two never drift apart. Same geometry as the favicon tile: vermilion ground,
 * bone glyphs, flat apex and a square terminal on the I.
 */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <rect width="64" height="64" fill="currentColor" />
      <g fill="#FAF7F4">
        <path
          fillRule="evenodd"
          d="M13.75 46 20.2 15h2.1l6.45 31H13.75Zm4-8h7l-3.5-9.5L17.75 38Z"
        />
        <path d="M31.25 15h4.5v24.5a2 2 0 0 0 4 0V15h4.5v24.5a6.5 6.5 0 0 1-13 0V15Z" />
        <path d="M45.75 24h4.5v22h-4.5V24Zm0-9h4.5v4.5h-4.5V15Z" />
      </g>
    </svg>
  );
}