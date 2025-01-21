import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Styles
import styles from "./index.module.css";

// Components
import BlobBackground from "./BlobBackground";
import PageLoader from "../Common/Loaders/pageLoader";
import ProgressBar from "../Common/Loaders/ProgressBar";
import WelcomePage from "../Welcome";
import TopNavBar from "./TopNavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showWelcomePage, setShowWelcomePage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

    setTimeout(() => {
      if (!lastVisit || now - parseInt(lastVisit) > oneWeek) {
        setShowWelcomePage(true);
        localStorage.setItem("lastVisit", now.toString());
        setTimeout(() => setShowWelcomePage(false), 6000);
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.layoutContainer}>
      {isLoading ? (
        <PageLoader />
      ) : (
        <AnimatePresence mode="wait">
          {showWelcomePage ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <WelcomePage />
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
              <BlobBackground />
              <div className={styles.topSection}>
                <TopNavBar />
                <ProgressBar />
              </div>
              <div className={styles.mainContent}>
                <main>{children}</main>
              </div>
              <div className={styles.footer}></div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default Layout;
