import mongoose from "mongoose";
import Notification from "../models/Notification.js"
import router from "./paymentRoute.js";
router.post('/', async (req, res) => {
  const { userId, message, type } = req.body;
  try {
    const newNotification = await Notification.create({ userId, message, type });
    res.status(201).json(newNotification);
    alert("you have new notification")
  } catch (error) {
    res.status(500).json({ error: "Failed to create notification" });
  }
});
router.get('/:userId', async (req, res) => {
 try {
    const userId = new mongoose.Types.ObjectId(req.params.userId);
    const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    console.error("Notification fetch failed:", error);
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Notification deleted' });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete notification" });
  }
});
export default router