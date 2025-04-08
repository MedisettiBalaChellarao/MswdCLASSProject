const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const Feedback = require("../models/feedback");

const router = express.Router(); // Use router instead of creating a new Express app

router.use(bodyParser.json());

// Endpoint to handle feedback submission
router.post("/submit-feedback", async (req, res) => {
  const { name, email, feedback } = req.body;

  try {
    // Save feedback to the database
    const feedbackEntry = new Feedback({ name, email, feedback });
    await feedbackEntry.save();

    // Send acknowledgment email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Set in .env file
        pass: process.env.GMAIL_PASSWORD, // Set in .env file
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thank you for your feedback, ${name}!`,
      text: `Hi ${name},\n\nWe have received your feedback: "${feedback}".\nWe will get back to you soon!\n\nBest Regards,\n[Your Company Name]`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Feedback submitted successfully and email sent!" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Something went wrong." });
  }
});

module.exports = router; // Export the router properly
