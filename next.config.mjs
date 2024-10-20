/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/dream-house/' : '',
  basePath: isProd ? '/dream-house' : '',
};

export default nextConfig;
