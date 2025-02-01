import React from "react";
import { motion } from "motion/react";
import { GoDotFill } from "react-icons/go";

import styles from "./index.module.css";

const PageLoader: React.FC = () => {
  return (
    <div className={styles.loadingOverlay}>
      {/* Motion div for loading dots animation */}
      <motion.div
        className={`flex`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, repeat: Infinity, repeatType: "loop" },
        }}
      >
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          <GoDotFill className={styles.loadingDot} />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        >
          <GoDotFill className={styles.loadingDot} />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        >
          <GoDotFill className={styles.loadingDot} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageLoader;
