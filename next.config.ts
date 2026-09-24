import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Deploy wipes .next before every build, so the build cache is never read;
    // writing it took 16+ min on the server.
    turbopackFileSystemCacheForBuild: false,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
