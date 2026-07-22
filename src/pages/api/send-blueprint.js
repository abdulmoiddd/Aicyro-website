// src/pages/api/send-blueprint.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, role } = req.body;

  // 1. LOGGING (For testing without SMTP)
  console.log("--- NEW LEAD MAGNET REQUEST ---");
  console.log(`Name: ${name}, Email: ${email}, Role: ${role}`);
  console.log("-------------------------------");

  try {
    // 2. REAL EMAIL SENDING (Uncomment below after installing 'nodemailer')
    
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your SMTP provider
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Add to .env.local
        pass: process.env.EMAIL_PASS, // Add to .env.local
      },
    });

    // Email to User (The Blueprint)
    await transporter.sendMail({
      from: '"Aicyro Team" <no-reply@aicyro.com>',
      to: email,
      subject: "Here is your MVP Launch Blueprint 🚀",
      html: `
        <h1>Hi ${name},</h1>
        <p>Thanks for requesting the MVP Launch Blueprint. We're excited to see what you build!</p>
        <p><strong><a href="https://aicyro.com/assets/Aicyro_MVP_Blueprint.pdf">Click here to download the PDF</a></strong></p>
        <br/>
        <p>Best,</p>
        <p>The Aicyro Team</p>
      `,
    });

    // Email to Admin (Notification)
    await transporter.sendMail({
      from: '"Lead Bot" <no-reply@aicyro.com>',
      to: "admin@aicyro.com",
      subject: `New Lead: ${name} (${role})`,
      text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\nSource: MVP Blueprint`,
    });
    

    return res.status(200).json({ success: true, message: "Email processed" });
  } catch (error) {
    console.error("Email API Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}