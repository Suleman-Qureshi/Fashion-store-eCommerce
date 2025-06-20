import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,requied:true,unique:true,match:[/\S+@\S+\.\S+/,"Invalid email"]},
    password:{type:String,required:true,minlength:8},
    role:{type:String,enum:["buyer","admin",'seller'],default:"buyer"},
    DOB:{type:String,validator:function(value){return value< new Date();},message:"Date of birth nust me in the past"},
    phoneNo:{type:String},
    avatar:{type:String},
    gender:{type:String},
    paymentMethodInfo:{type:String},
    wishlist:[
        {type:mongoose.Schema.Types.ObjectId,ref:"Product"},
    ]
},{timestamps:true})
export default mongoose.model("User",userSchema);