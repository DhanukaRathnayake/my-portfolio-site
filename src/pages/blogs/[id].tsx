// Libraries
import React, { useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import Divider from "@mui/material/Divider";
import { generateHTML } from "@tiptap/html";
import DOMPurify from "dompurify";

// Components
import extensions from "@/components/Common/EditorExtension";

// Redux
import { wrapper } from "@/redux/store";
import { getRunningQueriesThunk, getBlogById } from "@/redux/services/blogsApi";

// Types
import { TypeBlog } from "@/types/blog";

// Import Highlight.js languages
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";

interface Props {
  blog: TypeBlog | null;
}

const BlogPage: NextPage<Props> = ({ blog }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [blog]);

  // Convert Tiptap JSON to HTML using @tiptap/html
  const htmlBody: any = blog && generateHTML(blog.body, extensions);

  return (
    <div>
      <text style={{ fontSize: "30px", fontWeight: "600" }}>{blog?.title}</text>
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

      {/* Render the content body */}
      <div
        className="tiptap mt-8"
        dangerouslySetInnerHTML={{
          __html: htmlBody,
        }} // Render HTML safely
      />
    </div>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const props: Props = {
      blog: null,
    };

    // Fetch categories
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

    // Run any remaining queries
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return { props };
  });
