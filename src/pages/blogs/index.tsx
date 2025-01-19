// Libraries
import React, { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";

// Components
import PageLoader from "@/components/Common/Loaders/PageLoader";
const Blogs = dynamic(() => import("../../components/Blogs"), {
  ssr: true,
  loading: () => <PageLoader />,
});

// Redux
import { wrapper } from "@/redux/store";
import {
  getRunningQueriesThunk,
  getAllCategories,
  getAllBlogs,
} from "@/redux/services/blogsApi";

// Types
import { TypeBlogCategory, TypeBlog } from "@/types/blog";

interface Props {
  categories: TypeBlogCategory[] | [];
  blogs: TypeBlog[] | [];
}

const BlogsPage: NextPage<Props> = ({ categories, blogs: initialBlogs }) => {
  const [blogs] = useState<TypeBlog[] | []>(initialBlogs);

  return (
    <div>
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

    // Fetch contents
    try {
      const category = context.query?.category;
      const search = context.query?.search;

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
