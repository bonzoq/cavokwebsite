import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cavokwebsite",
  assetPrefix: "/cavokwebsite/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
