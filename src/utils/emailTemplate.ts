// utils/emailTemplate.ts
export const getEmailTemplate = (
  name: string,
  email: string,
  message: string
) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Me</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
          color: #333;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
        }
        .header h1 {
          font-size: 24px;
          color: #333;
          margin: 0;
        }
        .content {
          padding: 20px 0;
        }
        .content p {
          font-size: 16px;
          line-height: 1.6;
          margin: 0 0 20px;
        }
        .content p strong {
          color: #000;
        }
        .footer {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
          font-size: 14px;
          color: #777;
        }
        .footer a {
          color: #007bff;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        .cta-button {
          display: inline-block;
          margin: 20px 0;
          padding: 12px 24px;
          font-size: 16px;
          color: #fff;
          background-color: #007bff;
          border-radius: 6px;
          text-decoration: none;
          text-align: center;
        }
        .cta-button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Thank You for Contacting Me!</h1>
        </div>
        <div class="content">
          <p>Hi <strong>${name}</strong>,</p>
          <p>Thank you for reaching out to me. I truly appreciate your interest and will get back to you as soon as possible.</p>
          <p>Here’s a summary of the details you provided:</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p>If you have any additional questions or need further assistance, feel free to reply to this email.</p>
          <a href="mailto:${
            process.env.CONTACT_EMAIL
          }" class="cta-button">Reply to This Email</a>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
