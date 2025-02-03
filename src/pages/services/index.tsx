// Libraries
import React from "react";
import { NextPage } from "next";
import Head from "next/head"; // Import the Head component for SEO
import Services from "../../components/Services";

const ServicesPage: NextPage<{}> = () => {
  return (
    <>
      {/* Add SEO Tags */}
      <Head>
        {/* Title Tag */}
        <title>{process.env.SEO_PUBLIC_SITE_TITLE} - My Services</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore the wide range of services we offer to help you achieve your goals."
        />

        {/* Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content={`${process.env.SEO_PUBLIC_SITE_TITLE} - My Services`}
        />
        <meta
          property="og:description"
          content="Explore the wide range of services we offer to help you achieve your goals."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.SEO_PUBLIC_SITE_URL}/services`}
        />
        <meta
          property="og:image"
          content={`${process.env.SEO_PUBLIC_SITE_URL}${process.env.SEO_PUBLIC_SITE_IMAGE}`}
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${process.env.SEO_PUBLIC_SITE_TITLE} - My Services`}
        />
        <meta
          name="twitter:description"
          content="Explore the wide range of services we offer to help you achieve your goals."
        />
        <meta
          name="twitter:image"
          content={`${process.env.SEO_PUBLIC_SITE_URL}${process.env.SEO_PUBLIC_SITE_IMAGE}`}
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`${process.env.SEO_PUBLIC_SITE_URL}/services`}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render the Services Component */}
      <Services />
    </>
  );
};

export default ServicesPage;
