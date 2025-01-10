// Libraries
import React from "react";

// Components
import HeroText from "../../common/heroText";

// Styles
import styles from "./index.module.css";

// Data
const blogs = [
  {
    id: 1,
    title: "10 Best Practices in DevOps",
    summary: "Explore essential DevOps practices to streamline your workflow.",
    link: "/blog/devops-best-practices",
  },
  {
    id: 2,
    title: "Cloud Computing in 2025",
    summary: "Discover the latest trends in cloud computing.",
    link: "/blog/cloud-computing-2025",
  },
  {
    id: 3,
    title: "Building Scalable Web Apps",
    summary: "A guide to creating high-performance web applications.",
    link: "/blog/scalable-web-apps",
  },
];

const Section04 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Latest Blogs</h1>
        <div className={styles.blogCards}>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.blogCard}>
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <a href={blog.link}>Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section04;
