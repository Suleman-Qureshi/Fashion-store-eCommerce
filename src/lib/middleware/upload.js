import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensures `uploads` folder exists
const uploadPath = path.join(process.cwd(), 'public', 'uploads');

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // use absolute path
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = file.originalname.replace(ext, "").replace(/\s/g, "-");
    cb(null, name + "-" + Date.now() + ext);
  },
});

const upload = multer({ storage });
export default upload;