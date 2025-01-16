"use client";
import { motion } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      <div className={`heroText ${className}`}>{children}</div>
    </motion.h1>
  );
};

export const Highlight = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,

        backgroundSize: "100% 100%",
      }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.2,
      }}
      className={`heroTextHighlight ${className}`}
    >
      {children}
    </motion.span>
  );
};
