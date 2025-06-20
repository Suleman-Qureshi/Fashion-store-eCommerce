import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from './models/Product.js'
import products from "./seed/product.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(async()=>{
    console.log("mongoDB conneted2");
    await Product.deleteMany();
    const insertedProduct = await Product.insertMany(products);
    console.log('🌱 Seed Data Inserted!');
    console.log(insertedProduct);
    process.exit();
}).catch(error=>{console.log(error);process.exit()})
