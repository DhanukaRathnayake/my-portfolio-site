import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

type BlobProperties = {
  randomX: number;
  randomY: number;
  size: number;
  motionDuration: string;
  fadeDuration: string;
  color: string;
  randomX2: number;
  randomY2: number;
  randomX3: number;
  randomY3: number;
  randomX4: number;
  randomY4: number;
  xRange: [number, number]; // X position range (tuple of exactly 2 numbers)
  yRange: [number, number]; // Y position range (tuple of exactly 2 numbers)
  velocityX: number;
  velocityY: number;
};

const blobConfig = [
  {
    sizeRange: [100, 200],
    color: "#A0153E",
    motionDuration: "10s",
    fadeDuration: "10s",
    count: 4,
    xRange: [0, 50],
    yRange: [0, 50],
  },
  {
    sizeRange: [100, 200],
    color: "#3A0088",
    motionDuration: "6s",
    fadeDuration: "10s",
    count: 2,
    xRange: [0, 70],
    yRange: [0, 70],
  },
  {
    sizeRange: [200, 300],
    color: "#A0153E",
    motionDuration: "8s",
    fadeDuration: "15s",
    count: 3,
    xRange: [30, 80],
    yRange: [20, 80],
  },
  {
    sizeRange: [300, 400],
    color: "#3A0088",
    motionDuration: "10s",
    fadeDuration: "10s",
    count: 2,
    xRange: [0, 50],
    yRange: [0, 50],
  },
];

const LiquidBackground: React.FC = () => {
  const [properties, setProperties] = useState<BlobProperties[]>([]);

  const generateRandomProperties = (
    config: (typeof blobConfig)[0]
  ): BlobProperties[] => {
    return Array.from({ length: config.count }).map(() => {
      const color = config.color;
      const motionDuration = config.motionDuration;
      const fadeDuration = config.fadeDuration;
      const randomSize =
        Math.floor(
          Math.random() * (config.sizeRange[1] - config.sizeRange[0])
        ) + config.sizeRange[0];

      const randomX = Math.floor(
        Math.random() * (config.xRange[1] - config.xRange[0]) + config.xRange[0]
      );
      const randomY = Math.floor(
        Math.random() * (config.yRange[1] - config.yRange[0]) + config.yRange[0]
      );

      // Random initial velocity for continuous motion
      const velocityX = (Math.random() - 0.5) * 0.5; // Random velocity between -0.25 and 0.25
      const velocityY = (Math.random() - 0.5) * 0.5; // Random velocity between -0.25 and 0.25

      return {
        randomX,
        randomY,
        size: randomSize,
        motionDuration,
        fadeDuration,
        color,
        randomX2: randomX,
        randomY2: randomY,
        randomX3: randomX,
        randomY3: randomY,
        randomX4: randomX,
        randomY4: randomY,
        xRange: config.xRange as [number, number],
        yRange: config.yRange as [number, number],
        velocityX,
        velocityY,
      };
    });
  };

  useEffect(() => {
    const initialProperties = blobConfig.reduce(
      (acc, config) => [...acc, ...generateRandomProperties(config)],
      [] as BlobProperties[]
    );
    setProperties(initialProperties);

    let animationFrameId: number; // Store the animation frame ID

    const animateBlobPositions = () => {
      setProperties((prevProperties) =>
        prevProperties.map((blob) => {
          // Adjust the blob's position with velocity for continuous motion
          const newRandomX = blob.randomX + blob.velocityX;
          const newRandomY = blob.randomY + blob.velocityY;

          // Keep the blob within the range defined by xRange and yRange
          const boundedX = Math.max(
            blob.xRange[0],
            Math.min(newRandomX, blob.xRange[1])
          );
          const boundedY = Math.max(
            blob.yRange[0],
            Math.min(newRandomY, blob.yRange[1])
          );

          // Randomly adjust the velocity slightly for fluid motion
          const newVelocityX = blob.velocityX + (Math.random() - 0.5) * 0.05;
          const newVelocityY = blob.velocityY + (Math.random() - 0.5) * 0.05;

          return {
            ...blob,
            randomX: boundedX,
            randomY: boundedY,
            randomX2: boundedX,
            randomY2: boundedY,
            randomX3: boundedX,
            randomY3: boundedY,
            randomX4: boundedX,
            randomY4: boundedY,
            velocityX: newVelocityX,
            velocityY: newVelocityY,
          };
        })
      );

      animationFrameId = requestAnimationFrame(animateBlobPositions); // Continue animating indefinitely
    };

    animateBlobPositions(); // Start the animation loop

    return () => {
      cancelAnimationFrame(animationFrameId); // Clean up the animation
    };
  }, []);

  return (
    <div className={styles.liquidBackground}>
      {properties.map((props, index) => (
        <div
          key={index}
          className={styles.blob}
          style={
            {
              "--x1": `${props.randomX}vw`,
              "--y1": `${props.randomY}vh`,
              "--x2": `${props.randomX2}vw`,
              "--y2": `${props.randomY2}vh`,
              "--x3": `${props.randomX3}vw`,
              "--y3": `${props.randomY3}vh`,
              "--x4": `${props.randomX4}vw`,
              "--y4": `${props.randomY4}vh`,
              "--size": `${props.size}px`,
              "--motion-duration": props.motionDuration,
              "--fade-duration": props.fadeDuration,
              "--blob-color": props.color,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default LiquidBackground;
