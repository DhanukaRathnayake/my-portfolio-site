// Libraries
import React, { FunctionComponent } from "react";

// Styles
import styles from "./index.module.css";

interface LinkStateProps {
  src: string;
}

type Props = LinkStateProps;

const Dp: FunctionComponent<Props> = ({ src }) => {
  return <img className={styles.dp} src={src} />;
};

export default Dp;
