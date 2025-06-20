import express from "express";
import Order from '../models/Order.js'
import Product from '../models/Product.js'
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const order = new Order(req.body);
    const created = await order.save();
    res.status(201).json(created);
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ message: "Failed to create order" });
  }
});
router.get('/myorder/:userId',async(req,res)=>{
    try{

        const order= await Order.find({user:req.params.userId}).populate('orderItems.productId','imgSrc1 name');
        res.json(order);
    }catch(error){
        console.error('Error fetching order:',error);
        res.status(500).json({message:"server error",error:error.message})
    }
})
export default router