import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization — add external domains here when needed
  images: {
    remotePatterns: [],
  },

  // Strict mode for better DX
  reactStrictMode: true,

  // Standalone output for Docker / self-hosting (uncomment when deploying)
  // output: "standalone",
};

export default nextConfig;
