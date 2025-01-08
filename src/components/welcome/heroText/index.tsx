import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import styles from "./index.module.css";

const HeroSection: React.FC = () => {
  const heroText = "Welcome to my Portfolio"; // Full hero text
  const highlightedName = "Portfolio"; // The name to highlight
  const subText = "portfolio.tagzy.site"; // Sub text

  // Function to split the text into an array of words and characters
  const splitText = (text: string, highlight?: string) => {
    const parts = text.split(" ");
    return parts.map((word, index) => {
      // Check if the word is the highlighted name
      if (highlight && word === highlight) {
        return (
          <span key={index} className={styles.heroWord}>
            {word.split("").map((char, i) => (
              <motion.span
                key={i}
                className={styles.heroLetter}
                style={{ animationDelay: `${(i + index * 5) * 0.1}s` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: (i + index * 5) * 0.1, duration: 0.3 },
                }}
              >
                <span className={styles.nameHighlight}>{char}</span>
              </motion.span>
            ))}
          </span>
        );
      }

      return (
        <span key={index} className={styles.heroWord}>
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              className={styles.heroLetter}
              style={{ animationDelay: `${(i + index * 5) * 0.1}s` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: (i + index * 5) * 0.1, duration: 0.3 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      );
    });
  };

  return (
    <div className={styles.heroSection}>
      {/* Motion h1 for hero text animation */}
      <motion.h1
        className={`${styles.heroText} ${styles.fadeInEffect}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {splitText(heroText, highlightedName)}
      </motion.h1>

      {/* Motion p for sub text animation */}
      <motion.p
        className={`${styles.heroSubText} ${styles.fadeInEffect}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
      >
        {splitText(subText)}
      </motion.p>

      {/* Motion div for loading dots animation */}
      <motion.div
        className={styles.loadingDots}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, repeat: Infinity, repeatType: "loop" },
        }}
      >
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        >
          .
        </motion.span>
      </motion.div>
    </div>
  );
};

export default HeroSection;
