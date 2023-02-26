/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [40, 40, 40, 40, 40, 80, 160, 320],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
