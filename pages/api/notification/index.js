import connectDB from "../../../src/lib/db";
import Notification from "../../../src/lib/models/Notification";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  await connectDB();

  try {
    const { userId, message, type } = req.body;

    if (!userId || !message || !type) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newNotification = await Notification.create({ userId, message, type });

    return res.status(201).json(newNotification);
  } catch (error) {
    console.error("Notification creation failed:", error);
    return res.status(500).json({ error: "Failed to create notification" });
  }
}