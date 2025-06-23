import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError in dev
const ContactForm =
  mongoose.models.ContactForm ||
  mongoose.model("ContactForm", contactFormSchema);

export default ContactForm;