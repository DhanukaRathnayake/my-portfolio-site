import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Show progress bar initially

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position as a percentage of the total scrollable height
      const scrollPosition = document.documentElement.scrollTop;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPosition / totalHeight) * 100;

      // Update progress bar
      setProgress(scrollProgress);
    };

    // Listen for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <motion.div
        className={styles.progressBarContainer}
        initial={{ width: 0, opacity: 1 }}
        animate={{
          width: `${progress}%`, // Update width based on scroll progress
          opacity: progress === 100 ? 0 : 1, // Fade out when fully scrolled
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          visibility: progress === 100 ? "hidden" : "visible", // Hide after full scroll
        }}
      >
        <motion.div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        />
      </motion.div>
    )
  );
};

export default ScrollProgressBar;
