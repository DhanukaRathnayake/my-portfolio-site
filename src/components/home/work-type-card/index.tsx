// Libraries
import React, { FunctionComponent } from "react";

// Styles
import styles from "./index.module.css";

interface LinkStateProps {
  item: any;
}

type Props = LinkStateProps;

const WorkTypeCard: FunctionComponent<Props> = ({ item }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.icon}>{item.icon}</div>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
    </div>
  );
};

export default WorkTypeCard;
