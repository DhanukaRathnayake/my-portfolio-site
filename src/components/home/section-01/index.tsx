// Libraries
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

// Components
import HeroText from "../../common/heroText";

// Styles
import styles from "./index.module.css";

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

const Section01 = () => {
  return (
    <div className={styles.section}>
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

        {/* Hero text section */}
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
          <button className={styles.button}>About Me</button>
          <button className={styles.button}>Download CV</button>
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

      {/* Animated Image*/}
      <div className={styles.animation}>
        <img
          src="/dp.jpeg"
          alt="Dhanuka Rathnayake"
          className={styles.animatedImage}
        />
      </div>
    </div>
  );
};

export default Section01;
