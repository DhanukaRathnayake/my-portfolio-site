// Libraries
import React, { FunctionComponent } from "react";

// Styles
import styles from "./index.module.css";

interface LinkStateProps {}

type Props = LinkStateProps;

const BlobBackground: FunctionComponent<Props> = ({}) => {
  return (
    <div className={styles.blobContainer}>
      {/* Blobs will be placed here dynamically via CSS */}
      <div className={styles.blob}></div>
      <div className={styles.blob}></div>
      <div className={styles.blob}></div>
      <div className={styles.blob}></div>
      <div className={styles.blob}></div>
      <div className={styles.blob}></div>
    </div>
  );
};

export default BlobBackground;
