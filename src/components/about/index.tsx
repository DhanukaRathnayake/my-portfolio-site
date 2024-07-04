// Libraries
import React, { FunctionComponent } from "react";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import { IoInfinite } from "react-icons/io5";
import { TbCloudCode } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";

// Styles
import styles from "./index.module.css";

// Components
import WorkTypeCard from "./work-type-card";

// Data
import data from "../../data/main-info.json";

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
  {
    id: 4,
    icon: <LuBrainCircuit size="40" />,
    title: "Ai & Security & Networking & Blockchain",
    description:
      "I'm actively exploring these future technologies due to my strong interest in them",
  },
];

const About: FunctionComponent = ({}) => {
  return (
    <div>
      <text style={{ fontSize: "30px", fontWeight: "600" }}>About Me</text>
      <Divider
        flexItem
        style={{
          backgroundColor: "#0071ff",
          height: "6px",
          width: "100px",
          borderRadius: "10px",
        }}
      />
      <br />
      <p style={{ fontSize: "15px", fontWeight: "400", color: "lightgray" }}>
        As a DevOps Engineer at
        <Link
          href={data.company.link}
          target="_blank"
          style={{
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #0074D9, #9B59B6)",
            WebkitBackgroundClip: "text",
            fontWeight: "500",
          }}
        >
          {" " + data.company.name + ", "}
        </Link>
        I drive innovation by bridging development and operations for seamless
        results. My dynamic role is marked by driving efficiency, resilience,
        and advanced solutions in software delivery and infrastructure
        management.
        <br />
        <br />
        With a experience in Computer Science from University of Kelaniya Sri
        Lanka, I have over five years of dedicated experience in the software
        field, spanning from full stack engineering to junior DevOps
        engineering. I&#39;ve nurtured a passion for software engineering since
        its inception, and I&#39;m always eager to learn, explore, and achieve
        more.
        <br />
        <br />
        My goal is to make a meaningful impact in the ever-evolving world of
        technology, and to work smarter, honing my skills to achieve simplicity
        and effectiveness. Let&#39;s connect and pave the way for a tech future
        that&#39;s both exciting and impactful.
      </p>
      <br />
      <br />
      <text style={{ fontSize: "25px", fontWeight: "600" }}>
        What I&#39;m Doing
      </text>

      <div className={styles.workTypeCards}>
        {workTypes.map((item: any, index: any) => {
          return <WorkTypeCard key={index} item={item} />;
        })}
      </div>

      {/* <br /> */}
      {/* <br /> */}

      {/* <text style={{ fontSize: "25px", fontWeight: "600" }}>Clients</text> */}
    </div>
  );
};

export default About;
