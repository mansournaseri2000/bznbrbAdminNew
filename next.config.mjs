/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  basePath: '/panel2', // ✅ Added basePath here
  images: {
    domains: ['780.ir', 'website-cms.780.ir', '37.32.8.14', 'uploader.bezanimbiroon.ir'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '37.32.8.14',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uploader.bezanimbiroon.ir',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '37.32.8.14',
      },
      {
        protocol: 'https',
        hostname: 'website-cms.780.ir',
        pathname: '/uploads/**',
      },
      { hostname: '37.32.8.14', protocol: 'http' },
    ],
  },
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
