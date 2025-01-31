// next.config.mjs

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  // trailingSlash: true,
  // compress: true,

  devIndicators: {
    buildActivity: false,
  },

  // Configure images
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio.tagzy.site",
      },
      {
        protocol: "https",
        hostname: "portfolio-cms-storage-1.s3.us-east-1.amazonaws.com",
      },
    ],
  },

  // Configure environment variables
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    PUBLIC_API_KEY: process.env.PUBLIC_API_KEY,
    BREVO_SMTP_USER: process.env.BREVO_SMTP_USER,
    BREVO_SMTP_KEY: process.env.BREVO_SMTP_KEY,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    AWS_S3_URL: process.env.AWS_S3_URL,
  },
};

export default nextConfig;
