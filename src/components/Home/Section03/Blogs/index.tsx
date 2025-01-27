import React from "react";
import { IoInfinite } from "react-icons/io5";
import { TbCloudCode } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";
import { motion } from "framer-motion";
import { LucideBrainCircuit } from "lucide-react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Best Libraries for Developers",
    description:
      "Leverage pre-built solutions to accelerate development and reduce coding time.",
    icon: <HiOutlineCode className={styles.icon} />,
    coverImageUrl:
      "https://portfolio-cms-storage-1.s3.us-east-1.amazonaws.com/public/blog01.webp",
    url: "/blogs?category=Libraries",
  },
  {
    id: 2,
    title: "AI Tools to Simplify Your Workflow",
    description:
      "Discover powerful AI tools and automation tips to streamline your tasks and boost productivity.",
    icon: <LucideBrainCircuit className={styles.icon} />,
    coverImageUrl:
      "https://portfolio-cms-storage-1.s3.us-east-1.amazonaws.com/public/blog02.png",
    url: "/blogs?category=AI",
  },
  {
    id: 3,
    title: "Cloud Deployment Strategies",
    description:
      "Optimize your cloud infrastructure with proven strategies for efficient and scalable deployments.",
    icon: <TbCloudCode className={styles.icon} />,
    coverImageUrl:
      "https://portfolio-cms-storage-1.s3.us-east-1.amazonaws.com/public/blog03.png",
    url: "/blogs?category=Cloud",
  },
];

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
      {blogs.map((blog, index) => (
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
