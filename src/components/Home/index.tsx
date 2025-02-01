"use client";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
// Components
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
// Styles
import styles from "./index.module.css";

// Define a reusable AnimatedSection component
const AnimatedSection: React.FC<{
  id?: string;
  refProp: (node?: Element | null) => void;
  inView: boolean;
  children: React.ReactNode;
}> = ({ id, refProp, inView, children }) => {
  return (
    <motion.section
      id={id}
      ref={refProp}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${styles.section}`}
    >
      {inView && children}
    </motion.section>
  );
};

const Home: React.FC = () => {
  // Create refs and inView states for all sections
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
    <div className={`${styles.container}`}>
      {/* Section 1: Introduction */}
      <AnimatedSection refProp={section01Ref} inView={section01InView}>
        <Section01 />
      </AnimatedSection>

      {/* Section 2: About Me */}
      <AnimatedSection refProp={section02Ref} inView={section02InView}>
        <Section02 />
      </AnimatedSection>

      {/* Section 3: What I’m Doing */}
      <AnimatedSection refProp={section03Ref} inView={section03InView}>
        <Section03 />
      </AnimatedSection>

      {/* Section 4: Showcase Summary */}
      <AnimatedSection
        id="contact-section"
        refProp={section04Ref}
        inView={section04InView}
      >
        <Section04 />
      </AnimatedSection>
    </div>
  );
};

export default Home;
