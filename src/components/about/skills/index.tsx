// Libraries
import React, { FunctionComponent, useRef, useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";

// Styles
import styles from "./index.module.css";

interface LinkStateProps {
  title: string;
  data: any;
}

type Props = LinkStateProps;

const Skills: FunctionComponent<Props> = ({ title, data }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.headerDiv}>
        <FaBriefcase size="30" color="#0071ff" />
        <text style={{ fontSize: "25px", fontWeight: "500" }}>{title}</text>
        <br />
        <br />
      </div>
      <div className={styles.skillsDiv}>
        {data.map((item: any, index: number) => {
          return (
            <div className={styles.growthLine} key={index}>
              <div
                className={styles.fillLine}
                style={{ width: item.percentage }}
              >
                <text style={{ color: "black" }}>{item.skill}</text>
                <text>{item.stage}</text>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
