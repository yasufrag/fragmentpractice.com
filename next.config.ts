// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,

  async headers() {
    return [
      {
        source: "/story",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;