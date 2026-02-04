import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGO_URI;
if (!MONGODB_URI) {
  throw new Error(
    "⚠️ Please define the MONGO_URI environment variable in .env.local",
  );
}
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    console.log("Connecting to MongoDB...", MONGODB_URI);
    cached.promise = mongoose.connect(MONGODB_URI, { dbName: "BackEndPractices" });
  }
  try {
    cached.conn = await cached.promise;
    console.log("✅ MongoDB connected");
    return cached.conn;
  } catch (err) {
    console.error("❌ MongoDB connection failed!");
    console.error("message:", err.message);
    console.error("name:", err.name);
    console.error("full error:");
    console.dir(err, { depth: 10 });
    throw err;
  }
}
export default connectDB;
