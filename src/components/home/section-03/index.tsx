// Librares
import React, { useState } from "react";

// Components
import HeroText from "../../common/heroText";
import Blogs from "./blogs";
import Services from "./services/services";
import Skills from "./skills/skills";

// Styles
import styles from "./index.module.css";

const Section03 = () => {
  const [currentSection, setCurrentSection] = useState("blogs");

  const renderContent = () => {
    switch (currentSection) {
      case "blogs":
        return <Blogs />;
      case "services":
        return <Services />;
      case "skills":
        return <Skills />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.section}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <HeroText
          heroText="Portfolio Showcase"
          highlightedName={["Portfolio", "Showcase"]}
          subText="Explore my work, skills, and services crafted with cutting-edge technologies."
          stylesProps={{
            heroText: styles.heroText,
            heroWord: styles.heroWord,
            nameHighlight: styles.nameHighlight,
            heroSubText: styles.heroSubText,
          }}
        />
      </div>

      {/* Buttons Section */}
      <div className={styles.buttonsGroup}>
        <button
          className={`${styles.glassyButton} ${
            currentSection === "blogs" ? styles.active : ""
          }`}
          onClick={() => setCurrentSection("blogs")}
        >
          Blogs
        </button>
        <button
          className={`${styles.glassyButton} ${
            currentSection === "services" ? styles.active : ""
          }`}
          onClick={() => setCurrentSection("services")}
        >
          Services
        </button>
        <button
          className={`${styles.glassyButton} ${
            currentSection === "skills" ? styles.active : ""
          }`}
          onClick={() => setCurrentSection("skills")}
        >
          Skills
        </button>
      </div>

      {/* Cards Section */}
      <div className={styles.contentDiv}>{renderContent()}</div>
    </div>
  );
};

export default Section03;
