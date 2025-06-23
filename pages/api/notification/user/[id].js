import connectDB from "../../../../src/lib/db";
import Notification from "../../../../src/lib/models/Notification";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connectDB();

  if (method === "GET") {
    try {
      // Validate userId format
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid userId" });
      }

      const notifications = await Notification.find({
        userId: new mongoose.Types.ObjectId(id),
      }).sort({ createdAt: -1 });

      return res.status(200).json(notifications);
    } catch (error) {
      console.error("Notification fetch failed:", error);
      return res.status(500).json({ error: "Failed to fetch notifications" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: `Method ${method} Not Allowed` });
  }
}