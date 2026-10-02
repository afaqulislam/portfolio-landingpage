import { ImageResponse } from "next/og";

import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Built at build time into /opengraph-image.png and wired into both the Open
 * Graph and Twitter tags automatically. Colours match the site palette exactly
 * so a shared link looks like the page it came from.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAF7F4",
          padding: "64px 72px",
        }}
      >
        {/* Top rail — mark, site address */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              width: 84,
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#EF5B23",
              color: "#FAF7F4",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            AUI
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 20, color: "#9A948D", letterSpacing: "2px" }}>
              PORTFOLIO
            </div>
            <div style={{ fontSize: 30, color: "#201D17" }}>
              {/* Stripped of the scheme so the card shows a readable host */}
              {profile.site.url.replace(/^https?:\/\//, "")}
            </div>
          </div>
        </div>

        {/* Name and role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              color: "#201D17",
              letterSpacing: "-3px",
              lineHeight: 1.02,
            }}
          >
            Afaq Ul Islam
          </div>
          <div
            style={{
              fontSize: 42,
              color: "#EF5B23",
              marginTop: "18px",
              letterSpacing: "-0.5px",
            }}
          >
            Full-Stack &amp; AI Engineer
          </div>
        </div>

        {/* Foot rail */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #E4DDD7",
            paddingTop: "26px",
            fontSize: 26,
            color: "#736A62",
          }}
        >
          <div>Karachi, Pakistan</div>
          <div>Co-Founder &amp; COO, Neofyx</div>
        </div>
      </div>
    ),
    size,
  );
}