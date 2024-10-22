import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [{
      pathname: '/assets/images/**',
    }],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'picsum.photos',
      pathname: '/**',
      port: '',
    }]
  }
};

export default nextConfig;
