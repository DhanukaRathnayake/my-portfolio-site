import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

import Link from "next/link";

// Components
import { GlareCard } from "../../Common/GloreCard";
import {
  HeroHighlight,
  Highlight,
} from "../../Common/TextGenerateEffects/HeroHighlight";
import TextGenerateEffect from "@/components/Common/TextGenerateEffects";

// Styles
import styles from "./index.module.css"; // Renamed for clarity
import Image from "next/image";

// Data
import { Info } from "../../../data/info";

const Section02 = () => {
  return (
    <div className={styles.section}>
      <div className={`mb-6 ${styles.detailsWrapper}`}>
        <div className={styles.introWrapper}>
          {/* Hero section */}
          <div className="mb-4">
            <HeroHighlight>
              Hello, I&apos;m <Highlight>{`${Info.firstName}`}</Highlight>
            </HeroHighlight>
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
            <button className={`${styles.button} primary-button`}>
              Download CV
            </button>
            <button className={`${styles.button} primary-button`}>
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

      <div className={styles.cardContainer}>
        {Info.summaryCounts.map((item) => (
          <div key={item.id} className={`${styles.cardWrapper} primary-card`}>
            <div className={`mb-2 ${styles.cardHeader}`}>
              {item.icon}
              <span className={styles.cardNumber}>{item.count}</span>
            </div>
            <div className={styles.cardBody}>
              <div>
                <h3 className={`mb-2 ${styles.cardTitle}`}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
              <Link href={item.link} className={styles.cardLink}>
                <MdArrowOutward size={"20px"} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section02;
