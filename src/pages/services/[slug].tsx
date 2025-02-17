// Libraries
import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head"; // Import the Head component for SEO
// Redux
import { wrapper } from "@/redux/store";
import {
  getRunningQueriesThunk,
  getServiceBySlug,
} from "@/redux/services/serviceApi";
// Components
import SingleService from "@/components/Services/SingleService";
// Types
import { TypeService } from "@/types/service";

interface Props {
  service: TypeService | null;
  error: string | null;
}

const ServicePage: NextPage<Props> = ({ service, error }) => {
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        "Something went wrong"
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        "Something went wrong"
      </div>
    );
  }

  // Generate dynamic SEO title and description
  const pageTitle = service.title || "Service Post";
  const pageDescription =
    service.excerpt || "Read this service post to learn more.";
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/service/${service.slug}`;
  const pageImage =
    service.coverImageUrl ||
    `${process.env.NEXT_PUBLIC_SITE_URL}/images/default-service.jpg`;

  return (
    <>
      {/* Add SEO Tags */}
      <Head>
        {/* Title Tag */}
        <title>{pageTitle}</title>

        {/* Meta Description */}
        <meta name="description" content={pageDescription} />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render the SingleService component */}
      <div>
        <SingleService service={service} />
      </div>
    </>
  );
};

export default ServicePage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const props: Props = {
      service: null,
      error: null,
    };

    try {
      const slug = context.query?.slug;
      if (!slug || typeof slug !== "string") {
        props.error = "Invalid service Slug.";
        return { props };
      }

      const serviceResponse = await store.dispatch(
        getServiceBySlug.initiate({
          slug: slug,
        })
      );

      if (serviceResponse.isSuccess) {
        props.service = serviceResponse.data;
      } else {
        props.error = "Failed to fetch service. Please try again later.";
        console.error("Failed to fetch service:", serviceResponse.error);
      }
    } catch (error) {
      props.error = "An unexpected error occurred while fetching the service.";
      console.error("Error fetching service:", error);
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return { props };
  });
