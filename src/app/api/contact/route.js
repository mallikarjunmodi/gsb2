import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Split the TO_EMAIL string into an array of email addresses
    const toEmails = process.env.RESEND_TO_EMAIL.split(',').map(email => email.trim());

    const data = await resend.emails.send({
      from: `Global Shapers Bengaluru <contact@${process.env.RESEND_FROM_EMAIL}>`,
      to: toEmails,
      reply_to: email, // Set reply-to as the sender's email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
              }
              .header {
                background-color: #1e40af;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 5px 5px 0 0;
              }
              .content {
                padding: 20px;
                background-color: #f8fafc;
                border: 1px solid #e2e8f0;
                border-top: none;
                border-radius: 0 0 5px 5px;
              }
              .field {
                margin-bottom: 15px;
                padding: 10px;
                background-color: white;
                border-radius: 4px;
                border: 1px solid #e2e8f0;
              }
              .field-label {
                font-weight: bold;
                color: #1e40af;
                margin-bottom: 5px;
              }
              .field-value {
                color: #4b5563;
                word-break: break-word;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #6b7280;
                font-size: 12px;
                margin-top: 20px;
                border-top: 1px solid #e2e8f0;
              }
              .logo {
                max-width: 150px;
                margin-bottom: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="field-label">Name</div>
                  <div class="field-value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value">${phone}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>

              <div class="footer">
                <p>This email was sent from the Global Shapers Bengaluru contact form.</p>
                <p>© ${new Date().getFullYear()} Global Shapers Bengaluru. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
} 