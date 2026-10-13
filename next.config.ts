import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder gambar sementara; hapus bila semua gambar sudah lokal.
    remotePatterns: [{ protocol: "https", hostname: "placehold.co" }],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
