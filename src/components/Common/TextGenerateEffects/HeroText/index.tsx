import React from "react";
import { motion } from "framer-motion";

import styles from "./index.module.css";

interface HeroSectionProps {
  heroText: string;
  highlightedName?: string[]; // Array of words to highlight
  stylesProps: {
    heroText: string;
    heroWord: string;
    nameHighlight: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroText,
  highlightedName,
  stylesProps,
}) => {
  // Function to split the text into an array of words and characters
  const splitText = (text: string, highlights?: string[]) => {
    const parts = text.split(" ");
    return parts.map((word, wordIndex) => {
      const isHighlighted =
        highlights && highlights.some((highlight) => word === highlight);

      return (
        <span key={wordIndex} className={stylesProps.heroWord}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className={`${styles.heroLetter} ${
                isHighlighted ? stylesProps.nameHighlight : ""
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% of the section is visible
              transition={{
                delay: wordIndex * 0.5 + charIndex * 0.1, // Progressive delay for letters
                duration: 0.1, // Speed of each character reveal
              }}
            >
              {char}
            </motion.span>
          ))}
          {/* Add space after word */}
          <motion.span
            key={`${wordIndex}-space`}
            className={styles.heroLetter}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: (wordIndex + 1) * 0.5, // Delay for space after the word
              duration: 0.1,
            }}
          >
            &nbsp;
          </motion.span>
        </span>
      );
    });
  };

  return (
    <div className={styles.heroSection}>
      {/* Motion h1 for hero text animation */}
      <motion.h1
        className={`${stylesProps.heroText}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {splitText(heroText, highlightedName)}
      </motion.h1>
    </div>
  );
};

export default HeroSection;
