import mongoose from "mongoose";
const PaymentCardSchema=new mongoose.Schema({
userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
brand:String,
last4digit:{type:String,required:true,unique:true},
expiryMonth:String,
expiryYear:String,
isDefault:{type:Boolean,default:false}
},{timeStamp:true});
export default mongoose.models.PaymentCardSchema || mongoose.model("PaymentCard",PaymentCardSchema);