import React from "react";

// Styles
import styles from "./index.module.css";

const BlobBackground: React.FC = () => {
  return (
    <div className={styles.blobContainer}>
      {/* Blobs will be placed here dynamically via CSS */}
      <div className={styles.blob}></div>
      <div className={styles.blob}></div>
      <div className={styles.blob}></div>
      <div className={styles.blob}></div>
    </div>
  );
};

export default BlobBackground;
