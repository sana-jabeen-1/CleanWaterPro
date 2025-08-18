import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { formType, formData } = req.body;

    // Format the email content dynamically
    let emailContent = `
      <h2 style="color: #333;">New ${formType} Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>`;

    Object.entries(formData).forEach(([key, value]) => {
      // Ensure correct handling of arrays (services list)
      if (Array.isArray(value)) {
        value = value.join(", "); // Convert array to readable string
      }

      emailContent += `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">
            <strong style="color: #555;">${key.replace(
              /([A-Z])/g,
              " $1"
            )}</strong>
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #222;">
            ${value || "Not Provided"}
          </td>
        </tr>`;
    });

    emailContent += `
        </tbody>
      </table>`;

    // Nodemailer Transporter Configuration
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.titan.email", // SMTP host for Titan Mail
    //   port: 587, // Port for STARTTLS
    //   secure: false, // Use TLS, but not the default `secure` (false for 587)
    //   auth: {
    //     user: process.env.EMAIL_USER, // Your Titan Mail email address
    //     pass: process.env.EMAIL_PASS, // Your Titan Mail password
    //   },
    //   tls: {
    //     rejectUnauthorized: false, // Allow self-signed certificates (optional, but recommended to keep false)
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // The host for Gmail's SMTP server
      port: 465, // Port number for SSL connection (465 is for SSL)
      secure: true, // Use SSL to encrypt the connection
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address (using environment variables for security)
        pass: process.env.EMAIL_PASS, // Your Gmail app-specific password (again, using environment variables for security)
      },
    });
   
    console.log('API hit:', req.body);
    await transporter.verify(); // remove after testing
    // console.log("SMTP Transporter configured:", {
    //   user: process.env.EMAIL_USER,
    //   pass: process.env.EMAIL_PASS, // Don't log the actual password for security purposes
    // });
    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New ${formType} Submission`,
      html: emailContent,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
