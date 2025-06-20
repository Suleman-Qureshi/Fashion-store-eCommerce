import express from "express";
import User from "../models/User.js"
import authenticationToken from "../middleware/authMiddle.js"
import upload from "../middleware/upload.js"
const router = express.Router()

router.get('/username',authenticationToken,async (req,res)=>{
    try{
      const user = await User.findById(req.user.id).select('username');
      if(!user){
        return res.status(404).json({message:'user not found'});
      } 
      res.json({username:user.username,email:user.email,phoneNo:user.phoneNo,DOB:user.DOB,gender:user.gender,avatar:user.avatar,paymentMehod:user.paymentMethodInfo});
    }catch(error){
res.status(500).json({message:'Server error',error:err.message})
    }
});
router.get('/:id',async (req,res)=>{
  try{
    const user=await User.findById(req.params.id).select('username email phoneNo DOB gender avatar paymentMethod');
    if(!user){
      return res.status(404).json({message:"User not found"});
    }
    res.json({username:user.username,email:user.email,phoneNo:user.phoneNo,DOB:user.DOB,gender:user.gender,avatar:user.avatar,paymentMehod:user.paymentMethodInfo});
  }catch(error){
    res.status(500).json({message:"Server Error",error:error.message})
  }
})
router.put("/:id", upload.single("avatar") ,async (req,res)=>{
 try{
  const {username,email,phoneNo,DOB,gender}=req.body;
  const updateData={username,email,phoneNo,DOB,gender};
  if(req.file){ updateData.avatar=req.file.filename}
   const updateUser=await User.findByIdAndUpdate(
    req.params.id,
    {$set:updateData},
    {new:true,runValidators:true}
   );
   res.status(200).json(updateUser);
 }catch(error){
  res.status(500).json({message:error.message})
 }
})

router.put("/:id/remove-avatar",async(req,res)=>{
  try{
    const user=await User.findById(req.params.id);
    if(!user) return res.status(404).json({message:"User not found"});
    user.avatar=null;
    await user.save();
    res.status(200).json({message:"Avatar remved",user});
  }catch(error){
    console.error("Faild to remove avatar:",error);
    res.status(500).json({message:"Error removing avatar"})
  }
})
export default router