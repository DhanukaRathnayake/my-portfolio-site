import React from "react";
import { motion } from "framer-motion";

// Styles
import styles from "./index.module.css";

// Data
import { SkillsList } from "../../../../data/showcast";

const Skills = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.cardsContainer}
    >
      {SkillsList.map((skill) => (
        <div
          key={skill.id}
          className={`${styles.card} primary-card`}
          onClick={() => handleClick(skill.url)}
        >
          <div className={styles.icon}>{skill.icon}</div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
