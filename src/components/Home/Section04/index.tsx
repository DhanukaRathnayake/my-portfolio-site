import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Components
import {
  HeroHighlight,
  Highlight,
} from "../../Common/TextGenerateEffects/HeroHighlight";
import TextGenerateEffect from "@/components/Common/TextGenerateEffects";
import { IconButton } from "@/components/Common/Buttons/IconButton";
import { useToast } from "@/components/Common/Toast/ToastContext";

// Redux
import { useSendEmailMutation } from "@/redux/services/contactMeApi";

// Styles
import styles from "./index.module.css";

// Data
import { Info } from "../../../data/info";

// Email Template
import { getEmailTemplate } from "@/utils/emailTemplate";

const Section04 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sendEmail, { isLoading }] = useSendEmailMutation();
  const { addToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailData = {
      to: email, // Recipient email
      subject: `New message from ${name} (${email})`, // Dynamic subject
      text: message, // Plain text version of the email
      html: getEmailTemplate(name, email, message), // HTML version of the email
    };

    try {
      // Send email
      await sendEmail(emailData).unwrap();

      // Show success message
      addToast("I'll contact you soon... 😊 Thank you!", "success");

      // Clear the form
      setName("");
      setEmail("");
      setMessage("");

      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      // Show error message
      addToast("Something went wrong", "error");
    }
  };

  return (
    <div className={styles.section}>
      {/* Hero Section */}
      <div className={styles.intro}>
        <div className="mb-2">
          <HeroHighlight>
            Contact <Highlight>Me</Highlight>
          </HeroHighlight>
        </div>
        <div className="mb-4">
          <TextGenerateEffect
            words={Info.sections.section04.description}
            duration={0.5}
          />
        </div>
      </div>

      {/* Contact Form */}
      <form
        className={`${styles.contactForm} primary-card`}
        onSubmit={handleSubmit}
      >
        <h2 className={styles.formTitle}>Get In Touch</h2>

        {/* Name Field */}
        <input
          type="text"
          placeholder="Your Name"
          className={styles.inputField}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email Field */}
        <input
          type="email"
          placeholder="Your Email"
          className={styles.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Message Field */}
        <textarea
          placeholder="Your Message"
          className={styles.textArea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className={`${styles.submitButton} primary-button`}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {/* Social Media Icons */}
        <motion.div
          className={styles.socialIcons}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {Info.connections.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                key={index}
                content={item.icon}
                onClick={() => console.log(item.name)}
              />
            </Link>
          ))}
        </motion.div>
      </form>
    </div>
  );
};

export default Section04;
