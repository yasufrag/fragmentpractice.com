import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  // Vercel: Edge/Node 自動判定。必要なら以下を追加
  // output: "standalone",
};

export default nextConfig;