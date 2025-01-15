"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/shadcn";

interface TextGenerateEffectProps {
  words: string;
  filter?: boolean;
  duration?: number;
}

const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="heroSubText">
      <div className="leading-snug tracking-wide">{renderWords()}</div>
    </div>
  );
};

export default TextGenerateEffect;
