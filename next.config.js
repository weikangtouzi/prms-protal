/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['modao.cc', 'be.chenzaozhao.com', 'img.freepik.com'],
    unoptimized: true,
  },
  pageExtensions: ['page.tsx', 'page.js'],
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    outputStandalone: false,
  },
}
