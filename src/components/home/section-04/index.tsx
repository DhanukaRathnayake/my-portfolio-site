// Libraries
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

// Components
import HeroText from "../../common/heroText";

// Styles
import styles from "./index.module.css";
import Link from "next/link";

// Data
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
        <form className={styles.contactForm}>
          <text className={styles.formTitle}>Get In Touch</text>
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
          <button type="submit" className={styles.submitButton}>
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
