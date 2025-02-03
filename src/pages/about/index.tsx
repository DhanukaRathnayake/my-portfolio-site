// Libraries
import React from "react";
import { NextPage } from "next";
import Head from "next/head"; // Import the Head component for SEO
import About from "@/components/About";

const AboutPage: NextPage<{}> = () => {
  return (
    <>
      {/* Add SEO Tags */}
      <Head>
        {/* Title Tag */}
        <title>{process.env.SEO_PUBLIC_SITE_TITLE} - About Us</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Learn more about our mission, vision, and the team behind our awesome website."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="About Us, Mission, Vision, Team, Next.js, React"
        />

        {/* Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content={`${process.env.SEO_PUBLIC_SITE_TITLE} - About Us`}
        />
        <meta
          property="og:description"
          content="Learn more about our mission, vision, and the team behind our awesome website."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.SEO_PUBLIC_SITE_URL}/about`}
        />
        <meta
          property="og:image"
          content={`${process.env.SEO_PUBLIC_SITE_URL}${process.env.SEO_PUBLIC_SITE_IMAGE}`}
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${process.env.SEO_PUBLIC_SITE_TITLE} - About Us`}
        />
        <meta
          name="twitter:description"
          content="Learn more about our mission, vision, and the team behind our awesome website."
        />
        <meta
          name="twitter:image"
          content={`${process.env.SEO_PUBLIC_SITE_URL}${process.env.SEO_PUBLIC_SITE_IMAGE}`}
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`${process.env.SEO_PUBLIC_SITE_URL}/about`}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render the About Component */}
      <About />
    </>
  );
};

export default AboutPage;
