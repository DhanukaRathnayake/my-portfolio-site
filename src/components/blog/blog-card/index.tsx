// Libraries
import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { SiMedium } from "react-icons/si";

// Styles
import styles from "./index.module.css";

interface LinkStateProps {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

type Props = LinkStateProps;

const Blog: FunctionComponent<Props> = ({
  image,
  title,
  description,
  date,
  link,
}) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  function truncateText(text: string, maxLength: number, maxWords: number) {
    const words = text.split(" ");
    let truncatedText = "";
    let charCount = 0;

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (truncatedText.length + word.length + 1 <= maxLength && i < maxWords) {
        truncatedText += (i === 0 ? "" : " ") + word;
        charCount += word.length;
      } else {
        break;
      }
    }

    if (charCount < text.length) {
      truncatedText += "...";
    }

    return truncatedText;
  }

  return (
    <div className={styles.mainDiv}>
      <Link href={link} target="_blank">
        <div className={styles["image-container"]}>
          <Image
            src={image}
            alt="Image"
            width={768}
            height={432}
            objectFit="cover"
            className={styles.image}
            quality={50}
          />

          <div className={styles.overlay}>
            <div className="icon-container">
              <SiMedium className={styles.icon} />
            </div>
          </div>
          <div className={styles.dateCorner}>{date}</div>
        </div>

        <text className={styles.titleTxt}>{truncateText(title, 30, 10)}</text>
        <text className={styles.descriptionTxt}>
          {truncateText(description, 100, 20)}
        </text>
      </Link>
    </div>
  );
};

export default Blog;
