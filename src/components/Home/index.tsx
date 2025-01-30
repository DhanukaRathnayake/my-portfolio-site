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

  const sections = [
    { ref: section01Ref, inView: section01InView, Component: Section01 },
    { ref: section02Ref, inView: section02InView, Component: Section02 },
    { ref: section03Ref, inView: section03InView, Component: Section03 },
    { ref: section04Ref, inView: section04InView, Component: Section04 },
  ];

  return (
    <div className={styles.container}>
      {sections.map((section, index) => (
        <motion.section
          key={index}
          ref={section.ref}
          initial={{ opacity: 0, y: 50 }}
          animate={section.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${styles.section} ${styles.snapSection}`}
        >
          {section.inView && <section.Component />}
        </motion.section>
      ))}
    </div>
  );
};

export default Home;
