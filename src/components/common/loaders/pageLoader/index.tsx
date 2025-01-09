import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

import styles from "./index.module.css";

const PageLoader: React.FC = () => {
  return (
    <div className={styles.loadingOverlay}>
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
  );
};

export default PageLoader;
