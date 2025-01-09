import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./index.module.css";

const TopNavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("/about");

  const handleClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <motion.div
      className={styles.navBar}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <Link href="/" className={styles.logo}>
        Portfolio
      </Link>

      {/* Navigation Links */}
      <nav className={styles.navLinks}>
        <Link
          href="/about"
          className={`${styles.navLink} ${
            activeLink === "/about" ? styles.activeNavLink : ""
          }`}
          onClick={() => handleClick("/about")}
        >
          About
        </Link>
        <Link
          href="/services"
          className={`${styles.navLink} ${
            activeLink === "/services" ? styles.activeNavLink : ""
          }`}
          onClick={() => handleClick("/services")}
        >
          Services
        </Link>
        <Link
          href="/blogs"
          className={`${styles.navLink} ${
            activeLink === "/blogs" ? styles.activeNavLink : ""
          }`}
          onClick={() => handleClick("/blogs")}
        >
          Blog
        </Link>
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
