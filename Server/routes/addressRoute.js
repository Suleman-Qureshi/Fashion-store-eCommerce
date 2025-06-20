import exporess from"express";
import mongoose from "mongoose";
import Address from "../models/UserAddress.js";
const router=exporess.Router();
router.get("/:id",async(req,res)=>{
    try{
        const userId = req.params.id;
        const addresses=await Address.find({userId});
         if (!addresses || addresses.length === 0) {
      return res.status(404).json({ message: "No addresses found for this user" });
    }
    res.status(200).json(addresses);
    }catch(error) {
        console.error("Error fetching address:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
})
router.post("/:id",async(req,res)=>{
    console.log("recive request to create address")
    try{
       const userId = req.params.id;
       const {addressPlace, address,isDefault} = req.body;
       if(!addressPlace||!address||!address.houseNo||!address.street||!address.city||!address.pincode||!address.country) {
           return res.status(400).json({ message: "All fields are required" });
       }
       if(!mongoose.Types.ObjectId.isValid(userId)){
        return res.status(400).json({message:"Invalid userId"})
       }
       const newAddress=new Address({userId,addressPlace,address,isDefault});
       const saved=await newAddress.save();
       res.status(201).json(saved);
    }catch(error){
        console.error('Error adding address:',error);
        res.status(500).json({message:"Server error",error:error.message});
    }
})
router.delete('/:id/delete',async(req,res)=>{
     await Address.findByIdAndDelete(req.params.id);
        res.json({success:true});
})
router.put("/:id", async (req, res) => {
  try {
    const addressId = req.params.id;

    // Step 1: Get userId of this address
    const selectedAddress = await Address.findById(addressId);
    if (!selectedAddress) {
      return res.status(404).json({ message: "Address not found" });
    }

    const userId = selectedAddress.userId;

    // Step 2: Set all user's addresses to isDefault: false
    await Address.updateMany({ userId }, { isDefault: false });

    // Step 3: Set the chosen address to isDefault: true
    const updatedAddress = await Address.findByIdAndUpdate(
      addressId,
      { isDefault: true },
      { new: true }
    );

    res.status(200).json(updatedAddress);

  } catch (error) {
    console.error("Error setting default address:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
export default router;