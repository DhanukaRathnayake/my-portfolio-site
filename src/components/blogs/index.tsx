// Libraries
import React, { FunctionComponent } from "react";
import BlogCard from "./blog-card";

// Styles
import styles from "./index.module.css";

// Data
// import blogs from "../../data/blogs.json";

// Types
import { TypeBlogCategory, TypeBlog } from "@/types/blog";

interface Props {
  categories: TypeBlogCategory[] | [];
  blogs: TypeBlog[] | [];
}

const Blog: FunctionComponent<Props> = ({ categories, blogs }) => {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        {categories.map((item: TypeBlogCategory, index: number) => (
          <button className={styles.btnCategory} key={index}>
            {item.name}
          </button>
        ))}
      </div>
      <div className={styles.blogCards}>
        {blogs.map((item: TypeBlog, index: number) => (
          <BlogCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
