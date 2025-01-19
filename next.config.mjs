/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    PUBLIC_API_KEY: process.env.PUBLIC_API_KEY,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
