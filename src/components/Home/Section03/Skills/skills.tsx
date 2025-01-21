import React from "react";
import {
  AWS,
  Redux,
  NestJS,
  NextJs,
  NodeJs,
  Flutter,
  Docker,
  Kubernetes,
  GoogleCloud,
  Python,
  GitHubDark,
  GitLab,
  MySQL,
  MongoDB,
  Angular,
  Linux,
  Grafana,
  JavaScript,
  Java,
  HTML5,
  CSS3,
  TailwindCSS,
} from "developer-icons"; // Ensure these icons exist in your package

// Styles
import styles from "./index.module.css"; // Renamed for clarity

// Skill data
const skills = [
  { id: 1, icon: <HTML5 className={styles.icon} />, name: "HTML" },
  { id: 2, icon: <CSS3 className={styles.icon} />, name: "CSS" },
  { id: 3, icon: <TailwindCSS className={styles.icon} />, name: "TailwindCSS" },
  { id: 4, icon: <JavaScript className={styles.icon} />, name: "JavaScript" },
  { id: 5, icon: <Java className={styles.icon} />, name: "Java" },
  { id: 6, icon: <Redux className={styles.icon} />, name: "Redux" },
  { id: 7, icon: <Flutter className={styles.icon} />, name: "Flutter" },
  { id: 8, icon: <NextJs className={styles.icon} />, name: "Next.js" },
  { id: 9, icon: <NestJS className={styles.icon} />, name: "Nest.js" },
  { id: 10, icon: <NodeJs className={styles.icon} />, name: "Node.js" },
  { id: 11, icon: <AWS className={styles.icon} />, name: "AWS" },
  { id: 12, icon: <Docker className={styles.icon} />, name: "Docker" },
  { id: 13, icon: <Kubernetes className={styles.icon} />, name: "Kubernetes" },
  { id: 14, icon: <GoogleCloud className={styles.icon} />, name: "GCP" },
  { id: 15, icon: <Python className={styles.icon} />, name: "Python" },
  { id: 16, icon: <GitHubDark className={styles.icon} />, name: "GitHub" },
  { id: 17, icon: <GitLab className={styles.icon} />, name: "GitLab" },
  { id: 18, icon: <MySQL className={styles.icon} />, name: "MySQL" },
  { id: 19, icon: <MongoDB className={styles.icon} />, name: "MongoDB" },
  { id: 20, icon: <Angular className={styles.icon} />, name: "Angular" },
  { id: 21, icon: <Linux className={styles.icon} />, name: "Linux" },
  { id: 22, icon: <Grafana className={styles.icon} />, name: "Grafana" },
];

const Skills = () => {
  return (
    <div className={styles.cardsContainer}>
      {skills.map((skill) => (
        <div key={skill.id} className={`${styles.card} primary-card`}>
          <div>{skill.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
