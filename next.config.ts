import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

let basePath = "";
let assetPrefix = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") ?? "";
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix,
};

export default nextConfig;