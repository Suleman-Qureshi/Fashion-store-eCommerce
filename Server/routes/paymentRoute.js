import express from "express";
import PaymentCard from "../models/PaymentCard.js";
const router = express.Router();
router.get("/cards/:userId",async(req,res)=>{
    const card=await PaymentCard.find({userId:req.params.userId});
    res.json(card)
});
router.post('/cards',async(req,res)=>{
    const {userId,last4digit,expiryMonth,expiryYear,brand}=req.body;
    const card=new PaymentCard({userId,last4digit,expiryYear,expiryMonth,brand});
    await card.save();
    res.json(card);
});
// PUT /cards/:id
router.put("/cards/:id", async (req, res) => {
  try {
    const cardId = req.params.id;
    const targetCard = await PaymentCard.findById(cardId);
    if (!targetCard) {
      return res.status(404).json({ message: "Card not found" });
    }
    const userId = targetCard.userId;
    await PaymentCard.updateMany(
      { userId: userId },
      { $set: { isDefault: false } }
    );
    const updatedCard = await PaymentCard.findByIdAndUpdate(
      cardId,
      { isDefault: true },
      { new: true }
    );
    res.json(updatedCard);
  } catch (error) {
    console.error("Error setting default card:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.delete("/cards/:id",async(req,res)=>{
    await PaymentCard.findByIdAndDelete(req.params.id);
    res.json({success:true});
})
export default router;