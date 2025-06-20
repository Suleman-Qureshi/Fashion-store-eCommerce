import express from "express"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import bcrypt from "bcryptjs"

const router=express.Router()
router.post('/register',async (req,res)=>{
    const {username,email, password,role}=req.body;
    try {

        const hashedPassword=await bcrypt.hash(password,10);
        const user = new User({
            username,
            email,
            password:hashedPassword,
            role,
        });
        await user.save();
        res.status(201).json({message:"Registered Successfully"});
    } catch (error) {
        res.status(500).json({message:"Registered Failed"});
    }
})
router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email});
        if(!user) return res.status(400).json({error:"Invalid credentials"})
        const isMatch=await await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(400).json({error:"Invalid credentials"})    
     const token=jwt.sign(
    {id:user._id,role:user.role,},
    process.env.JWT_SECRET_KEY,
    {expiresIn:"7d"}
);
res.status(200).json({
    token,
    user:{id:user._id,name:user.username,email:user.email,role:user.role}
});
    } catch (error) {
        res.status(500).json({error:"Login failed"})
    }
})
export default router