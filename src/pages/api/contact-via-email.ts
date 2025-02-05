import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { isEmail } from "validator";

// Email Template
import { ReplyEmailTemplate } from "@/components/Email/ReplyEmail";
import { ForwardEmailTemplate } from "@/components/Email/ForwardEmail";
import { render } from "@react-email/render";

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

    const replyHtml = await render(ReplyEmailTemplate({ name }), {
      pretty: true,
    });
    const forwardHtml = await render(
      ForwardEmailTemplate({ name, email, message }),
      {
        pretty: true,
      }
    );

    // Configure mail options for replying to the user
    const mailReplyOptions = {
      from: `Dhanuka Rathnayake <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: `Thank you for contacting me ${name}`,
      text: `Hi ${name}, Thank you for reaching out. I will get back to you soon.`,
      html: replyHtml,
    };

    // Configure mail options for forwarding the email to yourself
    const mailForwardOptions = {
      from: `Portfolio Notifications <${process.env.CONTACT_EMAIL}>`,
      to: `${process.env.CONTACT_EMAIL}`, // Primary recipient
      subject: `New message from ${name} (${email})`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: forwardHtml,
    };

    try {
      // Send both emails in parallel
      const [replyResult, forwardResult] = await Promise.all([
        transporter.sendMail(mailReplyOptions),
        transporter.sendMail(mailForwardOptions),
      ]);

      console.log("Reply email sent successfully:", replyResult);
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
