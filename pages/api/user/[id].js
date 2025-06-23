import connectDB from "../../../src/lib/db";
import User from "../../../src/lib/models/User.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Setup file upload directory
const uploadDir = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage setup
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
    fn(req, res, (result) => (result instanceof Error ? reject(result) : resolve(result)));
  });
}

export default async function handler(req, res) {
  await connectDB();

  const {
    query: { id },
    method,
  } = req;

  if (!id) {
    return res.status(400).json({ message: "User ID is required in the query." });
  }

  switch (method) {
    case "GET":
      try {
        const user = await User.findById({_id:id}).select(
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
          paymentMethod: user.paymentMethodInfo,
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    case "PUT":
      try {
        // Run multer to handle file upload
        await runMiddleware(req, res, upload.single("avatar"));

        // Parse `multipart/form-data` into `req.body`
        const { username, email, phoneNo, DOB, gender } = req.body;

        const updateData = {
          username,
          email,
          phoneNo,
          DOB,
          gender,
        };

        if (req.file) {
          updateData.avatar = req.file.filename;
        }

        const updated = await User.findByIdAndUpdate(
          {_id:id},
          { $set: updateData },
          { new: true, runValidators: true }
        );

        return res.status(200).json(updated);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}