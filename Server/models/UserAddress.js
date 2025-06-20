import mongoose from "mongoose";
const userAddressSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    addressPlace:{type:String, required:true,enum:["Home","Work","Other"]},
    address:{
        houseNo: {type:String, required:true},
        street: {type:String, required:true},
        city: {type:String, required:true},
        state: {type:String,},
        pincode: {type:String, required:true},
        country: {type:String, required:true},
    },
    isDefault: {type:Boolean, default:false}
},{timestamps: true});
const Address= mongoose.model("UserAddress", userAddressSchema);
export default Address;
