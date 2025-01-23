import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

import Link from "next/link";

// Components
import { GlareCard } from "../../Common/GloreCard";
import { HeroText, Highlight } from "../../Common/TextGenerateEffects/HeroText";
import TextGenerateEffect from "@/components/Common/TextGenerateEffects";

// Styles
import styles from "./index.module.css"; // Renamed for clarity
import Image from "next/image";

// Data
import { Info } from "../../../data/info";
import { useRouter } from "next/router";

const Section02 = () => {
  const router = useRouter();

  return (
    <div className={styles.section}>
      <div className={`mb-6 ${styles.detailsWrapper}`}>
        <div className={styles.introWrapper}>
          {/* Hero section */}
          <div className="mb-4">
            <HeroText>
              Hello, I&apos;m <Highlight>{`${Info.firstName}`}</Highlight>
            </HeroText>
          </div>

          {/* Hero sub text */}
          <div className="mb-6">
            <TextGenerateEffect
              words={Info.sections.section02.description}
              duration={0.5}
            />
          </div>

          {/* Projects and Contact Buttons */}
          <motion.div
            className={`mb-6 ${styles.buttonRow}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              className={`${styles.button} flex justify-center primary-button`}
              href={Info.cv}
              target="_blank"
            >
              Download CV
            </Link>
            <button
              className={`${styles.button} primary-button`}
              onClick={() => router.push(`/about`)}
            >
              About Me
            </button>
          </motion.div>
        </div>

        <div className={styles.imageWrapper}>
          <GlareCard>
            <Image
              src={Info.profilePicture}
              height={1} // Placeholder value
              width={1} // Placeholder value
              alt={`${Info.firstName} ${Info.lastName}`}
              className={styles.profileImage}
            />
          </GlareCard>
        </div>
      </div>

      <motion.div
        className={styles.cardContainer} // Container for all cards
        initial="hidden" // Initial state for the container
        animate="visible" // Animate to this state
        variants={{
          hidden: { opacity: 0 }, // Hidden state for the container
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Stagger the animation of each child by 0.2s
            },
          },
        }}
      >
        {Info.summaryCounts.map((item) => (
          <motion.div
            key={item.id}
            className={`${styles.cardWrapper} primary-card`}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 10 }, // Initial state for each card
              visible: { opacity: 1, scale: 1, y: 0 }, // Animated state for each card
            }}
            transition={{
              duration: 0.5,
              ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for smooth motion
              type: "spring", // Spring animation for bounce
              stiffness: 120, // Adjust stiffness for spring
              damping: 12, // Adjust damping for spring
            }}
          >
            <div className={`mb-2 ${styles.cardHeader}`}>
              {item.icon}
              <span className={styles.cardNumber}>{item.count}</span>
            </div>
            <div className={styles.cardBody}>
              <div>
                <h3 className={`mb-2 ${styles.cardTitle}`}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
              <div
                onClick={() => router.push(`${item.link}`)}
                className={styles.cardLink}
              >
                <MdArrowOutward size={"20px"} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Section02;
