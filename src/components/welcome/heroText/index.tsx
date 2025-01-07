import React from "react";
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
              <span
                key={i}
                className={styles.heroLetter}
                style={{ animationDelay: `${(i + index * 5) * 0.1}s` }}
              >
                <span className={styles.nameHighlight}>{char}</span>
              </span>
            ))}
          </span>
        );
      }

      return (
        <span key={index} className={styles.heroWord}>
          {word.split("").map((char, i) => (
            <span
              key={i}
              className={styles.heroLetter}
              style={{ animationDelay: `${(i + index * 5) * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </span>
      );
    });
  };

  return (
    <div className={styles.heroSection}>
      <h1 className={`${styles.heroText} ${styles.fadeInEffect}`}>
        {splitText(heroText, highlightedName)}
      </h1>
      <p className={`${styles.heroSubText} ${styles.fadeInEffect}`}>
        {splitText(subText)}
      </p>
      <div className={styles.loadingDots}>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default HeroSection;
