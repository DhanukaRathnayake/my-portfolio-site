// Libraries
import React, { FunctionComponent, useRef } from "react";
import Link from "next/link";
import { IoInfinite } from "react-icons/io5";
import { TbCloudCode } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";

// Components
import WorkTypeCard from "./work-type-card";
// import BlogCard from "./blog-card";

import styles from "./index.module.css";
import HeroText from "../common/heroText";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const tags = ["AWS", "K8S", "Terraform", "NextJs", "NestJs"];
const socialIcons = [
  { name: "GitHub", url: "https://github.com/", icon: <FaGithub size="20" /> },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/",
    icon: <FaLinkedinIn size="20" />,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/",
    icon: <SiUpwork size="20" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: <TbBrandFiverr size="20" />,
  },
];

// Work type categories
const workTypes = [
  {
    id: 1,
    icon: <IoInfinite size="40" />,
    title: "DevOps",
    description:
      "I derive great satisfaction from the process of learning and employing automation to create both software and infrastructure",
  },
  {
    id: 2,
    icon: <TbCloudCode size="40" />,
    title: "Cloud Computing",
    description:
      "I've created numerous projects using cloud computing, primarily relying on AWS services",
  },
  {
    id: 3,
    icon: <HiOutlineCode size="40" />,
    title: "Software Engineering",
    description:
      "I've a strong passion for software development, utilizing various technology stacks to create high-quality solutions",
  },
];

// Latest blogs mock data
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

const Home: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.5 }} // Ensures animation triggers only once when visible
        className={styles.section}
      >
        <motion.div className={styles.intro}>
          {/* Ready to Innovate Button */}
          <motion.div
            className={styles.readyButtonContainer}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button type="button" className={styles.readyButton}>
              <div className={styles.readyButtonInner}>Ready to Innovate</div>
            </button>
          </motion.div>

          <HeroText
            heroText="Full Stack & DevOps Engineer"
            highlightedName={["Full", "Stack", "DevOps"]}
            subText="I specialize in building scalable web applications, mobile apps, and full-stack solutions tailored to your business needs."
            stylesProps={{
              heroText: styles.heroText,
              heroWord: styles.heroWord,
              nameHighlight: styles.nameHighlight,
              heroSubText: styles.heroSubText,
            }}
          />

          {/* Rounded Tags */}
          <motion.div
            className={styles.tagContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {tags.map((tag, index) => (
              <button key={index} type="button" className={styles.readyButton}>
                <div className={styles.readyButtonInner}>{tag}</div>
              </button>
            ))}
          </motion.div>

          {/* Projects and Contact Buttons */}
          <motion.div
            className={styles.buttonRow}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className={styles.button}>Projects</button>
            <button className={styles.button}>Contact</button>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className={styles.socialIcons}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {socialIcons.map((item, index) => (
              <Link key={index} href={item.url}>
                <button key={index} type="button" className={styles.iconButton}>
                  <div className={styles.iconButtonInner}>{item.icon}</div>
                </button>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <div className={styles.animation}>
          <img
            src="/dp.jpeg"
            alt="Dhanuka Rathnayake"
            className={styles.animatedImage}
          />
        </div>
      </motion.section>

      {/* Section 2: Hero Section - Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.5 }} // Ensures animation triggers only once when visible
        className={styles.section}
      >
        <div className={styles.intro}>
          <HeroText
            heroText="Hi, I am Dhanuka"
            highlightedName={["Dhanuka"]}
            subText="A passionate DevOps Engineer driving innovation in software and infrastructure automation. With over five years of experience, I’m here to bring your projects to life with cutting-edge technology."
            stylesProps={{
              heroText: styles.heroText,
              heroWord: styles.heroWord,
              nameHighlight: styles.nameHighlight,
              heroSubText: styles.heroSubText,
            }}
          />
        </div>
        <div className={styles.animation}>
          <img
            src="/dp.jpeg"
            alt="Dhanuka Rathnayake"
            className={styles.animatedImage}
          />
        </div>
      </motion.section>

      {/* Section 3: What I’m Doing */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.sectionCards}
      >
        <HeroText
          heroText="What I’m Doing"
          stylesProps={{
            heroText: styles.heroText,
            heroWord: styles.heroWord,
            nameHighlight: styles.nameHighlight,
            heroSubText: styles.heroSubText,
          }}
        />
        <div className={styles.cardsDiv}>
          {workTypes.map((item) => (
            <WorkTypeCard key={item.id} item={item} />
          ))}
        </div>
      </motion.section>

      {/* Section 4: Main Services */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.sectionCards}
      >
        <HeroText
          heroText="My main services"
          stylesProps={{
            heroText: styles.heroText,
            heroWord: styles.heroWord,
            nameHighlight: styles.nameHighlight,
            heroSubText: styles.heroSubText,
          }}
        />
        <div className={styles.cardsDiv}>
          {workTypes.map((item) => (
            <WorkTypeCard key={item.id} item={item} />
          ))}
        </div>
      </motion.section>

      {/* Section 5: Latest Blogs */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.section}
      >
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
      </motion.section>
    </div>
  );
};

export default Home;
