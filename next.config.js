const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'storage.googleapis.com',
      'cdn.discordapp.com',
      'avatars.dicebear.com',
      'media.discordapp.net',
      'dev.zydhan.xyz',
      'zydhan.xyz',
    ],
  },
  eslint: {
    dirs: ['src'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
