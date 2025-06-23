import connectDB from "../../../../src/lib/db";
import User from "../../../../src/lib/models/User";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  await connectDB();

  const { id } = req.query;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.avatar = null;
    await user.save();

    return res.status(200).json({ message: "Avatar removed", user });
  } catch (error) {
    return res.status(500).json({ message: "Error removing avatar", error: error.message });
  }
}