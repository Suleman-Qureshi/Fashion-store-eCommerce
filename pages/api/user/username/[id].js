import connectDB from "../../../../src/lib/db";
import User from "../../../../src/lib/models/User";
import { requireAuth } from "../../../../src/lib/middleware/authMiddle";

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const user = await requireAuth(req);

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { id } = req.query;

  try {
    const profile = await User.findOne({_id:id}).select(
      "username email phoneNo DOB gender avatar paymentMethodInfo"
    );

    if (!profile) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      username: profile.username,
      email: profile.email,
      phoneNo: profile.phoneNo,
      DOB: profile.DOB,
      gender: profile.gender,
      avatar: profile.avatar,
      paymentMethod: profile.paymentMethodInfo,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}