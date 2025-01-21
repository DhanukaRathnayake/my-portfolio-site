import React, { useState } from "react";
import { motion } from "framer-motion";

// Components
import { HeroText, Highlight } from "../../Common/TextGenerateEffects/HeroText";
import TextGenerateEffect from "@/components/Common/TextGenerateEffects";
import Blogs from "./Blogs";
import Services from "./Services/services";
import Skills from "./Skills/skills";

// Styles
import styles from "./index.module.css"; // Renamed for clarity

// Data
import { Info } from "../../../data/info";

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
      <div className={styles.intro}>
        <div className="mb-2">
          <HeroText>
            <Highlight>Portfolio</Highlight> ShowCast
          </HeroText>
        </div>

        <div className="mb-4">
          <TextGenerateEffect
            words={Info.sections.section03.description}
            duration={0.5}
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className={`mb-4 ${styles.buttonsGroup}`}>
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
