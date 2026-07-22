import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, company, industry, score, primaryGoal } = req.body;

  console.log("--- AI ASSESSMENT ---");
  console.log(`User: ${name} (${company})`);
  console.log(`Score: ${score}/100`);
  console.log(`Goal: ${primaryGoal}`);

  try {
    // UNCOMMENT TO ENABLE REAL EMAILS
    /*
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Report to User
    await transporter.sendMail({
      from: '"Aicyro AI Team" <no-reply@aicyro.com>',
      to: email,
      subject: `Your AI Readiness Score: ${score}/100 📊`,
      html: `
        <h1>Hi ${name},</h1>
        <p>Your business (${company}) scored <strong>${score}/100</strong> on our AI Readiness Assessment.</p>
        <p><strong>Primary Opportunity:</strong> ${primaryGoal}</p>
        <hr/>
        <h3>Next Steps:</h3>
        <p>1. Review your data infrastructure gaps.</p>
        <p>2. Identify one low-risk pilot project.</p>
        <p>3. <a href="https://aicyro.com/contact">Book a consultation</a> to interpret these results.</p>
        <br/>
        <p>Best,</p>
        <p>Aicyro Solutions</p>
      `,
    });
    */

    return res.status(200).json({ success: true, message: "Assessment processed" });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}