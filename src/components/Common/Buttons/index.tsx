import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type IconButtonProps = {
  content: string | ReactNode;
  onClick: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({ content, onClick }) => {
  return (
    <motion.div
      className={`icon-button`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <button type="button" className={`icon-button-inner`} onClick={onClick}>
        {content}
      </button>
    </motion.div>
  );
};
