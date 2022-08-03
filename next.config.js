/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    styledComponents: true,
  },
  reactStrictMode: false,

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
