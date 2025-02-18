import React, { useEffect } from "react";
import Image from "next/image";
import { generateHTML } from "@tiptap/html";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";

// Components
import Breadcrumb from "@/components/Common/BreadCrumb";
import extensions from "@/components/Common/EditorExtension";
import Tags from "@/components/Common/Tags";
import {
  HeroText,
  Highlight,
} from "../../../components/Common/TextGenerateEffects/HeroText";

// Styles
import styles from "./index.module.css";

// Types
import { TypeService } from "@/types/service";

interface Props {
  service: TypeService;
}

const SingleService: React.FC<Props> = ({ service }) => {
  useEffect(() => {
    hljs.highlightAll(); // Highlight code blocks
  }, [service]);

  // Convert Tiptap JSON to HTML
  const htmlBody = service && generateHTML(service.body, extensions);

  // Sanitize HTML for security
  const sanitizedHTML = DOMPurify.sanitize(htmlBody);

  return (
    <div className={styles.serviceContainer}>
      {/* Cover Image with Animation */}
      <div className={styles.headerRow}>
        {service.coverImageUrl && (
          <div className={styles.coverImageContainer}>
            <Image
              src={service.coverImageUrl}
              width={1000}
              height={1000}
              alt={service.title}
              className={styles.coverImage}
            />
          </div>
        )}
      </div>

      {/* Title and Metadata */}
      <div className={styles.titleAndMetadata}>
        <h1 className={styles.serviceTitle}>
          <HeroText>
            <Highlight>{service.title}</Highlight>
          </HeroText>
        </h1>
      </div>

      {/* Blog Body */}
      <div
        className={`${styles.serviceBody} tiptap`}
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />

      {/* Tags */}
      <div className={styles.tagsContainer}>
        <Tags tags={service.tags} />
      </div>
    </div>
  );
};

export default SingleService;
