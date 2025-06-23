import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    label: { type: String, required: true },
    color: { type: String },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    imgSrc1: { type: String, required: true },
    imgSrc2: { type: String },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    new: { type: Boolean, default: false },
    discount: {
      oldPrice: { type: Number },
      offer: { type: Number }, // percentage or amount — customize easily
    },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError during dev / hot reload
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;