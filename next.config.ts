import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/yusra-portfolio",
  assetPrefix: "/yusra-portfolio/",
};

export default nextConfig;