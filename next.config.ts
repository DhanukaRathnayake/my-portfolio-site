import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
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
    SEO_PUBLIC_SITE_TITLE: process.env.SEO_PUBLIC_SITE_TITLE,
    SEO_PUBLIC_SITE_DESCRIPTION: process.env.SEO_PUBLIC_SITE_DESCRIPTION,
    SEO_PUBLIC_SITE_URL: process.env.SEO_PUBLIC_SITE_URL,
    SEO_PUBLIC_SITE_KEYWORDS: process.env.SEO_PUBLIC_SITE_KEYWORDS,
    SEO_PUBLIC_SITE_AUTHOR: process.env.SEO_PUBLIC_SITE_AUTHOR,
    SEO_PUBLIC_SITE_IMAGE: process.env.SEO_PUBLIC_SITE_IMAGE,
    SEO_PUBLIC_TWITTER_IMAGE: process.env.SEO_PUBLIC_TWITTER_IMAGE,
    SEO_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.SEO_PUBLIC_GOOGLE_ANALYTICS_ID,
  },
};

export default nextConfig;
