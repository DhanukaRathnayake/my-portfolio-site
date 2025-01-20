import React from "react";
import { motion } from "framer-motion";
import LiquidBackground from "./LiqudBackground";
import {
  HeroHighlight,
  Highlight,
} from "../Common/TextGenerateEffects/HeroHighlight";
import styles from "./index.module.css";
import TextGenerateEffect from "../Common/TextGenerateEffects";
import { GoDotFill } from "react-icons/go";

const WelcomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className={styles.welcomePage}>
        {/* Motion background animation */}
        <LiquidBackground />

        {/* Hero text animation */}
        <div className={styles.contentContainer}>
          <div className="mb-6">
            <HeroHighlight>
              Welcome to my <Highlight>Portfolio</Highlight>
            </HeroHighlight>
          </div>

          <div className="mb-8">
            <TextGenerateEffect words={"portfolio.tagzy.site"} duration={0.5} />
          </div>

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
      </div>
    </div>
  );
};

export default WelcomePage;
