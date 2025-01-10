// Libraries
import React from "react";
import { IoInfinite } from "react-icons/io5";
import { TbCloudCode } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";

// Components
import HeroText from "../../common/heroText";
import WorkTypeCard from "../work-type-card";

// Styles
import styles from "./index.module.css";

// Work type category cards
const workTypes = [
  {
    id: 1,
    icon: <IoInfinite size="40" />,
    title: "DevOps",
    description:
      "I derive great satisfaction from the process of learning and employing automation to create both software and infrastructure",
  },
  {
    id: 2,
    icon: <TbCloudCode size="40" />,
    title: "Cloud Computing",
    description:
      "I've created numerous projects using cloud computing, primarily relying on AWS services",
  },
  {
    id: 3,
    icon: <HiOutlineCode size="40" />,
    title: "Software Engineering",
    description:
      "I've a strong passion for software development, utilizing various technology stacks to create high-quality solutions",
  },
];

const Section03 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.intro}>
        <HeroText
          heroText="What I’m Doing"
          stylesProps={{
            heroText: styles.heroText,
            heroWord: styles.heroWord,
            nameHighlight: styles.nameHighlight,
            heroSubText: styles.heroSubText,
          }}
        />
        <div className={styles.cardsDiv}>
          {workTypes.map((item) => (
            <WorkTypeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section03;
