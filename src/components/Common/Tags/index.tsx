import React from "react";
import { motion } from "framer-motion";

// Styles
import styles from "./index.module.css"; // Create a new CSS module for this component

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <motion.div
      className={styles.tagContainer}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {tags.map((tag, index) => (
        <div key={index} className={styles.tag}>
          {tag}
        </div>
      ))}
    </motion.div>
  );
};

export default Tags;
