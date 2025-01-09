import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

import styles from "./index.module.css";

import LiquidBackground from "./background";
import HeroText from "../common/heroText";

const WelcomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className={styles.welcomePage}>
        {/* Motion background animation */}
        <LiquidBackground />

        {/* Hero text animation */}
        <div className={styles.middleDiv}>
          <HeroText
            heroText="Welcome to my Portfolio"
            highlightedName={["Portfolio"]}
            subText="portfolio.tagzy.site"
            stylesProps={{
              heroText: styles.heroText,
              heroWord: styles.heroWord,
              nameHighlight: styles.nameHighlight,
              heroSubText: styles.heroSubText,
            }}
          />

          {/* Motion div for loading dots animation */}
          <motion.div
            className={styles.loadingDots}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, repeat: Infinity, repeatType: "loop" },
            }}
          >
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            >
              .
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
