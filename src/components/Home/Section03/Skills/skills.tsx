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
  Bootstrap5,
} from "developer-icons";

import { motion } from "framer-motion";

// Styles
import styles from "./index.module.css";

// Skill data with ordered complexity
const skills = [
  {
    id: 1,
    icon: <HTML5 className={styles.icon} />,
    name: "HTML",
    url: "https://www.w3schools.com/html/",
  },
  {
    id: 2,
    icon: <CSS3 className={styles.icon} />,
    name: "CSS",
    url: "https://www.w3schools.com/css/",
  },
  {
    id: 3,
    icon: <JavaScript className={styles.icon} />,
    name: "JavaScript",
    url: "https://www.javascript.com/",
  },
  {
    id: 4,
    icon: <Bootstrap5 className={styles.icon} />,
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
  },
  {
    id: 5,
    icon: <TailwindCSS className={styles.icon} />,
    name: "TailwindCSS",
    url: "https://tailwindcss.com/",
  },
  {
    id: 6,
    icon: <Java className={styles.icon} />,
    name: "Java",
    url: "https://www.oracle.com/java/",
  },
  {
    id: 7,
    icon: <Python className={styles.icon} />,
    name: "Python",
    url: "https://www.python.org/",
  },
  {
    id: 8,
    icon: <Redux className={styles.icon} />,
    name: "Redux",
    url: "https://redux.js.org/",
  },
  {
    id: 9,
    icon: <Angular className={styles.icon} />,
    name: "Angular",
    url: "https://angular.io/",
  },
  {
    id: 10,
    icon: <NextJs className={styles.icon} />,
    name: "Next.js",
    url: "https://nextjs.org/",
  },
  {
    id: 11,
    icon: <NestJS className={styles.icon} />,
    name: "Nest.js",
    url: "https://nestjs.com/",
  },
  {
    id: 12,
    icon: <NodeJs className={styles.icon} />,
    name: "Node.js",
    url: "https://nodejs.org/",
  },
  {
    id: 13,
    icon: <Flutter className={styles.icon} />,
    name: "Flutter",
    url: "https://flutter.dev/",
  },
  {
    id: 14,
    icon: <MySQL className={styles.icon} />,
    name: "MySQL",
    url: "https://www.mysql.com/",
  },
  {
    id: 15,
    icon: <MongoDB className={styles.icon} />,
    name: "MongoDB",
    url: "https://www.mongodb.com/",
  },
  {
    id: 17,
    icon: <img src={"/assets/redis.png"} alt="Redis" className={styles.icon} />,
    name: "Redis",
    url: "https://www.redis.io/",
  },
  {
    id: 18,
    icon: <Linux className={styles.icon} />,
    name: "Linux",
    url: "https://www.linuxfoundation.org/",
  },
  {
    id: 19,
    icon: <Docker className={styles.icon} />,
    name: "Docker",
    url: "https://www.docker.com/",
  },
  {
    id: 20,
    icon: <Kubernetes className={styles.icon} />,
    name: "Kubernetes",
    url: "https://kubernetes.io/",
  },
  {
    id: 21,
    icon: <AWS className={styles.icon} />,
    name: "AWS",
    url: "https://aws.amazon.com/",
  },
  {
    id: 22,
    icon: <GoogleCloud className={styles.icon} />,
    name: "GCP",
    url: "https://cloud.google.com/",
  },
  {
    id: 23,
    icon: (
      <img
        src={"/assets/terraform.png"}
        alt="Terraform"
        className={styles.icon}
      />
    ),
    name: "Terraform",
    url: "https://www.terraform.io/",
  },
  {
    id: 24,
    icon: <Grafana className={styles.icon} />,
    name: "Grafana",
    url: "https://grafana.com/",
  },
  {
    id: 26,
    icon: (
      <img src={"/assets/jenkins.png"} alt="Jenkins" className={styles.icon} />
    ),
    name: "Jenkins",
    url: "https://www.jenkins.io/",
  },
  {
    id: 27,
    icon: <GitHubDark className={styles.icon} />,
    name: "GitHub",
    url: "https://github.com/",
  },
  {
    id: 28,
    icon: <GitLab className={styles.icon} />,
    name: "GitLab",
    url: "https://gitlab.com/",
  },
  {
    id: 29,
    icon: (
      <img
        src={"/assets/firebase.png"}
        alt="Firebase"
        className={styles.icon}
      />
    ),
    name: "Firebase",
    url: "https://firebase.google.com/",
  },
];

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
      {skills.map((skill) => (
        <div
          key={skill.id}
          className={`${styles.card} primary-card`}
          onClick={() => handleClick(skill.url)}
        >
          <div>{skill.icon}</div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
