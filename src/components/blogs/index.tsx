// Libraries
import React, { FunctionComponent, useState } from "react";
import BlogCard from "./blog-card";

// Styles
import styles from "./index.module.css";

// Types
import { TypeBlogCategory, TypeBlog } from "@/types/blog";

interface Props {
  categories: TypeBlogCategory[] | [];
  blogs: TypeBlog[] | [];
  blogsPerPage?: number;
}

const Blog: FunctionComponent<Props> = ({
  categories,
  blogs,
  blogsPerPage = 3,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Get the blogs for the current page
  const indexOfLastBlogs = currentPage * blogsPerPage;
  const indexOfFirstBlogs = indexOfLastBlogs - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlogs, indexOfLastBlogs);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Change page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle next and previous page navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
        {currentBlogs &&
          currentBlogs.length > 0 &&
          currentBlogs.map((item: TypeBlog, index: number) => (
            <BlogCard key={index} item={item} />
          ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="btn-primary px-4 py-2 rounded-md shadow-md focus:outline-none disabled:opacity-50"
          >
            Previous
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-md shadow-md focus:outline-none ${
                  currentPage === index + 1 ? "btn-primary" : "btn-tertiary"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="btn-primary px-4 py-2 rounded-md shadow-md focus:outline-none disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
