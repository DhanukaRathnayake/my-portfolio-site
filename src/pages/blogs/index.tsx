// Libraries
import React, { useState, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head"; // Import the Head component for SEO
import { useRouter } from "next/router";
// Components
import Blogs from "@/components/Blogs";
// Hooks
import { useToast } from "@/components/Common/Toast/ToastContext";
// Redux
import { wrapper } from "@/redux/store";
import {
  getRunningQueriesThunk,
  getAllCategories,
  getAllBlogs,
  useGetAllBlogsQuery,
} from "@/redux/services/blogsApi";
// Types
import { TypeBlogCategory, TypeBlog } from "@/types/blog";
import NotFoundBlog from "@/components/Blogs/NotFoundBlog";

interface Props {
  categories: TypeBlogCategory[] | [];
  blogs: TypeBlog[] | [];
  error: string | null;
}

const BlogsPage: NextPage<Props> = ({
  categories,
  blogs: initialBlogs,
  error,
}) => {
  const [blogs, setBlogs] = useState<TypeBlog[] | []>(initialBlogs);
  const router = useRouter();
  const { addToast } = useToast();

  // Add query hook with current URL parameters
  const { refetch, error: refetchError } = useGetAllBlogsQuery({
    category:
      typeof router.query.category === "string" ? router.query.category : null,
    search:
      typeof router.query.search === "string" ? router.query.search : null,
  });

  const refreshBlogs = async () => {
    try {
      const result = await refetch();
      if (result.data) {
        setBlogs(result.data);
      }
    } catch (error) {
      addToast("Failed to refresh blogs. Please try again later.", "error");
      console.error("Error refreshing blogs:", error);
    }
  };

  // Refresh the data on page
  useEffect(() => {
    refreshBlogs();
  }, [router.query]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <NotFoundBlog type="blogs" />
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <NotFoundBlog type="blogs" />
      </div>
    );
  }

  // Generate dynamic SEO title and description
  const pageTitle = `Blogs${
    router.query.category ? ` - ${router.query.category}` : ""
  }${router.query.search ? ` - Search: ${router.query.search}` : ""}`;
  const pageDescription = `Explore our latest blogs${
    router.query.category ? ` in the ${router.query.category} category` : ""
  }${router.query.search ? ` related to "${router.query.search}"` : ""}.`;

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
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.SEO_PUBLIC_SITE_URL}${router.asPath}`}
        />
        <meta
          property="og:image"
          content={`${process.env.SEO_PUBLIC_SITE_URL}/images/cover.jpg`}
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content={`${process.env.SEO_PUBLIC_SITE_URL}/images/cover.jpg`}
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`${process.env.SEO_PUBLIC_SITE_URL}${router.asPath}`}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render the Blogs component */}
      <div>
        <Blogs categories={categories} blogs={blogs} />
      </div>
    </>
  );
};

export default BlogsPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const props: Props = {
      blogs: [],
      categories: [],
      error: null,
    };

    // Extract query parameters
    const category = context.query?.category;
    const search = context.query?.search;

    // Fetch blogs based on query parameters
    try {
      const blogsResponse = await store.dispatch(
        getAllBlogs.initiate({
          category: typeof category === "string" ? category : null,
          search: typeof search === "string" ? search : null,
        })
      );
      if (blogsResponse.isSuccess) {
        props.blogs = blogsResponse.data;
      } else {
        props.error = "Failed to fetch blogs. Please try again later.";
        console.error("Failed to fetch blogs:", blogsResponse.error);
      }
    } catch (error) {
      props.error = "An unexpected error occurred while fetching the blogs.";
      console.error("Error fetching blogs:", error);
    }

    // Fetch categories
    try {
      const categoriesResponse = await store.dispatch(
        getAllCategories.initiate(null)
      );
      if (categoriesResponse.isSuccess) {
        props.categories = categoriesResponse.data;
      } else {
        props.error = "Failed to fetch categories. Please try again later.";
        console.error("Failed to fetch categories:", categoriesResponse.error);
      }
    } catch (error) {
      props.error =
        "An unexpected error occurred while fetching the categories.";
      console.error("Error fetching categories:", error);
    }

    // Run any remaining queries
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return { props };
  });
