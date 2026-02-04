import connectDB from "../../../src/lib/db";
import User from "../../../src/lib/models/User.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// ====== Setup file upload directory ======
const uploadDir = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ====== Multer storage setup ======
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext).replace(/\s+/g, "-");
    cb(null, `${name}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

// Disable default body parser for file upload
export const config = {
  api: {
    bodyParser: false,
  },
};

// Utility to run multer middleware as a promise
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;
  const method = req.method;

  if (!id) {
    return res
      .status(400)
      .json({ message: "User ID is required in the query." });
  }

  // ===== GET /api/user/:id =====
  if (method === "GET") {
    try {
      const user = await User.findById(id).select(
        "username email phoneNo DOB gender avatar paymentMethodInfo"
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({
        username: user.username,
        email: user.email,
        phoneNo: user.phoneNo,
        DOB: user.DOB,
        gender: user.gender,
        avatar: user.avatar,
        avatarUrl: user.avatar ? `/uploads/${user.avatar}` : null,
        paymentMethod: user.paymentMethodInfo,
      });
    } catch (error) {
      console.error("GET /api/user/[id] error:", error);
      return res
        .status(500)
        .json({ message: error?.message || "Internal server error" });
    }
  }

  // ===== PUT /api/user/:id =====
  if (method === "PUT") {
    try {
      // Run multer to handle file upload (and parse form-data)
      await runMiddleware(req, res, upload.single("avatar"));

      // Fields from multipart/form-data
      const { phoneNo, DOB, gender } = req.body;

      const updateData = {};
      if (phoneNo !== undefined) updateData.phoneNo = phoneNo;
      if (DOB !== undefined && DOB !== "") updateData.DOB = DOB; // or new Date(DOB)
      if (gender !== undefined) updateData.gender = gender;

      if (req.file) {
        updateData.avatar = req.file.filename;
      }

      const updated = await User.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true }
      );

      if (!updated) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({
        username: updated.username,
        email: updated.email,
        phoneNo: updated.phoneNo,
        DOB: updated.DOB,
        gender: updated.gender,
        avatar: updated.avatar,
        avatarUrl: updated.avatar ? `/uploads/${updated.avatar}` : null,
      });
    } catch (error) {
      console.error("PUT /api/user/[id] error:", error);
      return res
        .status(500)
        .json({ message: error?.message || "Internal server error" });
    }
  }

  // ===== Unsupported method =====
  res.setHeader("Allow", ["GET", "PUT"]);
  return res.status(405).end(`Method ${method} Not Allowed`);
}