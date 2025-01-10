// Libraries
import React from "react";
import { motion } from "framer-motion";

// Components
import HeroText from "../../common/heroText";

// Styles
import styles from "./index.module.css";

// Data
const summary = [
  {
    id: 1,
    title: "10 Best Practices in DevOps",
    description:
      "Explore essential DevOps practices to streamline your workflow.",
    link: "/blog/devops-best-practices",
    icon: "/icons/devops.png",
  },
  {
    id: 2,
    title: "Cloud Computing in 2025",
    description: "Discover the latest trends in cloud computing.",
    link: "/blog/cloud-computing-2025",
    icon: "/icons/cloud.png",
  },
  {
    id: 3,
    title: "Building Scalable Web Apps",
    description: "A guide to creating high-performance web applications.",
    link: "/blog/scalable-web-apps",
    icon: "/icons/webapp.png",
  },
];

const Section02 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.titleWrapper}>
        <HeroText
          heroText="About Me"
          highlightedName={["About", "Me"]}
          subText="Transform ideas into digital experiences"
          stylesProps={{
            heroText: styles.heroText,
            heroWord: styles.heroWord,
            nameHighlight: styles.nameHighlight,
            heroSubText: styles.heroSubText,
          }}
        />
      </div>
      <div className={styles.detailsWrapper}>
        <div className={styles.introWrapper}>
          <HeroText
            heroText="Hello, I'm Dhanuka Rathnayake"
            highlightedName={["Dhanuka", "Rathnayake"]}
            subText="A passionate DevOps Engineer driving innovation in software and infrastructure automation. With over five years of experience, I’m here to bring your projects to life with cutting-edge technology."
            stylesProps={{
              heroText: styles.heroText,
              heroWord: styles.heroWord,
              nameHighlight: styles.nameHighlight,
              heroSubText: styles.heroSubText,
            }}
          />
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
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="/dp.jpeg"
            alt="Dhanuka Rathnayake"
            className={styles.profileImage}
          />
        </div>
      </div>
      <div className={styles.cardContainer}>
        {summary.map((item) => (
          <div key={item.id} className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
              <img src={item.icon} alt="icon" className={styles.cardIcon} />
              <span className={styles.cardNumber}>#{item.id}</span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
            <div className={styles.cardFooter}>
              <a href={item.link} className={styles.cardLink}>
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section02;
