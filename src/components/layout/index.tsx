// Libraries
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// Styles
import styles from "./index.module.css";
import BlobBackground from "./background";
import LoadingProgressBar from "../common/loaders/loadingProgressBar";

// Components
const TopNavBar = dynamic(() => import("./top-navigation-bar"));
const WelcomePage = dynamic(() => import("../welcome"));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  // Fade out the WelcomePage after a certain duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePage(false);
    }, 7000); // 3 seconds delay for the welcome page to fade out
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className={styles.mainDiv}>
      {/* Animate Presence for Welcome Page */}
      <AnimatePresence>
        {showWelcomePage ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 6 }}
          >
            <WelcomePage />
          </motion.div>
        ) : (
          <motion.div>
            <BlobBackground />

            {/* Top Nav Bar */}
            <div className={styles.topDiv}>
              <TopNavBar />
              <LoadingProgressBar />
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
