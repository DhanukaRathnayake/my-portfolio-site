import React from "react";
import { motion } from "framer-motion";

// Components
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";

// Styles
import styles from "./index.module.css"; // Renamed for clarity

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Section 1: Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.5 }}
        className={styles.section}
      >
        <Section01 />
      </motion.section>

      {/* Section 2: About Me */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.5 }}
        className={styles.section}
      >
        <Section02 />
      </motion.section>

      {/* Section 3: What I’m Doing */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.sectionCards}
      >
        <Section03 />
      </motion.section>

      {/* Section 4: Showcase Summary */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.sectionCards}
      >
        <Section04 />
      </motion.section>
    </div>
  );
};

export default Home;
