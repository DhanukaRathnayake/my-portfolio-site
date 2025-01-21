import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// Styles
import styles from "./index.module.css";
import BlobBackground from "./BlobBackground";
import ProgressBar from "../Common/Loaders/ProgressBar";
import PageLoader from "../Common/Loaders/pageLoader";

// Dynamically imported components
const TopNavBar = dynamic(() => import("./TopNavBar"));
const WelcomePage = dynamic(() => import("../Welcome"));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showWelcomePage, setShowWelcomePage] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

    // Simulate a delay for checking the visit status
    setTimeout(() => {
      if (!lastVisit || now - parseInt(lastVisit) > oneWeek) {
        setShowWelcomePage(true);
        localStorage.setItem("lastVisit", now.toString());
      } else {
        setShowWelcomePage(false);
      }
      setIsLoading(false);
    }, 100);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className={styles.layoutContainer}>
      <AnimatePresence>
        {showWelcomePage ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 6 }}
            onAnimationComplete={() => setShowWelcomePage(false)}
          >
            <WelcomePage />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <BlobBackground />

            {/* Top Navigation and Progress Bar */}
            <div className={styles.topSection}>
              <TopNavBar />
              <ProgressBar />
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
              <main>{children}</main>
            </div>

            {/* Footer */}
            <div className={styles.footer}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
