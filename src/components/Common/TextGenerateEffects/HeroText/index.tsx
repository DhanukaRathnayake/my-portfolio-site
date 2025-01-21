"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export const HeroText = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`heroText ${className}`}
    >
      {children}
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
  const text = React.Children.toArray(children).join("");
  const letters = text.split("");

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`heroTextHighlight ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05, // Staggered delay for each letter
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const HeroSection = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={`heroSection ${className}`}
    >
      {children}
    </motion.div>
  );
};
