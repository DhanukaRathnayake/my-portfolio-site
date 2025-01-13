import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import Link from "next/link";

// Components
import HeroText from "../../Common/HeroText";

// Styles
import styles from "./index.module.css"; // Renamed for clarity

// Data
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

const Section04 = () => {
  return (
    <div className={styles.section}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <HeroText
          heroText="Contact Me"
          highlightedName={["Me"]}
          subText="Great service for lifetime"
          stylesProps={{
            heroText: styles.heroText,
            heroWord: styles.heroWord,
            nameHighlight: styles.nameHighlight,
            heroSubText: styles.heroSubText,
          }}
        />
      </div>

      <div className={styles.intro}>
        <form className={`${styles.contactForm} primary-card`}>
          <h2 className={styles.formTitle}>Get In Touch</h2>
          <input
            type="name"
            placeholder="Your Name"
            className={styles.inputField}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.inputField}
          />
          <textarea
            placeholder="Your Message"
            className={styles.textArea}
          ></textarea>
          <button
            type="submit"
            className={`${styles.submitButton} primary-button`}
          >
            Send Message
          </button>

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
        </form>
      </div>
    </div>
  );
};

export default Section04;
