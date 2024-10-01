/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
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
      { hostname: '37.32.8.14', protocol: 'http' },
    ],
  },
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
