// Libraries
import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Styles
import styles from "./index.module.css";

// Components
import Tags from "../Common/Tags";

// Types
import { TypeBlogCategory, TypeBlog } from "@/types/blog";
import Breadcrumb from "../Common/BreadCrumb";

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

  // Format the date safely
  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return "Unknown date";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className={styles.blogContainer}>
      <div className="mb-4">
        <Breadcrumb />
      </div>

      {currentBlogs && currentBlogs.length > 0 && (
        <div className="mb-6">
          <Tags
            type="category"
            tags={[
              "All",
              ...categories.map((item: TypeBlogCategory) => item.name),
            ]}
          />
        </div>
      )}

      {currentBlogs && currentBlogs.length > 0 ? (
        <div className={styles.blogCards}>
        {currentBlogs.map((item: TypeBlog, index: number) => (
            <div key={index} className={`${styles.cardContainer} primary-card`}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.coverImageUrl}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardDescription}>{item.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardDate}>
                    {item.createdAt ? formatDate(item.updatedAt) : "N/A"}
                  </span>
                  <button
                    className={`${styles.readMoreButton} primary-button`}
                    onClick={() => handleBlogView(item)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
        ))}
        </div>
      ) : (
        // Empty card placeholder
        <div
          className={`flex justify-center text-center items-center h-96 w-full`}
        >
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>No Blogs Found</h2>
            <p className={styles.cardDescription}>
              There are no blogs to display at the moment. Click to explore
              other categories.
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
      )}

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
