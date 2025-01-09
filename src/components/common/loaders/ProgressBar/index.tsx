import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  // Page load progress handler using Next.js router
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      setIsVisible(true); // Show the progress bar when navigation starts
    };

    const handleComplete = () => {
      setProgress(100); // Set progress to 100 when loading is complete
      setTimeout(() => {
        setLoading(false);
        setProgress(0); // Reset progress after some time
        setIsVisible(false); // Hide the progress bar after 300ms
      }, 300); // Delay to allow for smooth disappearing transition
    };

    // Next.js router events
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  // Simulate loading progress during navigation
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 95) {
            return prev + Math.random() * 5; // Simulate random progress
          }
          return 95; // Cap progress at 95%
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    isVisible && (
      <motion.div
        className={styles.progressBarContainer}
        initial={{ width: 0, opacity: 1 }}
        animate={{
          width: `${progress}%`, // Update width based on load progress
          opacity: progress === 100 ? 0 : 1, // Fade out when fully loaded
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        style={{
          visibility: progress === 100 ? "hidden" : "visible", // Hide when progress reaches 100%
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

export default ProgressBar;
