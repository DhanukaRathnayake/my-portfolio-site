import React, { FunctionComponent } from "react";
import { FaBriefcase } from "react-icons/fa";

import styles from "./index.module.css";

interface LinkStateProps {
  title: string;
  data: any[];
}

type Props = LinkStateProps;

const ContentFlow: FunctionComponent<Props> = ({ title, data }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.headerDiv}>
        <FaBriefcase size="30" color="#0071ff" />
        <text style={{ fontSize: "25px", fontWeight: "500" }}>{title}</text>
        <br />
        <br />
      </div>
      <div className={styles.flowDiv}>
        <ol className="relative">
          {data.map((item: any, index: number) => {
            return (
              <div key={index}>
                <li key={index}>
                  <div
                    className={
                      data.length - 1 !== index
                        ? styles.customBorder
                        : styles.withoutCustomBorder
                    }
                  >
                    <div className={styles.customRoundCircle}></div>

                    <h2 className={styles.titleHeader}>{item.title}</h2>

                    <text className={styles.timeLine}>{item.date}</text>

                    <div className="mt-3">
                      {item.contents.map((item: any, index: number) => {
                        return (
                          <p className={styles.content} key={index}>
                            - {item.description}
                          </p>
                        );
                      })}
                      {item.skills && (
                        <text className={styles.content}>
                          - Skills : {item.skills}
                        </text>
                      )}
                    </div>

                    <br />
                  </div>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ContentFlow;
