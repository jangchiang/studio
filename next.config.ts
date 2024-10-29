import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    // Remove PORT from here if not needed in client-side code
    // If needed, ensure it's a string
    PORT: process.env.PORT || "3003",
  },
};

export default nextConfig;
