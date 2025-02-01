import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Styles
import styles from "./index.module.css";

// Components
import BlobBackground from "./BlobBackground";
import PageLoader from "../Common/Loaders/PageLoader";
import ProgressBar from "../Common/Loaders/ProgressBar";
import WelcomePage from "../Welcome";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";

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
        setTimeout(() => setShowWelcomePage(false), 7000);
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.layoutWrapper}>
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
            <motion.div className={styles.layoutContainer}>
              <BlobBackground />
              <div className={styles.topSection}>
                <TopNavBar />
                <ProgressBar />
              </div>
              <div className={styles.mainContent}>
                <main>{children}</main>
              </div>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default Layout;
