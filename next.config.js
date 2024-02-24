/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c1.topbroker.lt',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.api.noreikis.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
    ],
  },
  i18n,
}

module.exports = nextConfig
