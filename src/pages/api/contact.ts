import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Configure nodemailer transporter (using Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, //  Gmail address
      pass: process.env.EMAIL_PASS, //  Gmail app password
    },
  });

  try {
    
    await transporter.sendMail({
      from: `"Overseas Voyages Website" <${process.env.EMAIL_USER}>`,
      to: 'team@overseasvoyages.com', // This is where emails will go
      replyTo: email, // reply directly to the user
      subject: `Website Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #4b5563;">Name:</strong> ${name}</p>
            <p><strong style="color: #4b5563;">Email:</strong> ${email}</p>
            <p><strong style="color: #4b5563;">Subject:</strong> ${subject}</p>
            <p><strong style="color: #4b5563;">Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #3b82f6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p style="font-size: 12px; color: #6b7280;">
            This email was sent from the contact form on overseasvoyages.com
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

This email was sent from the contact form on overseasvoyages.com
      `,
    });

    //  Send confirmation email to the user
    await transporter.sendMail({
      from: `"Overseas Voyages" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting Overseas Voyages',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank You for Contacting Overseas Voyages!</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have received your message regarding <strong>${subject}</strong>. Our team will review your inquiry and get back to you within 24-48 hours.</p>
          
          <p>Here's a summary of your message:</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #10b981;">
            <p>${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
          </div>
          
          <p>If you have any urgent inquiries, please call us at +1 (555) 123-4567.</p>
          
          <p>Best regards,<br>
          <strong>The Overseas Voyages Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          
          <p style="font-size: 12px; color: #6b7280;">
            Overseas Voyages<br>
            team@overseasvoyages.com<br>
           
          </p>
        </div>
      `,
    });

    res.status(200).json({ 
      success: true,
      message: 'Email sent successfully to team@overseasvoyages.com' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
}