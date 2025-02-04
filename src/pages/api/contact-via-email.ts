import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { isEmail } from "validator";

// Email Template
import {
  forwardEmailTemplate,
  replyEmailTemplate,
} from "@/utils/emailTemplate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // Validate input
    if (!email || !name || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY,
      },
      // debug: true, // Enable debugging
      // logger: true, // Enable logging
    });

    // Configure mail options for replying to the user
    const mailReplyOptions = {
      from: `Dhanuka Rathnayake <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: `Thank you for contacting me ${name}`,
      text: `Hi ${name}, thank you for reaching out. We will get back to you soon.`,
      html: replyEmailTemplate(name),
    };

    // Configure mail options for forwarding the email to yourself
    const mailForwardOptions = {
      from: `Portfolio Notifications <portfolio@tagzi.site>`,
      to: `${process.env.CONTACT_EMAIL}`, // Primary recipient
      subject: `New message from ${name} (${email})`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: forwardEmailTemplate(name, email, message),
    };

    try {
      // Reply to the user
      const replyResult = await transporter.sendMail(mailReplyOptions);
      console.log("Reply email sent successfully:", replyResult);

      // Forward the email to yourself (with CC)
      const forwardResult = await transporter.sendMail(mailForwardOptions);
      console.log("Forward email sent successfully:", forwardResult);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
