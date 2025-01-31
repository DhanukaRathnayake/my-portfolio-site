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
  error: string | null;
}

const BlogPage: NextPage<Props> = ({ blog, error }) => {
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <SingleBlog blog={blog} />
    </div>
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
      const id = context.query?.id;

      if (!id || isNaN(Number(id))) {
        props.error = "Invalid blog ID.";
        return { props };
      }

      const blogResponse = await store.dispatch(
        getBlogById.initiate({
          id: Number(id),
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
