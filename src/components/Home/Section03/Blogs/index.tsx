import React from "react";
import { IoInfinite } from "react-icons/io5";
import { TbCloudCode } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";

// Styles
import styles from "./index.module.css";

const blogs = [
  {
    id: 1,
    title: "DevOps Best Practices",
    description: "Learn automation tips.",
    icon: <IoInfinite className={styles.icon} />,
  },
  {
    id: 2,
    title: "Cloud Deployment Strategies",
    description: "Efficient AWS hosting.",
    icon: <TbCloudCode className={styles.icon} />,
  },
  {
    id: 3,
    title: "React Tips & Tricks",
    description: "Optimize your components.",
    icon: <HiOutlineCode className={styles.icon} />,
  },
];

const Blogs = () => {
  return (
    <div className={`${styles.cardsContainer}`}>
      {blogs.map((blog) => (
        <div key={blog.id} className={`${styles.card} primary-card`}>
          <div>{blog.icon}</div>
          <h3 className={styles.cardTitle}>{blog.title}</h3>
          <p className={styles.cardDescription}>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
