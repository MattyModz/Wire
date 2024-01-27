import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { fullName, message, senderEmail } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.gmailUser,
      pass: process.env.gmailPass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: "mikewiremail@gmail.com", // Replace with your Gmail address
      to: "mikewiremail@gmail.com", // Replace with the recipient email address
      subject: `Contact form submission from ${fullName}`,
      html: `<p>You have a new contact form submission</p><br>
             <p><strong>Email: </strong> ${senderEmail} </p><br>
             <p><strong>Name: </strong> ${fullName} </p><br>
             <p><strong>Message: </strong> ${message} </p><br>
            `,
    });

    console.log("Message Sent", emailRes.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
