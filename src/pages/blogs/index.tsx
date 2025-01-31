// Libraries
import React, { useState, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

// Components
import Blogs from "@/components/Blogs";

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
  const [localError, setLocalError] = useState<string | null>(error);

  const router = useRouter();

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
        setLocalError(null);
      }
    } catch (error) {
      setLocalError("Failed to refresh blogs. Please try again later.");
      console.error("Error refreshing blogs:", error);
    }
  };

  // Refresh the data on page
  useEffect(() => {
    refreshBlogs();
  }, [router.query]);

  // Handle refetch errors
  useEffect(() => {
    if (refetchError) {
      setLocalError("Failed to fetch blogs. Please try again later.");
    }
  }, [refetchError]);

  return (
    <div>
      {/* Display error messages if any */}
      {localError && <div className="error-message">{localError}</div>}

      {/* Render the Blogs component */}
      <Blogs categories={categories} blogs={blogs} />
    </div>
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
      props.error = "An unexpected error occurred while fetching blogs.";
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
      props.error = "An unexpected error occurred while fetching categories.";
      console.error("Error fetching categories:", error);
    }

    // Run any remaining queries
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return { props };
  });
