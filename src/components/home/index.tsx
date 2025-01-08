// Libraries
import React, { FunctionComponent } from "react";
import { IoInfinite } from "react-icons/io5";
import { TbCloudCode } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";
import styles from "./index.module.css";

// Components
import WorkTypeCard from "./work-type-card";

// Work type categories
const workTypes: any = [
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

const Home: FunctionComponent = ({}) => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.intro}>
          <h1>Hi, I am Dhanuka</h1>
          <p>
            A passionate DevOps Engineer driving innovation in software and
            infrastructure automation. With over five years of experience, I’m
            here to bring your projects to life with cutting-edge technology.
          </p>
        </div>
        <div className={styles.animation}>
          <img
            src="/dp.jpeg"
            alt="Dhanuka Rathnayake"
            className={styles.animatedImage}
          />
        </div>
      </div>

      {/* What I’m Doing Section */}
      <div className={styles.workTypeSection}>
        <h2>What I’m Doing</h2>
        <div className={styles.workTypeCards}>
          {workTypes.map((item: any, index: any) => {
            return <WorkTypeCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
