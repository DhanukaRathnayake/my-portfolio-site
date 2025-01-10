// Libraries
import React from "react";
import {
  AWS,
  // React,
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
} from "developer-icons"; // Make sure these icons exist in your package

// Styles
import styles from "./index.module.css";

// Skill data
const skills = [
  { id: 1, icon: <HTML5 size={50} />, name: "HTML" },
  { id: 2, icon: <CSS3 size={50} />, name: "CSS" },
  { id: 3, icon: <TailwindCSS size={50} />, name: "TailwindCSS" },
  { id: 4, icon: <JavaScript size={50} />, name: "JavaScript" },
  { id: 5, icon: <Java size={50} />, name: "Java" },
  // { id: 6, icon: <ReactJs size={50} />, name: "React" },
  { id: 7, icon: <Redux size={50} />, name: "Redux" },
  { id: 8, icon: <Flutter size={50} />, name: "Flutter" },
  { id: 9, icon: <NextJs size={50} />, name: "Next.js" },
  { id: 10, icon: <NestJS size={50} />, name: "Nest.js" },
  { id: 11, icon: <NodeJs size={50} />, name: "Node.js" },
  { id: 12, icon: <AWS size={50} />, name: "AWS" },
  // { id: 13, icon: <Terraform size={50} />, name: "Terraform" },
  { id: 14, icon: <Docker size={50} />, name: "Docker" },
  { id: 15, icon: <Kubernetes size={50} />, name: "Kubernetes" },
  { id: 16, icon: <GoogleCloud size={50} />, name: "GCP" },
  { id: 17, icon: <Python size={50} />, name: "Python" },
  { id: 18, icon: <GitHubDark size={50} />, name: "GitHub" },
  { id: 19, icon: <GitLab size={50} />, name: "GitLab" },
  // { id: 20, icon: <Jenkins size={50} />, name: "Jenkins" },
  { id: 21, icon: <MySQL size={50} />, name: "MySQL" },
  { id: 22, icon: <MongoDB size={50} />, name: "MongoDB" },
  { id: 23, icon: <Angular size={50} />, name: "Angular" },
  { id: 24, icon: <Linux size={50} />, name: "Linux" },
  { id: 25, icon: <Grafana size={50} />, name: "Grafana" },
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
