import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "motion/react";

// Components
import Tags from "@/components/Common/Tags";
import { HeroText, Highlight } from "../../Common/TextGenerateEffects/HeroText";
import TextGenerateEffect from "@/components/Common/TextGenerateEffects";
import GradientButton from "@/components/Common/Buttons/GradientButton";

// Styles
import styles from "./index.module.css"; // Renamed for clarity
import { IconButton } from "@/components/Common/Buttons/IconButton";

// Data
import { Info } from "../../../data/info";
import LottieAnimation from "./LottieAnimation";

const Section01 = () => {
  const router = useRouter();

  return (
    <div className={styles.section}>
      <motion.div className={styles.intro}>
        {/* Ready to Innovate Button */}
        <div className="mb-4">
          <GradientButton>{Info.status}</GradientButton>
        </div>

        {/* Hero text section */}
        <div className="mb-4">
          <HeroText className={styles.mainTitle}>
            Innovative <Highlight>Web </Highlight>&{" "}
            <Highlight>Mobile </Highlight>& <Highlight>Cloud </Highlight>
            Solutions
          </HeroText>
        </div>

        {/* Hero sub text */}
        <div className="mb-6">
          <TextGenerateEffect
            words={Info.sections.section01.description}
            duration={0.5}
          />
        </div>

        {/* Rounded Tags */}
        <div className="mb-6">
          <Tags tags={Info.tags} />
        </div>

        {/* Projects and Contact Buttons */}
        <motion.div
          className={`mb-8 ${styles.buttonRow}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            className={`${styles.button} primary-button`}
            onClick={() => router.push("/services")}
          >
            Services
          </button>
          <button
            className={`${styles.button} primary-button`}
            onClick={() => router.push("/blogs?category=Projects")}
          >
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
              <IconButton content={item.icon} onClick={() => {}} />
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Start slightly to the right and invisible
        animate={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
        transition={{
          duration: 0.5,
          delay: 0.6, // Smooth and slightly slower animation
        }}
        className={styles.lottieSVG}
      >
        {/* Adjust brightness and saturation */}
        <LottieAnimation />
      </motion.div>
    </div>
  );
};

export default Section01;
