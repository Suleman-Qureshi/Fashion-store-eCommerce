import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        name: String,
        qty: Number,
        image: String,
        price: Number,
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      },
    ],
    shippingAddress: {
      address: String,
      city: String,
      postalCode: String,
      country: String,
    },
    paymentMethod: String,
    isPaid: Boolean,
    paidAt: Date,
    isDelivered: Boolean,
    deliveredAt: Date,
    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Deliverd", "Cancelled"],
      default: "Pending",
    },
    totalPrice: Number,
  },
  { timestamps: true }
);
export default mongoose.model("order", orderSchema);
