import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

// Components
import LottieAnimation from "./LottieAnimation";
import Tags from "@/components/Common/Tags";
import {
  HeroHighlight,
  Highlight,
} from "../../Common/TextGenerateEffects/HeroHighlight";
import TextGenerateEffect from "@/components/Common/TextGenerateEffects";

// Styles
import styles from "./index.module.css"; // Renamed for clarity
import { IconButton } from "@/components/Common/Buttons";

// Data
import { Info } from "../../../data/info";

const Section01 = () => {
  const router = useRouter();

  return (
    <div className={styles.section}>
      <motion.div className={styles.intro}>
        {/* Ready to Innovate Button */}
        <Tags tags={[Info.status]} />

        {/* Hero text section */}
        <HeroHighlight>
          <Highlight>Full Stack</Highlight> & <Highlight>DevOps</Highlight>{" "}
          Engineering
        </HeroHighlight>

        <TextGenerateEffect
          words={Info.sections.section01.description}
          duration={0.5}
        />

        {/* Rounded Tags */}
        <Tags tags={Info.tags} />

        {/* Projects and Contact Buttons */}
        <motion.div
          className={styles.buttonRow}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className={`${styles.button} primary-button`}>
            Services
          </button>
          <button className={`${styles.button} primary-button`}>
            Projects
          </button>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className={styles.socialIcons}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {Info.connections.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                content={item.icon}
                onClick={() => console.log(item.name)}
              />
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated Image */}
      <div className={styles.lottieSVG}>
        <LottieAnimation />
      </div>
    </div>
  );
};

export default Section01;
