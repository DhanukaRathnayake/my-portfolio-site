import React from "react";
import { IoInfinite } from "react-icons/io5";
import { TbCloudCode } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";
import { motion } from "framer-motion";

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
    <motion.div
      className={styles.cardsContainer} // Container for all blog cards
      initial="hidden" // Initial state for the container
      animate="visible" // Animate to this state
      variants={{
        hidden: { opacity: 0 }, // Hidden state for the container
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3, // Stagger the animation of each child by 0.3s
          },
        },
      }}
    >
      {blogs.map((blog) => (
        <motion.div
          key={blog.id}
          className={`${styles.card} primary-card`}
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 20 }, // Initial state for each blog card
            visible: { opacity: 1, scale: 1, y: 0 }, // Animated state for each blog card
          }}
          transition={{
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for smooth motion
            type: "spring", // Spring animation for bounce
            stiffness: 100, // Adjust stiffness for spring
            damping: 10, // Adjust damping for spring
          }}
        >
          <div>{blog.icon}</div>
          <h3 className={styles.cardTitle}>{blog.title}</h3>
          <p className={styles.cardDescription}>{blog.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Blogs;
