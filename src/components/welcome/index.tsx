import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import LiquidBackground from "./background";
import HeroSection from "./heroText";

const WelcomePage: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isWelcomePageVisible, setIsWelcomePageVisible] = useState(true);

  // Effect to start the animation after the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);

      // Hide horizontal scrollbar when animation starts
      document.body.style.overflowX = "hidden";
    }, 6000); // Delay animation start (0.1s after mount)

    return () => clearTimeout(timer);
  }, []);

  // Effect to hide the page after animation ends
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsWelcomePageVisible(false);

        // Restore horizontal scrollbar after animation ends
        document.body.style.overflowX = "auto";
      }, 6000); // After 2s (animation duration)
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="overflow-hidden">
      {isWelcomePageVisible && (
        <div
          className={`${styles.welcomePage} ${
            isAnimating ? styles.welcomePageAnimated : ""
          }`}
        >
          <LiquidBackground />
          <HeroSection />
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
