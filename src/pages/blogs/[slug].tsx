// Libraries
import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head"; // Import the Head component for SEO
// Redux
import { wrapper } from "@/redux/store";
import {
  getRunningQueriesThunk,
  getBlogBySlug,
} from "@/redux/services/blogsApi";
// Components
import SingleBlog from "@/components/Blogs/SingleBlog";
// Types
import { TypeBlog } from "@/types/blog";
import NotFoundBlog from "@/components/Blogs/NotFoundBlog";

interface Props {
  blog: TypeBlog | null;
  error: string | null;
}

const BlogPage: NextPage<Props> = ({ blog, error }) => {
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <NotFoundBlog type="blog" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <NotFoundBlog type="blog" />
      </div>
    );
  }

  // Generate dynamic SEO title and description
  const pageTitle = blog.title || "Blog Post";
  const pageDescription = blog.excerpt || "Read this blog post to learn more.";
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blog.slug}`;
  const pageImage =
    blog.coverImageUrl ||
    `${process.env.NEXT_PUBLIC_SITE_URL}/images/default-blog.jpg`;

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

      {/* Render the SingleBlog component */}
      <div>
        <SingleBlog blog={blog} />
      </div>
    </>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const props: Props = {
      blog: null,
      error: null,
    };

    try {
      const slug = context.query?.slug;
      if (!slug || typeof slug !== "string") {
        props.error = "Invalid blog Slug.";
        return { props };
      }

      const blogResponse = await store.dispatch(
        getBlogBySlug.initiate({
          slug: slug,
        })
      );

      if (blogResponse.isSuccess) {
        props.blog = blogResponse.data;
      } else {
        props.error = "Failed to fetch blog. Please try again later.";
        console.error("Failed to fetch blog:", blogResponse.error);
      }
    } catch (error) {
      props.error = "An unexpected error occurred while fetching the blog.";
      console.error("Error fetching blog:", error);
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return { props };
  });
