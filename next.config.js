/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['modao.cc', 'be.chenzaozhao.com'],
  },
  pageExtensions: ['page.tsx', 'page.js'],
  async rewrites() {
    return [
      {
        source: '/api-job',
        destination: process.env.NEXT_PUBLIC_JOB_CATEGORY,
      },
      {
        source: '/api-industry',
        destination: process.env.NEXT_PUBLIC_INDUSTRY_CATEGORY,
      },
    ]
  },
}
