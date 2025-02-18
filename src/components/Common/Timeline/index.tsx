"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import styles from "./index.module.css";

interface TimelineEntry {
  title: string;
  date: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  category,
  description,
}: {
  data: TimelineEntry[];
  category: string;
  description: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={styles.timelineContainer} ref={containerRef}>
      <div className={styles.timelineHeader}>
        <h2 className={styles.timelineTitle}>{category}</h2>
        <p className={styles.timelineSubtitle}>{description}</p>
      </div>

      <div ref={ref} className={styles.timelineContent}>
        {data.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <div className={styles.timelineDot} />
              <h3 className={styles.timelineItemDate}>{item.date}</h3>
              <div
                className={`${styles.timelineDot} ${styles.timelineDotSmall}`}
              />
            </div>

            <div className={`${styles.timelineItemContent}`}>
              <h2 className={styles.timelineItemTitle}>{item.title}</h2>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={styles.timelineLine}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className={styles.timelineProgress}
          />
        </div>
      </div>
    </div>
  );
};
