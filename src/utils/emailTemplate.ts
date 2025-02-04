// utils/emailTemplate.ts
import { Info } from "@/data/info";

export const replyEmailTemplate = (name: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank You for Contacting Us</title>
        <style>
          /* Default light mode styles */
          body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', Arial, sans-serif;
            background-color: #f9f9f9; /* Light mode background */
            color: #333; /* Light mode text color */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }

          /* General styles */
          .email-container {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background: #ffffff; /* Light mode card background */
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
          }

          .content {
            padding: 20px;
            line-height: 1.6;
          }

          .footer {
            text-align: center;
            padding: 20px;
            background: #f9f9f9; /* Light mode footer background */
            font-size: 14px;
            color: #777; /* Light mode footer text color */
          }

          /* Dark mode styles */
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #121212; /* Dark mode background */
              color: #ffffff; /* Dark mode text color */
            }
            .email-container {
              background-color: #1e1e1e; /* Dark mode card background */
              border-color: #333; /* Dark mode border color */
            }
            .content {
              background-color: #1e1e1e; /* Dark mode content background */
              color: #dcdcdc; /* Dark mode content text color */
            }
            .footer {
              background-color: #1e1e1e; /* Dark mode footer background */
              color: #dcdcdc; /* Dark mode footer text color */
            }
          }

          .header {
            text-align: center;
            padding: 20px;
            background: linear-gradient(to right, #660099, #b136dd); /* Gradient header */
            color: #fff;
          }

          a.reply-button {
            display: inline-block;
            margin: 20px 0;
            padding: 12px 24px;
            font-size: 16px;
            color: #fff;
            background: linear-gradient(to right, #660099, #b136dd);
            background-color: #660099; /* Fallback for gradient */
            border-radius: 5px;
            text-decoration: none;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img src="${
              Info.logo
            }" alt="Business Logo" style="max-width: 100px; margin-bottom: 20px;" />
            <h1 style="font-size: 24px; font-weight: 700; margin: 0;">Thank You for Contacting Us!</h1>
          </div>
          <div class="content">
            <p style="font-size: 16px; margin: 0 0 20px;">Hi ${name},</p>
            <p style="font-size: 16px; margin: 0 0 20px;">
              Thank you for reaching out to us. We truly appreciate your interest and will get back to you as soon as possible.
            </p>
            <p style="font-size: 16px; margin: 0 0 20px;">
              If you have any additional questions or need further assistance, feel free to reply to this email.
            </p>
            <a href="mailto:${
              process.env.CONTACT_EMAIL
            }" class="reply-button">Reply to This Email</a>
          </div>
          <div class="footer">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} ${
    Info.firstName
  } ${Info.lastName}. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const forwardEmailTemplate = (
  name: string,
  email: string,
  message: string
) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Notification</title>
        <style>
          /* Default light mode styles */
          body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', Arial, sans-serif;
            background-color: #f9f9f9; /* Light mode background */
            color: #333; /* Light mode text color */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }

          /* General styles */
          .email-container {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background: #ffffff; /* Light mode card background */
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
          }

          .content {
            padding: 20px;
            line-height: 1.6;
          }

          .footer {
            text-align: center;
            padding: 20px;
            background: #f9f9f9; /* Light mode footer background */
            font-size: 14px;
            color: #777; /* Light mode footer text color */
          }

          /* Dark mode styles */
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #121212; /* Dark mode background */
              color: #ffffff; /* Dark mode text color */
            }
            .email-container {
              background-color: #1e1e1e; /* Dark mode card background */
              border-color: #333; /* Dark mode border color */
            }
            .content {
              background-color: #1e1e1e; /* Dark mode content background */
              color: #dcdcdc; /* Dark mode content text color */
            }
            .footer {
              background-color: #1e1e1e; /* Dark mode footer background */
              color: #dcdcdc; /* Dark mode footer text color */
            }
          }

          .header {
            text-align: center;
            padding: 20px;
            background: linear-gradient(to right, #660099, #b136dd); /* Gradient header */
            color: #fff;
          }

          a.reply-button {
            display: inline-block;
            margin: 20px 0;
            padding: 12px 24px;
            font-size: 16px;
            color: #fff;
            background: linear-gradient(to right, #660099, #b136dd);
            background-color: #660099; /* Fallback for gradient */
            border-radius: 5px;
            text-decoration: none;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img src="${
              Info.logo
            }" alt="Business Logo" style="max-width: 100px; margin-bottom: 20px;" />
            <h1 style="font-size: 24px; font-weight: 700; margin: 0;">New Contact Notification</h1>
          </div>
          <div class="content">
            <p style="font-size: 16px; margin: 0 0 20px;">Hello ${
              Info.firstName
            } ${Info.lastName},</p>
            <p style="font-size: 16px; margin: 0 0 20px;">
              You have received a new contact request from your portfolio website.
            </p>
            <p style="font-size: 16px; margin: 0 0 20px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; margin: 0 0 20px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; margin: 0 0 20px;"><strong>Message:</strong>${message}</p>
            <a href="mailto:${email}" class="reply-button">Reply to This Email</a>
          </div>
          <div class="footer">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} ${
    Info.firstName
  } ${Info.lastName}. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
