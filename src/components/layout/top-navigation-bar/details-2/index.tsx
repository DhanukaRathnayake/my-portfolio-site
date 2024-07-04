// Libraries
import React, { FunctionComponent } from "react";
import Link from "next/link";

// Styles
import styles from "./index.module.css";

interface LinkStateProps {
  data: any;
}

type Props = LinkStateProps;

const DetailsTwo: FunctionComponent<Props> = ({ data }) => {
  return (
    <div>
      <div>
        <text className={styles.detailsTitle}>Email</text>
        <br />
        <text className={styles.detailsValue}>{data.email}</text>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <text className={styles.detailsTitle}>Location</text>
        <br />
        <Link
          href={data.location.link}
          target="_blank"
          className={styles.detailsValue}
        >
          {data.location.name}
        </Link>
      </div>
    </div>
  );
};

export default DetailsTwo;
