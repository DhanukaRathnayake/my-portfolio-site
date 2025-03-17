import React from "react";

import styles from "./index.module.css";
import { Info } from "@/data/info";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()}{" "}
          <span className={styles.highlights}>TAGZY</span>. Designed & developed
          by{" "}
          <span className={styles.highlights}>
            {Info.firstName + " " + Info.lastName}
          </span>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
