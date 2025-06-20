import Product from "../models/Product.js";
import express from "express";
const router = express.Router();
router.get("/product", async (req, res) => {
   try {
    const products = await Product.find({});
    res.status(200).json(products);
   }catch(error){
    console.error("Error fetching products:",error)
    res.status(500).json({message:"Server Error"})
   }
})
export default router;