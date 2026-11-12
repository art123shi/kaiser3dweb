import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 1. Force these variables to be available to the app
  env: {
    ADMIN_USER: process.env.ADMIN_USER,
    ADMIN_PASS: process.env.ADMIN_PASS,
  },
  async redirects() {
    return [
      // The old tech-stack page was folded into /services.
      { source: "/expertise", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
