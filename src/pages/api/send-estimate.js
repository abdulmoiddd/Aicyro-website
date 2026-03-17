export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, projectType, features, estimate } = req.body;

  console.log("--- PROJECT ESTIMATE GENERATED ---");
  console.log(`Client: ${name} (${email})`);
  console.log(`Type: ${projectType.join(", ")}`);
  console.log(`Estimate: $${estimate.min} - $${estimate.max}`);

  try {
    // UNCOMMENT FOR REAL EMAILS
    /*
    const transporter = nodemailer.createTransport({ ... });

    await transporter.sendMail({
      from: '"Aicyro Estimates" <no-reply@aicyro.com>',
      to: email,
      subject: `Your Project Estimate: $${estimate.min} - $${estimate.max}`,
      html: `
        <h1>Project Estimate Summary</h1>
        <p><strong>Platform:</strong> ${projectType.join(", ")}</p>
        <p><strong>Features:</strong> ${features.join(", ")}</p>
        <h2>Est. Budget: $${estimate.min} - $${estimate.max}</h2>
        <br/>
        <p>Ready to build? <a href="https://aicyro.com/contact">Book a call here</a>.</p>
      `
    });
    */

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}