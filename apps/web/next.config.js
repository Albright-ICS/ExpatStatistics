const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  webpack: (config) => {
    config.resolve.alias['@shared'] = path.resolve(__dirname, '../../packages/shared/src');
    return config;
  }
};

module.exports = nextConfig;
