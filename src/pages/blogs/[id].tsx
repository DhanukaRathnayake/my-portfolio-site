// Libraries
import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "@/redux/store";

// Redux
import { getRunningQueriesThunk, getBlogById } from "@/redux/services/blogsApi";

// Components
import SingleBlog from "@/components/Blogs/SingleBlog";

// Types
import { TypeBlog } from "@/types/blog";

interface Props {
  blog: TypeBlog | null;
}

const BlogPage: NextPage<Props> = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <SingleBlog blog={blog} />;
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const props: Props = {
      blog: null,
    };

    try {
      const id = context.query?.id;

      const blogResponse = await store.dispatch(
        getBlogById.initiate({
          id: Number(id),
        })
      );

      if (blogResponse.isSuccess) {
        props.blog = blogResponse.data;
      } else {
        console.error("Failed to fetch blog:", blogResponse.error);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return { props };
  });
