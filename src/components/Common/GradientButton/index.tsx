import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";

type GradientButtonProps = {
  content: string | ReactNode;
  onClick: () => void;
};

const GradientButton: React.FC<GradientButtonProps> = ({
  content,
  onClick,
}) => {
  return (
    <motion.div
      className={`gradient-button`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <button
        type="button"
        className={`gradient-button-inner`}
        onClick={onClick}
      >
        {content}
      </button>
    </motion.div>
  );
};

export default GradientButton;
