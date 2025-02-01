import React from "react";
import { motion } from "motion/react";
import { Vortex } from "./Vortex";
import { HeroText, Highlight } from "../Common/TextGenerateEffects/HeroText";
import styles from "./index.module.css";
import TextGenerateEffect from "../Common/TextGenerateEffects";
import { GoDotFill } from "react-icons/go";

const WelcomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className={styles.welcomePage}>
        {/* Motion background animation */}
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <motion.div
            className={styles.contentContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Hero text animation */}
            <HeroText>
              Welcome to my <Highlight>Portfolio</Highlight>
            </HeroText>

            <div className="mt-6 py-2 px-4 primary-card">
              <TextGenerateEffect
                words={"portfolio.tagzy.site"}
                duration={1.2}
              />
            </div>

            {/* Smooth Loading Dots Animation */}
            <div className="mt-8 flex">
              {[0, 0.2, 0.4].map((delay, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.3, y: 0 }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    y: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay,
                  }}
                >
                  <GoDotFill className={styles.loadingDot} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Vortex>
      </div>
    </div>
  );
};

export default WelcomePage;
