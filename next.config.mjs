/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  basePath: "/my-portfolio-site",
  assetPrefix: "/my-portfolio-site/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
