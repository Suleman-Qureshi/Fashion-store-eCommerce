import connectDB from "../../../../src/lib/db";
import Notification from "../../../../src/lib/models/Notification";

export default async function handler(req, res) {
  const {
    query: { notificationId },
    method,
  } = req;

  await connectDB();

  console.log(notificationId)
  if (method === "DELETE") {
    try {
      const deleted = await Notification.findByIdAndDelete(notificationId);


      if (!deleted) {
        return res.status(404).json({ error: "Notification not found" });
      }

      return res.status(200).json({ message: "Notification deleted" });
    } catch (error) {
      console.error("Delete failed:", error);
      return res.status(500).json({ error: "Failed to delete notification" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}