import connectDB from "../../../../src/lib/db";
import User from "../../../../src/lib/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
   console.log("[API] Register HIT")
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();
console.log("[API] Connected to DB");
  const { username, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    return res.status(201).json({ message: "Registered Successfully" });
  } catch (error) {
    console.error("Registration error:", error.message);
    return res.status(500).json({ message: "Registration failed" });
  }
}