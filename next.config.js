/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ]
  },
}

module.exports = withVideos(nextConfig)
