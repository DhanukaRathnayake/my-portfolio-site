// Libraries
import React, { FunctionComponent } from "react";
import Link from "next/link";

// Styles
import styles from "./index.module.css";

interface LinkStateProps {
  data: any;
}

interface LinkDispatchProps {
  handleDownloadClick: () => void;
}

type Props = LinkStateProps & LinkDispatchProps;

const DetailsThree: FunctionComponent<Props> = ({
  data,
  handleDownloadClick,
}) => {
  return (
    <div>
      <div>
        <text className={styles.detailsTitle}>CV</text>
        <br />
        <text
          style={{ cursor: "pointer" }}
          className={styles.detailsValue}
          onClick={handleDownloadClick}
        >
          Download
        </text>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <text className={styles.detailsTitle}>Status</text>
        <br />
        <text className={styles.detailsValue}>{data.status}</text>
      </div>
    </div>
  );
};

export default DetailsThree;
