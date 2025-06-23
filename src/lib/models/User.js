import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Invalid email"],
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    role: {
      type: String,
      enum: ["buyer", "admin", "seller"],
      default: "buyer",
    },

    DOB: {
      type: String,
      validate: {
        validator: function (value) {
          const now = new Date();
          const inputDate = new Date(value);
          return inputDate < now;
        },
        message: "Date of birth must be in the past",
      },
    },

    phoneNo: { type: String },

    avatar: { type: String },

    gender: { type: String },

    paymentMethodInfo: { type: String },

    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite error in Next.js dev mode
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;