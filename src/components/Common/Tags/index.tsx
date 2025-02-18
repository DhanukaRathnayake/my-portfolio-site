import React from "react";
import { useRouter } from "next/router";
import { motion } from "motion/react";
import { cn } from "@/utils/shadcn";

// Styles
import styles from "./index.module.css"; // Create a new CSS module for this component

interface TagsProps {
  type?: string;
  tags: string[];
  className?: string;
}

const Tags: React.FC<TagsProps> = ({ type, tags, className }) => {
  const router = useRouter();

  const handleSearchBlogByTag = (tag: string) => {
    if (tag === "All") {
      router.push(`/blogs`);
    } else {
      router.push(`/blogs?${type || "search"}=${tag}`);
    }
  };

  return (
    <motion.div
      className={styles.tagContainer}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {tags.map((tag, index) => (
        <div
          key={index}
          className={cn(`${className} ${styles.tag}`)}
          onClick={() => handleSearchBlogByTag(tag)}
        >
          {tag}
        </div>
      ))}
    </motion.div>
  );
};

export default Tags;
