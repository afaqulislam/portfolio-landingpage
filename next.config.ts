import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // `/icon` is served by Next from app/icon.svg; the trailing-slash form makes
  // the URL explicit so metadata icons and the tab icon never disagree.
  trailingSlash: false,
};

export default nextConfig;