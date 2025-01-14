// Libraries
import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

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
  blogsPerPage = 12,
}) => {
  const router = useRouter();

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

  const handleBlogView = (blog: TypeBlog) => {
    router.push(`/blogs/${blog.id}`);
  };

  return (
    <div className={styles.blogContainer}>
      <div className={styles.categoryContainer}>
        {categories.map((item: TypeBlogCategory, index: number) => (
          <button
            className={`${styles.btnCategory} primary-button`}
            key={index}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className={styles.blogCards}>
        {currentBlogs &&
          currentBlogs.length > 0 &&
          currentBlogs.map((item: TypeBlog, index: number) => (
            <div className={`primary-card`}>
              <img
                src={item.coverImageUrl}
                alt={item.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>
                  {item.excerpt.length > 95
                    ? `${item.excerpt.substring(0, 95)}...`
                    : item.excerpt}
                </p>
                <button
                  className={`${styles.readMoreButton} primary-button`}
                  onClick={() => handleBlogView(item)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className={styles.paginationContainer}>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`${styles.paginationButton} primary-button`}
          >
            Previous
          </button>
          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${styles.pageButton} primary-button ${
                  currentPage === index + 1 ? styles.activePage : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`${styles.paginationButton} primary-button`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
