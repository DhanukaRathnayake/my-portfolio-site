import React from "react";
import styles from "./index.module.css";

const TopNavBar: React.FC = () => {
  return (
    <header className={styles.navBar}>
      {/* Logo */}
      <a href="/" className={styles.logo}>
        Dhanuka
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
    </header>
  );
};

export default TopNavBar;
