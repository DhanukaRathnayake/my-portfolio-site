import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "motion/react";
import {
  HeroText,
  Highlight,
} from "@/components/Common/TextGenerateEffects/HeroText";

// Styles
import styles from "./index.module.css";
import Image from "next/image";

const TopNavBar: React.FC = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>(router.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown

  useEffect(() => {
    setActiveLink(router.pathname); // Update activeLink when route changes
  }, [router.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const hamburgerMenu = document.querySelector(`.${styles.hamburgerMenu}`);
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !hamburgerMenu?.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavLinkClick = (path: string) => {
    setActiveLink(path); // Update activeLink on click
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
  };

  // Scroll to Contact Me section
  const scrollToContactSection = () => {
    if (router.pathname === "/") {
      // If on the home page, scroll to the Contact Me section
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on the home page, navigate to the home page and scroll to the Contact Me section
      router.push("/#contact-section").then(() => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <motion.div
      className={styles.navBar}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center cursor-pointer">
        <Image
          src={"/logo.png"}
          height={1} // Placeholder value
          width={1} // Placeholder value
          alt={`Logo`}
          className={styles.logo}
        />
      </Link>

      {/* Navigation Links and Contact Button */}
      <div ref={dropdownRef}>
        <nav
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
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

          {/* Contact Button in Mobile Dropdown */}
          <button
            className={`primary-button ${styles.mobileContactButton}`}
            onClick={scrollToContactSection}
          >
            Contact Me
          </button>
        </nav>
      </div>

      {/* Contact Button (Desktop) */}
      <button
        className={`primary-button ${styles.desktopContactButton}`}
        onClick={scrollToContactSection}
      >
        Contact
      </button>

      {/* Mobile Hamburger Menu */}
      <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
        <span
          className={`${styles.bar} ${isMobileMenuOpen ? styles.bar1 : ""}`}
        ></span>
        <span
          className={`${styles.bar} ${isMobileMenuOpen ? styles.bar2 : ""}`}
        ></span>
        <span
          className={`${styles.bar} ${isMobileMenuOpen ? styles.bar3 : ""}`}
        ></span>
      </div>
    </motion.div>
  );
};

export default TopNavBar;
