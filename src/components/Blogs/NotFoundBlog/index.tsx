import React from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

type NotFoundBlogProps = {
  type: "blogs" | "blog";
};

const NotFoundBlog = ({ type }: NotFoundBlogProps) => {
  const router = useRouter();

  return (
    <div className={`flex justify-center text-center items-center h-96 w-full`}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>
          {type === "blogs" ? "No Blogs Found" : "No Blog found"}
        </h2>
        <p className={styles.cardDescription}>
          {type === "blogs"
            ? "There are no blogs to display at the moment. Click to explore other categories."
            : "The blog you are looking for does not exist. Please check the URL or try searching for it."}
        </p>
        <div>
          <button
            className={`${styles.readMoreButton} w-20 sm:w-32 primary-button`}
            onClick={() => router.push(`/blogs`)} // Add click handler for redirect
          >
            All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundBlog;
