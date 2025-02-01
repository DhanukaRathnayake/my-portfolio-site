import React from "react";
import { IoInfinite } from "react-icons/io5";
import { TbCloudCode } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";
import { motion } from "motion/react";
import { LucideBrainCircuit } from "lucide-react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { MainBlogCategories } from "@/data/showcast";

const Blogs = () => {
  const router = useRouter();

  return (
    <motion.div
      className={styles.mainContainer}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      {MainBlogCategories.map((blog, index) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 20 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          key={index}
          className={`${styles.cardContainer} primary-card cursor-pointer`}
          onClick={() => router.push(blog.url)}
        >
          <div className={styles.imageContainer}>
            <Image
              src={blog.coverImageUrl}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{blog.title}</h2>
            <p className={styles.cardDescription}>{blog.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Blogs;
