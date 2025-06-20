import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db.js"
import contactRoute from "./routes/ConactForm.js"
import authRoutes from "./routes/auth.js"
import orderRoutes from './routes/orderRoutes.js';
import userRouter from './routes/userRoute.js'
import paymentRouter from "./routes/paymentRoute.js"
import addressRoute from "./routes/addressRoute.js"
import productRoute from "./routes/productRoute.js"
import notificationRoute from "./routes/notificationRoute.js"
const PORT=process.env.PORT || 5000
dotenv.config();
connectDB();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api",productRoute)
app.use("/api/contactForm",contactRoute);
app.use("/api",authRoutes)
app.use("/api",orderRoutes)
app.use("/api/user",userRouter)
app.use("/uploads", express.static("uploads"));
app.use("/api/",paymentRouter);
app.use("/api/address/",addressRoute);
app.use("/api/notification",notificationRoute)
app.listen(PORT,()=>{console.log(`Your Web App is running on: http://localhost:${PORT}`)})