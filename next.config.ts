import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

if (process.env.NODE_ENV === "development") {
  const docsDevPort = process.env.HUSH_DOCS_DEV_PORT ?? "3001";

  nextConfig.rewrites = async () => [
    {
      source: "/docs",
      destination: `http://localhost:${docsDevPort}/docs`,
    },
    {
      source: "/docs/:path*",
      destination: `http://localhost:${docsDevPort}/docs/:path*`,
    },
  ];
}

export default nextConfig;
