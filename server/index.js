
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config( {path: '.env.local' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));
app.use(express.json());

// Contact Form Endpoint - EMAIL WILL BE SENT HERE
app.post('/api/contact', async (req, res) => {
  console.log('📧 Contact form received');
  
  try {
    const { name, email, subject, message } = req.body;
    
    console.log('Form data:', { name, email, subject, message });
    
    // Validate
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }
    
    // ========== EMAIL SENDING CODE ==========
    console.log('📤 Attempting to send email...');
    
    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS,  // Your App Password
      },
    });
    //${process.env.EMAIL_USER}team@overseasvoyages.com
    // 2. Email to (business email)
    const mailToYou = await transporter.sendMail({
      from: `"Overseas Voyages Contact Form" <team@overseasvoyages.com>`,
      to: ' fmoham24student@gmail.com', // WHERE YOU WANT TO RECEIVE EMAILS
      replyTo: email, // So you can reply directly to user
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #4b5563;">Name:</strong> ${name}</p>
            <p><strong style="color: #4b5563;">Email:</strong> ${email}</p>
            <p><strong style="color: #4b5563;">Subject:</strong> ${subject}</p>
            <p><strong style="color: #4b5563;">Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p style="font-size: 12px; color: #6b7280;">
            Sent from Overseas Voyages contact form
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

---
Sent from Overseas Voyages contact form
      `,
    });
    
    console.log('✅ Email to you sent:', mailToYou.messageId);
    
    // 3. Auto-reply to USER
    const mailToUser = await transporter.sendMail({
      from: `"Overseas Voyages" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting Overseas Voyages',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2563eb;">Thank You, ${name}!</h2>
          
          <p>We have received your message regarding <strong>${subject}</strong> and our team will get back to you within 24-48 hours.</p>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>Your message:</strong></p>
            <p>${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</p>
          </div>
          
          <p>If you have urgent inquiries, please email us at team@overseasvoyages.com</p>
          
          <p>Best regards,<br>
          <strong> Overseas Voyages Team</strong></p>
        </div>
      `,
      text: `
Thank you for contacting Overseas Voyages!

Dear ${name},

We have received your message regarding "${subject}" and our team will get back to you within 24-48 hours.

Your message:
${message.substring(0, 150)}${message.length > 150 ? '...' : ''}

If you have urgent inquiries, please email us at team@overseasvoyages.com

Best regards,
The Overseas Voyages Team
      `,
    });
    
    console.log('✅ Confirmation email sent to user');
    // ========== END EMAIL CODE ==========
    
    // Success response
    res.json({ 
      success: true, 
      message: 'Email sent successfully! You will receive a confirmation shortly.'
    });
    
  } catch (error) {
    console.error('❌ EMAIL ERROR:', error);
    
    // Detailed error info
    let errorMessage = 'Failed to send email';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Check your Gmail credentials.';
    } else if (error.code === 'EENVELOPE') {
      errorMessage = 'Invalid email address.';
    } else if (error.message.includes('Invalid login')) {
      errorMessage = 'Invalid Gmail credentials. Please check your email and app password.';
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Simple test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is ready to send emails!' });
});

// Start server
app.listen(PORT, () => {
  console.log('='.repeat(60));
  console.log('📧 EMAIL SERVER STARTED');
  console.log('='.repeat(60));
  console.log(`Port: ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log('\n📮 Endpoints:');
  console.log(`   • POST http://localhost:${PORT}/api/contact - Send contact form`);
  console.log(`   • GET  http://localhost:${PORT}/api/test    - Test server`);
  console.log('\n🔐 Gmail Setup Check:');
  console.log(`   • Email: ${process.env.EMAIL_USER || '❌ NOT SET'}`);
  console.log(`   • App Password: ${process.env.EMAIL_PASS ? '✅ SET' : '❌ NOT SET'}`);
  console.log('\n💡 Note: Make sure you have:');
  console.log('   1. 2FA enabled on your Gmail');
  console.log('   2. App password generated for "Mail"');
  console.log('='.repeat(60));
});