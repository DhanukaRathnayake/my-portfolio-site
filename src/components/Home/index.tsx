"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Components
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";

// Styles
import styles from "./index.module.css";

const Home: React.FC = () => {
  const [section01Ref, section01InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [section02Ref, section02InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [section03Ref, section03InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [section04Ref, section04InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className={styles.container}>
      {/* Section 1: Introduction */}
      <motion.section
        ref={section01Ref}
        initial={{ opacity: 0 }}
        animate={section01InView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${styles.section} ${styles.snapSection}`}
      >
        {section01InView && <Section01 />}
      </motion.section>

      {/* Section 2: About Me */}
      <motion.section
        ref={section02Ref}
        initial={{ opacity: 0 }}
        animate={section02InView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${styles.section} ${styles.snapSection}`}
      >
        {section02InView && <Section02 />}
      </motion.section>

      {/* Section 3: What I’m Doing */}
      <motion.section
        ref={section03Ref}
        initial={{ opacity: 0 }}
        animate={section03InView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${styles.section} ${styles.snapSection}`}
      >
        {section03InView && <Section03 />}
      </motion.section>

      {/* Section 4: Showcase Summary */}
      <motion.section
        ref={section04Ref}
        id="contact-section"
        initial={{ opacity: 0 }}
        animate={section04InView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${styles.section} ${styles.snapSection}`}
      >
        {section04InView && <Section04 />}
      </motion.section>
    </div>
  );
};

export default Home;
