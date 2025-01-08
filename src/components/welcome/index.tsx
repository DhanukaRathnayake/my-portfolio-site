import React from "react";

import styles from "./index.module.css";

import LiquidBackground from "./background";
import HeroSection from "./heroText";

const WelcomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className={styles.welcomePage}>
        <LiquidBackground />
        <HeroSection />
      </div>
    </div>
  );
};

export default WelcomePage;
