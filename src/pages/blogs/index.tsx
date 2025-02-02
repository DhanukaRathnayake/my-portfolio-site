// Libraries
import React, { useState, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
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

interface Props {
  categories: TypeBlogCategory[] | [];
  blogs: TypeBlog[] | [];
}

const BlogsPage: NextPage<Props> = ({ categories, blogs: initialBlogs }) => {
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

  return (
    <div>
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
        console.error("Failed to fetch blogs:", blogsResponse.error);
      }
    } catch (error) {
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
        console.error("Failed to fetch categories:", categoriesResponse.error);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }

    // Run any remaining queries
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return { props };
  });
