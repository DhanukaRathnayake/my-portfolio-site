// Libraries
import React, { useState, useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import Head from "next/head"; // Import the Head component for SEO
import Services from "../../components/Services";
import { useToast } from "@/components/Common/Toast/ToastContext";
import { useRouter } from "next/router";

// Redux
import { wrapper } from "@/redux/store";
import {
  getRunningQueriesThunk,
  getAllServices,
  useGetAllServicesQuery,
} from "@/redux/services/serviceApi";

// Types
import { TypeService } from "@/types/service";

interface Props {
  services: TypeService[] | [];
  error: string | null;
}

const ServicesPage: NextPage<Props> = ({
  services: initialServices,
  error,
}) => {
  const [services, setServices] = useState<TypeService[] | []>(initialServices);
  const router = useRouter();
  const { addToast } = useToast();

  // Add query hook with current URL parameters
  const { refetch, error: refetchError } = useGetAllServicesQuery({
    search:
      typeof router.query.search === "string" ? router.query.search : null,
  });

  const refreshServices = async () => {
    try {
      const result = await refetch();
      if (result.data) {
        setServices(result.data);
      }
    } catch (error) {
      addToast("Failed to refresh services. Please try again later.", "error");
      console.error("Error refreshing services:", error);
    }
  };

  // Refresh the data on page
  useEffect(() => {
    refreshServices();
  }, [router.query]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        "Something went wrong"
      </div>
    );
  }

  if (!services || services.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        "Something went wrong"
      </div>
    );
  }

  // Generate dynamic SEO title and description
  const pageTitle = `Services${
    router.query.search ? ` - Search: ${router.query.search}` : ""
  }`;
  const pageDescription = `Explore our latest services${
    router.query.search ? ` related to "${router.query.search}"` : ""
  }.`;

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
      <Services services={services} />
    </>
  );
};

export default ServicesPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const props: Props = {
      services: [],
      error: null,
    };

    // Extract query parameters
    const search = context.query?.search;

    // Fetch services based on query parameters
    try {
      const servicesResponse = await store.dispatch(
        getAllServices.initiate({
          search: typeof search === "string" ? search : null,
        })
      );
      if (servicesResponse.isSuccess) {
        props.services = servicesResponse.data;
      } else {
        props.error = "Failed to fetch services. Please try again later.";
        console.error("Failed to fetch services:", servicesResponse.error);
      }
    } catch (error) {
      props.error = "An unexpected error occurred while fetching the services.";
      console.error("Error fetching services:", error);
    }

    // Run any remaining queries
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return { props };
  });
