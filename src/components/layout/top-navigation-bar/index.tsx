import React from "react";
import { motion } from "framer-motion";

import styles from "./index.module.css";

const TopNavBar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={styles.navBar}
    >
      {/* Logo */}
      <a href="/" className={styles.logo}>
        Portfolio
      </a>

      {/* Navigation Links */}
      <nav className={styles.navLinks}>
        <a href="#about" className={styles.navLink}>
          About
        </a>
        <a href="#home" className={styles.navLink}>
          Blog
        </a>
        <a href="#services" className={styles.navLink}>
          Services
        </a>
      </nav>

      <button className={styles.downloadBtn}>Contact</button>

      {/* Mobile Hamburger Menu */}
      <div className={styles.hamburgerMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </motion.div>
  );
};

export default TopNavBar;
