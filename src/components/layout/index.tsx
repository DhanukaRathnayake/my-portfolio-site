import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// Styles
import styles from "./index.module.css";
import BlobBackground from "./background";
import ProgressBar from "../common/loaders/ProgressBar";
import PageLoader from "../common/loaders/pageLoader";

// Components
const TopNavBar = dynamic(() => import("./top-navigation-bar"));
const WelcomePage = dynamic(() => import("../welcome"));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showWelcomePage, setShowWelcomePage] = useState<boolean>(true); // null means checking
  const [loading, setLoading] = useState(true); // To manage loading state

  useEffect(() => {
    // Check if there's a previous visit timestamp in localStorage
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
      setLoading(false);
    }, 100);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className={styles.mainDiv}>
      <AnimatePresence>
        {showWelcomePage ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 6 }}
            onAnimationComplete={() => setShowWelcomePage(false)} // Once animation is complete, hide the welcome page
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

            {/* Top Nav Bar */}
            <div className={styles.topDiv}>
              <TopNavBar />
              <ProgressBar />
            </div>

            {/* Main Div */}
            <div className={styles.middleDiv}>
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
