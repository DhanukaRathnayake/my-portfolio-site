import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

// Styles
import styles from "./index.module.css";

const TopNavBar: React.FC = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>(router.pathname);

  useEffect(() => {
    setActiveLink(router.pathname); // Update activeLink when route changes
  }, [router.pathname]);

  const handleNavLinkClick = (path: string) => {
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
          onClick={() => handleNavLinkClick("/about")}
        >
          About
        </Link>
        <Link
          href="/services"
          className={`${styles.navLink} ${
            activeLink === "/services" ? styles.activeNavLink : ""
          }`}
          onClick={() => handleNavLinkClick("/services")}
        >
          Services
        </Link>
        <Link
          href="/blogs"
          className={`${styles.navLink} ${
            activeLink === "/blogs" ? styles.activeNavLink : ""
          }`}
          onClick={() => handleNavLinkClick("/blogs")}
        >
          Blog
        </Link>
      </nav>

      {/* Contact Button */}
      <button className={styles.contactButton}>Contact</button>

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
