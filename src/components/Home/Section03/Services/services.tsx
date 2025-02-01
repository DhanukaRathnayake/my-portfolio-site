import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/router";

// Styles
import styles from "./index.module.css";

// Data
import { MainServices } from "../../../../data/showcast";

const Services = () => {
  const router = useRouter();

  return (
    <motion.div
      className={styles.mainContainer} // Container for all cards
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
      {MainServices.map((service) => (
        <motion.div
          key={service.id}
          className={`${styles.cardContainer} primary-card cursor-pointer`}
          onClick={() => router.push(service.url)}
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
          <div className={styles.imageContainer}>
            <Image
              src={service.coverImageUrl}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{service.title}</h2>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Services;
