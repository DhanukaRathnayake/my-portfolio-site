// Libraries
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptop } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

// Components
import HeroText from "../../common/heroText";

// Styles
import styles from "./index.module.css";
import Link from "next/link";

// Data
const summary = [
  {
    id: 1,
    title: "Total Projects",
    count: 15,
    description: "Innovation web solutions crafted",
    link: "",
    icon: <FaCode size="20" />,
  },
  {
    id: 2,
    title: "Services",
    count: 4,
    description: "Trusted service provider",
    link: "",
    icon: <MdOutlineVerifiedUser size="20" />,
  },
  {
    id: 3,
    title: "Years of experience",
    count: 5,
    description: "Continuous learning journey",
    link: "",
    icon: <GrUserExpert size="20" />,
  },
];

const Section02 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.detailsWrapper}>
        <div className={styles.introWrapper}>
          <HeroText
            heroText="Hello, I'm"
            highlightedName={[""]}
            stylesProps={{
              heroText: styles.heroText,
              heroWord: styles.heroWord,
              nameHighlight: styles.nameHighlight,
              heroSubText: styles.heroSubText,
            }}
          />
          <HeroText
            heroText="Dhanuka Rathnayake"
            highlightedName={["Dhanuka", "Rathnayake"]}
            subText="A passionate DevOps Engineer driving innovation in software and infrastructure automation. With over five years of experience, I’m here to bring your projects to life with cutting-edge technology."
            stylesProps={{
              heroText: styles.heroText,
              heroWord: styles.heroWord,
              nameHighlight: styles.nameHighlight,
              heroSubText: styles.heroSubText,
            }}
          />
          {/* Projects and Contact Buttons */}
          <motion.div
            className={styles.buttonRow}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className={styles.button}>Download CV</button>
            <button className={styles.button}>About Me</button>
          </motion.div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="/dp.jpeg"
            alt="Dhanuka Rathnayake"
            className={styles.profileImage}
          />
        </div>
      </div>
      <div className={styles.cardContainer}>
        {summary.map((item) => (
          <div key={item.id} className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
              {item.icon}
              <span className={styles.cardNumber}>{item.count}</span>
            </div>
            <div className={styles.cardBody}>
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
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
