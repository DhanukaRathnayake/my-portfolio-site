import React from "react";

import styles from "./index.module.css";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button className={styles.button}>
      <span className={styles.backgroundEffect}>
        <span className={styles.radialGradient}></span>
      </span>
      <div className={styles.content}>
        <span>{children}</span>
      </div>
      <span className={styles.bottomLine}></span>
    </button>
  );
};

export default GradientButton;
