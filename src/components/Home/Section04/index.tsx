import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Components
import {
  HeroHighlight,
  Highlight,
} from "../../Common/TextGenerateEffects/HeroHighlight";
import TextGenerateEffect from "@/components/Common/TextGenerateEffects";
import { IconButton } from "@/components/Common/Buttons/IconButton";

// Styles
import styles from "./index.module.css"; // Renamed for clarity

// Data
import { Info } from "../../../data/info";

const Section04 = () => {
  return (
    <div className={styles.section}>
      {/* Hero Section */}
      <div className={styles.intro}>
        <HeroHighlight>
          Contact <Highlight>Me</Highlight>
        </HeroHighlight>

        <TextGenerateEffect
          words={Info.sections.section04.description}
          duration={0.5}
        />
      </div>

      <form className={`${styles.contactForm} primary-card`}>
        <h2 className={styles.formTitle}>Get In Touch</h2>
        <input
          type="name"
          placeholder="Your Name"
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={styles.inputField}
        />
        <textarea
          placeholder="Your Message"
          className={styles.textArea}
        ></textarea>
        <button
          type="submit"
          className={`${styles.submitButton} primary-button`}
        >
          Send Message
        </button>

        {/* Social Media Icons */}
        <motion.div
          className={styles.socialIcons}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {Info.connections.map((item, index) => (
            <Link key={index} href={item.url}>
              <IconButton
                key={index}
                content={item.icon}
                onClick={() => console.log(item.name)}
              />
            </Link>
          ))}
        </motion.div>
      </form>
    </div>
  );
};

export default Section04;
