import React from "react";
import { IoInfinite } from "react-icons/io5";
import { TbCloudCode } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";
import { motion } from "framer-motion";

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
    <motion.div
      className={styles.cardsContainer} // Container for all cards
      initial="hidden" // Initial state for the container
      animate="visible" // Animate to this state
      variants={{
        hidden: { opacity: 0 }, // Hidden state for the container
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2, // Stagger the animation of each child
          },
        },
      }}
    >
      {services.map((service) => (
        <motion.div
          key={service.id}
          className={`${styles.card} primary-card`}
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 20 }, // Initial state for each card
            visible: { opacity: 1, scale: 1, y: 0 }, // Animated state for each card
          }}
          transition={{
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for smooth motion
            type: "spring", // Spring animation for bounce
            stiffness: 100, // Adjust stiffness for spring
            damping: 10, // Adjust damping for spring
          }}
        >
          <div className={styles.icon}>{service.icon}</div>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDescription}>{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Services;
