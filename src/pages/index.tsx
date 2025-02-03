// Libraries
import React from "react";
import { NextPage } from "next";
import Head from "next/head"; // Import the Head component for SEO
import Home from "../components/Home";

const HomePage: NextPage<{}> = () => {
  return (
    <>
      {/* Add SEO Tags */}
      <Head>
        {/* Title Tag */}
        <title>{process.env.SEO_PUBLIC_SITE_TITLE}</title>

        {/* Meta Description */}
        <meta
          name="description"
          content={process.env.SEO_PUBLIC_SITE_DESCRIPTION}
        />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content={process.env.SEO_PUBLIC_SITE_TITLE} />
        <meta
          property="og:description"
          content={process.env.SEO_PUBLIC_SITE_DESCRIPTION}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.SEO_PUBLIC_SITE_URL} />
        <meta
          property="og:image"
          content={`${process.env.SEO_PUBLIC_SITE_URL}${process.env.SEO_PUBLIC_SITE_IMAGE}`}
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={process.env.SEO_PUBLIC_SITE_TITLE}
        />
        <meta
          name="twitter:description"
          content={process.env.SEO_PUBLIC_SITE_DESCRIPTION}
        />
        <meta
          name="twitter:image"
          content={`${process.env.SEO_PUBLIC_SITE_URL}${process.env.SEO_PUBLIC_SITE_IMAGE}`}
        />

        {/* Canonical URL */}
        <link rel="canonical" href={process.env.SEO_PUBLIC_SITE_URL} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render the Home Component */}
      <Home />
    </>
  );
};

export default HomePage;
