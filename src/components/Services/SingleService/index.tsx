import React, { useEffect } from "react";
import Image from "next/image";
import { generateHTML } from "@tiptap/html";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { motion } from "motion/react";
import Link from "next/link";

// Components
import { IconButton } from "@/components/Common/Buttons/IconButton";
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

import { Info } from "../../../data/info";

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
          <motion.div
            className={styles.coverImageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={service.coverImageUrl}
              width={1200}
              height={675}
              alt={service.title}
              className={styles.coverImage}
              priority
            />
          </motion.div>
        )}

        {/* Title and Metadata */}
        <motion.div
          className={styles.titleAndMetadata}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className={styles.serviceTitle}>
            <HeroText>
              <Highlight className="text-gradient bg-gradient-to-r from-primary to-secondary">
                {service.title}
              </Highlight>
            </HeroText>
          </h1>

          {/* Service Summary */}
          <motion.div
            className={styles.serviceSummary}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our cutting-edge service designed to elevate your business
            to the next level
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className={styles.socialIcons}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              staggerChildren: 0.1,
            }}
          >
            {Info.connections.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                  <IconButton content={item.icon} onClick={() => {}} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
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
