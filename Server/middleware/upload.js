import multer from "multer";
import path from "path";
import fs from "fs";
const uploadPath = path.join("uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/");
    },
    filename:function(req,file,cb){
        const ext=path.extname(file.originalname);
        const name=file.originalname.replace(ext,"").replace(/\s/g,"-");
        cb(null, name + "-"+Date.now() + ext)
    }
})
const upload=multer({storage})
export default upload;