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

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`heroText ${className}`}
    >
      {processedText.map((segment, segmentIndex) => {
        if (segment.isHighlight) {
          const characters = segment.text.split("");

          return (
            <span
              key={segmentIndex}
              style={{
                background:
                  "linear-gradient(90deg, var(--color-gradient-start), var(--color-gradient-end))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block", // Ensure the gradient spans the full word
              }}
            >
              {characters.map((char, charIndex) => {
                const totalCharsBefore =
                  processedText
                    .slice(0, segmentIndex)
                    .reduce((acc, seg) => acc + seg.text.length, 0) + charIndex;

                return (
                  <motion.span
                    key={`${segmentIndex}-${charIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.05 * totalCharsBefore, // Delay for each character
                      duration: 0.1, // Duration for each character
                      ease: "easeInOut",
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          );
        } else {
          // Animate non-highlighted text character by character
          return segment.text.split("").map((char, charIndex) => {
            const totalCharsBefore =
              processedText
                .slice(0, segmentIndex)
                .reduce((acc, seg) => acc + seg.text.length, 0) + charIndex;

            return (
              <motion.span
                key={`${segmentIndex}-${charIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.05 * totalCharsBefore, // Delay for each character
                  duration: 0.1, // Duration for each character
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            );
          });
        }
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
