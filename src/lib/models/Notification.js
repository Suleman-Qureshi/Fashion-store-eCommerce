import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["success", "info", "error"],
      default: "info",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false } // custom createdAt is already defined, so timestamps are turned off
);

// ✅ Safe for Next.js hot reloads
const Notification =
  mongoose.models.Notification ||
  mongoose.model("Notification", notificationSchema);

export default Notification;