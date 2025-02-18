import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    // useCache: true,
    // dynamicIO: true,
    // cacheLife: {
    //   blog: {
    //     stale: 3600, // 1 hour
    //     revalidate: 9, // 15 minutes
    //     expire: 86400, // 1 day
    //   },
    // },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
}

export default nextConfig
