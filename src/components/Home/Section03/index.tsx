import React, { useState } from "react";

// Components
import HeroText from "../../Common/TextGenerateEffects/HeroText";
import TextGenerateEffect from "@/components/Common/TextGenerateEffects";
import Blogs from "./Blogs";
import Services from "./Services/services";
import Skills from "./Skills/skills";

// Styles
import styles from "./index.module.css"; // Renamed for clarity

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
          stylesProps={{
            heroText: styles.heroText,
            heroWord: styles.heroWord,
            nameHighlight: styles.nameHighlight,
          }}
        />

        <TextGenerateEffect
          words={
            "Explore my work, skills, and services crafted with cutting-edge technologies."
          }
          className={styles.heroSubText}
          duration={0.5}
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
