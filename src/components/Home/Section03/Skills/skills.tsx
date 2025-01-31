import React from "react";
import { motion } from "framer-motion";

// Styles
import styles from "./index.module.css";

// Data
import { SkillsList } from "@/data/showcast";
import Link from "next/link";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.cardsContainer}
    >
      {SkillsList.map((skill, index) => (
        <Link
          key={index}
          href={skill.url}
          target="_blank"
          className={`${styles.card} primary-card`}
        >
          <div className={styles.icon}>{skill.icon}</div>
        </Link>
      ))}
    </motion.div>
  );
};

export default Skills;
