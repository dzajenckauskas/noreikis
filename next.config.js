/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    domains: ['www.api.noreikis.com', 'https://www.api.noreikis.com', '154.49.136.99:1340', '154.49.136.99', '154.49.136.99:3002'],
  },
  i18n,
}

module.exports = nextConfig
