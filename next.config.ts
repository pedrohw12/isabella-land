import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    // Only apply this redirect in dev mode
    return [
      {
        source: "/dashboard",
        destination: "/",
        permanent: false, // 302 redirect
      },
    ];
  },
};

export default nextConfig;
