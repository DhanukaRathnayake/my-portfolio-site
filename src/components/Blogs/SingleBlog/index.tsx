import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import { generateHTML } from "@tiptap/html";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";

// Components
import extensions from "@/components/Common/EditorExtension";

// Styles
import styles from "./index.module.css";

// Types
import { TypeBlog } from "@/types/blog";

interface Props {
  blog: TypeBlog;
}

const SingleBlog: React.FC<Props> = ({ blog }) => {
  useEffect(() => {
    hljs.highlightAll(); // Highlight code blocks
  }, [blog]);

  // Convert Tiptap JSON to HTML
  const htmlBody = blog && generateHTML(blog.body, extensions);

  // Sanitize HTML for security
  const sanitizedHTML = DOMPurify.sanitize(htmlBody);

  // Format the date safely
  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return "Unknown date";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className={styles.blogContainer}>
      {/* Row Layout for Cover Image, Title, and Metadata */}
      <div className={styles.headerRow}>
        {/* Title and Metadata */}
        <div className={styles.titleAndMetadata}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <div className={styles.metadata}>
            <span className={styles.author}>By {blog.author}</span>
            <span className={styles.publishedAt}>
              Published on {formatDate(blog.publishedAt || blog.createdAt)}
            </span>
            <span className={styles.readingTime}>
              {blog.readingTime} min read
            </span>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className={styles.tagsContainer}>
                {blog.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cover Image with Animation */}
        {blog.coverImageUrl && (
          <div className={styles.coverImageContainer}>
            <img
              src={blog.coverImageUrl}
              alt={blog.title}
              className={styles.coverImage}
            />
          </div>
        )}
      </div>

      {/* Blog Excerpt */}
      {blog.excerpt && <p className={styles.excerpt}>{blog.excerpt}</p>}

      {/* Blog Body */}
      <div
        className={`${styles.blogBody} tiptap`}
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />
    </div>
  );
};

export default SingleBlog;
