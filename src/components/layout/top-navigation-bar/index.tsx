import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { useRouter } from "next/router";

const TopNavBar: React.FC = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>(router.pathname);

  useEffect(() => {
    setActiveLink(router.pathname); // Update activeLink when route changes
  }, [router.pathname]);

  const handleClick = (path: string) => {
    setActiveLink(path); // Update activeLink on click
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
