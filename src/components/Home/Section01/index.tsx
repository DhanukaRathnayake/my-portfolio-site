import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

// Components
import HeroText from "../../Common/HeroText";
import LottieAnimation from "./LottieAnimation";

// Styles
import styles from "./index.module.css"; // Renamed for clarity

// Data
const tags = ["AWS", "K8S", "Terraform", "NextJs", "NestJs"];
const socialIcons = [
  { name: "GitHub", url: "https://github.com/", icon: <FaGithub size="20" /> },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/",
    icon: <FaLinkedinIn size="20" />,
  },
  {
    name: "Upwork",
    url: "https://upwork.com/",
    icon: <SiUpwork size="20" />,
  },
  {
    name: "Fiverr",
    url: "https://fiverr.com/",
    icon: <TbBrandFiverr size="20" />,
  },
];

const Section01 = () => {
  return (
    <div className={styles.section}>
      <motion.div className={styles.intro}>
        {/* Ready to Innovate Button */}
        <motion.div
          className={styles.gradientTagContainer}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.gradientTag}>
            <div className={styles.gradientTagInner}>Ready to Innovate</div>
          </div>
        </motion.div>

        {/* Hero text section */}
        <HeroText
          heroText="Full Stack & DevOps Engineering"
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
            <div key={index} className={styles.gradientTag}>
              <div className={styles.gradientTagInner}>{tag}</div>
            </div>
          ))}
        </motion.div>

        {/* Projects and Contact Buttons */}
        <motion.div
          className={styles.buttonRow}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className={`${styles.button} primary-button`}>
            Services
          </button>
          <button className={`${styles.button} primary-button`}>
            Projects
          </button>
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

      {/* Animated Image */}
      <div className={styles.lottieSVG}>
        <LottieAnimation />
      </div>
    </div>
  );
};

export default Section01;
