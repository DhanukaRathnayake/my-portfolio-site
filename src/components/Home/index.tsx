"use client";

import React from "react";

// Components
// import useSmoothScroll from "../Common/Scroll/SmoothScroll";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";

// Framer Motion
// import { motion, useScroll, useSpring } from "framer-motion";

// Styles
import styles from "./index.module.css";

const Home: React.FC = () => {
  return (
    <div>
      {/* Section 1: Introduction */}
      <section className={`${styles.section}`}>
        <Section01 />
      </section>

      {/* Section 2: About Me */}
      <section className={`${styles.section}`}>
        <Section02 />
      </section>

      {/* Section 3: What I’m Doing */}
      <section className={`${styles.section}`}>
        <Section03 />
      </section>

      {/* Section 4: Showcase Summary */}
      <section id="contact-section" className={`${styles.section}`}>
        <Section04 />
      </section>
    </div>
  );
};

export default Home;
