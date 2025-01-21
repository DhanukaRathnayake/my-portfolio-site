import React from "react";

import styles from "./index.module.css";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button className={styles.shimmerButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default ShimmerButton;
