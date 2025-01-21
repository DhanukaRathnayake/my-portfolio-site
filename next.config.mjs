/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    PUBLIC_API_KEY: process.env.PUBLIC_API_KEY,
    BREVO_SMTP_USER: process.env.BREVO_SMTP_USER,
    BREVO_SMTP_KEY: process.env.BREVO_SMTP_KEY,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    LOGO_URL: process.env.LOGO_URL,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
