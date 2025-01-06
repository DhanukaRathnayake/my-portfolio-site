// Libraries
import React, { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import Divider from "@mui/material/Divider";

// Components
import Blogs from "@/components/blogs";

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
      <text style={{ fontSize: "30px", fontWeight: "600" }}>Blog</text>
      <Divider
        flexItem
        style={{
          backgroundColor: "#0071ff",
          height: "6px",
          width: "100px",
          borderRadius: "10px",
        }}
      />
      <br />
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
      const status = context.query?.status;

      const blogsResponse = await store.dispatch(
        getAllBlogs.initiate({
          category: typeof category === "string" ? category : null,
          search: typeof search === "string" ? search : null,
          status: typeof status === "string" ? status : null,
        })
      );

      if (blogsResponse.isSuccess) {
        props.blogs = blogsResponse.data;

        console.log(blogsResponse, "BBB");
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
