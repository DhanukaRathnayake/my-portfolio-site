// Libraries
import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import { SiMedium } from "react-icons/si";

// Styles
import styles from "./index.module.css";

// Types
import { TypeBlog } from "@/types/blog";

interface Props {
  item: TypeBlog;
}

const Blog: FunctionComponent<Props> = ({ item }) => {
  const router = useRouter();

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
      <div
        className={styles["image-container"]}
        onClick={() => router.push(`/blogs/${item.id}`)}
      >
        <Image
          src={item.coverImageUrl}
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
      </div>

      <text className={styles.titleTxt}>
        {truncateText(item.title, 30, 10)}
      </text>
      <text className={styles.dateTxt}>{item.createdAt}</text>
    </div>
  );
};

export default Blog;
