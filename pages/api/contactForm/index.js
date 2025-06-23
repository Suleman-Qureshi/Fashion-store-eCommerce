import connectDB from "../../../src/lib/db";
import ContactForm from "../../../src/lib/models/ContactForm";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  await connectDB();

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = new ContactForm({ name, email, subject, message });
    await contact.save();

    return res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}