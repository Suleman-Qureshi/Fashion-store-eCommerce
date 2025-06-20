import express from "express";
import ContactForm from "../models/ContactForm.js";
const router=express.Router();
router.post('/',async(req,res)=>{
    const {name,email,subject,message}=req.body;
    if(!name||!email||!subject||!message){
        return res.status(400).json({error:"All fields are required"})
    }
        try {
            const contact=new ContactForm({name,email,subject,message});
            await contact.save();
            res.status(201).json({message:"Message sent successfully"});
        } catch (error) {
            res.status(500).json({error:"Something went wrong"});
        }
});
export default router;