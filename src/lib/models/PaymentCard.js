import mongoose from "mongoose";

const PaymentCardSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    brand: String,
    last4digit: {
      type: String,
      required: true,
      unique: true,
    },
    expiryMonth: String,
    expiryYear: String,
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // ✅ Fixed the typo here!
);

// ✅ SAFE FOR Next.js hot reloads
const PaymentCard =
  mongoose.models.PaymentCard || mongoose.model("PaymentCard", PaymentCardSchema);

export default PaymentCard;