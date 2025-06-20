// models/Notification.js
import mongoose from "mongoose"

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: { type: String, required: true },
  type: { type: String, enum: ['success', 'info', 'error'], default: 'info' },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.models.Notification || mongoose.model("Notification", notificationSchema);