"use client";
import { motion } from "framer-motion";
import React from "react";

export const HeroText = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // Convert children to an array to process text and Highlight components
  const childrenArray = React.Children.toArray(children);

  // Function to extract all text content and identify highlighted parts
  const processText = (
    children: React.ReactNode[]
  ): { text: string; isHighlight: boolean }[] => {
    let result: { text: string; isHighlight: boolean }[] = [];

    children.forEach((child) => {
      if (React.isValidElement(child) && child.type === Highlight) {
        // If the child is a Highlight component, add its text as highlighted
        const highlightedChild = child as React.ReactElement<{
          children: React.ReactNode;
        }>;
        result.push({
          text: highlightedChild.props.children?.toString() || "",
          isHighlight: true,
        });
      } else {
        // If the child is regular text, add it as non-highlighted
        result.push({ text: child?.toString() || "", isHighlight: false });
      }
    });

    return result;
  };

  // Process the text and highlighted parts
  const processedText = processText(childrenArray);

  // Flatten the processed text into a single string for animation
  const fullText = processedText.map((item) => item.text).join("");

  // Split the full text into characters for animation
  const characters = fullText.split("");

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`heroText ${className}`}
    >
      {characters.map((char, index) => {
        // Find the corresponding text segment (highlighted or not) for this character
        let currentCharIndex = 0;
        let isHighlighted = false;

        for (const segment of processedText) {
          if (
            index >= currentCharIndex &&
            index < currentCharIndex + segment.text.length
          ) {
            isHighlighted = segment.isHighlight;
            break;
          }
          currentCharIndex += segment.text.length;
        }

        return (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.08, // Slower delay for each character (0.1s per character)
              duration: 0.1, // Slower duration for each character
              ease: "easeOut",
            }}
            className={isHighlighted ? "heroTextHighlight" : ""}
          >
            {char}
          </motion.span>
        );
      })}
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
  return <span className={`heroTextHighlight ${className}`}>{children}</span>;
};
