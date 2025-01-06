/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
