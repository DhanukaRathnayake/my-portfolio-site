import React from "react";
import { IoInfinite } from "react-icons/io5";
import { TbCloudCode } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";

// Styles
import styles from "./index.module.css"; // Renamed for clarity

const services = [
  {
    id: 1,
    title: "DevOps Consulting",
    description: "Automate your workflows.",
    icon: <IoInfinite className={styles.icon} />,
  },
  {
    id: 2,
    title: "Cloud Architecting",
    description: "Leverage cloud solutions.",
    icon: <TbCloudCode className={styles.icon} />,
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "End-to-end solutions.",
    icon: <HiOutlineCode className={styles.icon} />,
  },
];

const Services = () => {
  return (
    <div className={styles.cardsContainer}>
      {services.map((service) => (
        <div key={service.id} className={`${styles.card} primary-card`}>
          <div className={styles.icon}>{service.icon}</div>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDescription}>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
