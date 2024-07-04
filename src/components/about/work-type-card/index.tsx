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
      <div style={{ color: "#0071ff" }}>{item.icon}</div>
      <text
        style={{
          fontWeight: "800",
          fontSize: "20px",
        }}
      >
        {item.title}
      </text>
      <text
        style={{
          color: "grey",
        }}
      >
        {item.description}
      </text>
    </div>
  );
};

export default WorkTypeCard;
