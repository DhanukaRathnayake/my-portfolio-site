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
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #121212 !important;
              color: #ffffff !important;
            }
            .email-container {
              background-color: #1e1e1e !important;
              border-color: #333 !important;
            }
            .header {
              background-color: #660099 !important;
            }
            .content {
              background-color: #1e1e1e !important;
              color: #dcdcdc !important;
            }
            .footer {
              background-color: #1e1e1e !important;
              color: #dcdcdc !important;
            }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #000; color: #ffffff;">
        <div class="email-container" style="max-width: 600px; margin: 0 20px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); border-radius: 10px; overflow: hidden;">
          <div class="header" style="text-align: center; padding: 20px; background: linear-gradient(to right, #660099, #b136dd); color: #fff;">
            <img src="${
              Info.logo
            }" alt="Business Logo" style="max-width: 100px; margin-bottom: 20px;" />
            <h1 style="font-size: 24px; font-weight: 700; margin: 0;">Thank You for Contacting Us!</h1>
          </div>
          <div class="content" style="padding: 20px; background: rgba(255, 255, 255, 0.1); color: #dcdcdc;">
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px;">Hi ${name},</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
              Thank you for reaching out to us. We truly appreciate your interest and will get back to you as soon as possible.
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
              If you have any additional questions or need further assistance, feel free to reply to this email.
            </p>
            <a href="mailto:${
              process.env.CONTACT_EMAIL
            }" style="display: inline-block; margin: 20px 0; padding: 12px 24px; font-size: 16px; color: #fff; background: linear-gradient(to right, #660099, #b136dd); border-radius: 5px; text-decoration: none; text-align: center;">Reply to This Email</a>
          </div>
          <div class="footer" style="text-align: center; padding: 20px; background: rgba(255, 255, 255, 0.1); color: #dcdcdc; font-size: 14px;">
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
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #121212 !important;
              color: #ffffff !important;
            }
            .email-container {
              background-color: #1e1e1e !important;
              border-color: #333 !important;
            }
            .header {
              background-color: #660099 !important;
            }
            .content {
              background-color: #1e1e1e !important;
              color: #dcdcdc !important;
            }
            .footer {
              background-color: #1e1e1e !important;
              color: #dcdcdc !important;
            }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #000; color: #ffffff;">
        <div class="email-container" style="max-width: 600px; margin: 0 20px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); border-radius: 10px; overflow: hidden;">
          <div class="header" style="text-align: center; padding: 20px; background: linear-gradient(to right, #660099, #b136dd); color: #fff;">
            <img src="${
              Info.logo
            }" alt="Business Logo" style="max-width: 100px; margin-bottom: 20px;" />
            <h1 style="font-size: 24px; font-weight: 700; margin: 0;">New Contact Notification</h1>
          </div>
          <div class="content" style="padding: 20px; background: rgba(255, 255, 255, 0.1); color: #dcdcdc;">
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px;">Hello ${
              Info.firstName
            } ${Info.lastName},</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
              You have received a new contact request from your portfolio website.
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px;"><strong>Message:</strong></p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px;">${message}</p>
            <a href="mailto:${email}" style="display: inline-block; margin: 20px 0; padding: 12px 24px; font-size: 16px; color: #fff; background: linear-gradient(to right, #660099, #b136dd); border-radius: 5px; text-decoration: none; text-align: center;">Reply to This Email</a>
          </div>
          <div class="footer" style="text-align: center; padding: 20px; background: rgba(255, 255, 255, 0.1); color: #dcdcdc; font-size: 14px;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} ${
    Info.firstName
  } ${Info.lastName}. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
