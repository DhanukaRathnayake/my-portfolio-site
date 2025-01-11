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
  { id: 1, icon: <HTML5 size={50} />, name: "HTML" },
  { id: 2, icon: <CSS3 size={50} />, name: "CSS" },
  { id: 3, icon: <TailwindCSS size={50} />, name: "TailwindCSS" },
  { id: 4, icon: <JavaScript size={50} />, name: "JavaScript" },
  { id: 5, icon: <Java size={50} />, name: "Java" },
  { id: 6, icon: <Redux size={50} />, name: "Redux" },
  { id: 7, icon: <Flutter size={50} />, name: "Flutter" },
  { id: 8, icon: <NextJs size={50} />, name: "Next.js" },
  { id: 9, icon: <NestJS size={50} />, name: "Nest.js" },
  { id: 10, icon: <NodeJs size={50} />, name: "Node.js" },
  { id: 11, icon: <AWS size={50} />, name: "AWS" },
  { id: 12, icon: <Docker size={50} />, name: "Docker" },
  { id: 13, icon: <Kubernetes size={50} />, name: "Kubernetes" },
  { id: 14, icon: <GoogleCloud size={50} />, name: "GCP" },
  { id: 15, icon: <Python size={50} />, name: "Python" },
  { id: 16, icon: <GitHubDark size={50} />, name: "GitHub" },
  { id: 17, icon: <GitLab size={50} />, name: "GitLab" },
  { id: 18, icon: <MySQL size={50} />, name: "MySQL" },
  { id: 19, icon: <MongoDB size={50} />, name: "MongoDB" },
  { id: 20, icon: <Angular size={50} />, name: "Angular" },
  { id: 21, icon: <Linux size={50} />, name: "Linux" },
  { id: 22, icon: <Grafana size={50} />, name: "Grafana" },
];

const Skills = () => {
  return (
    <div className={styles.cardsContainer}>
      {skills.map((skill) => (
        <div key={skill.id} className={styles.card}>
          <div className={styles.icon}>{skill.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
