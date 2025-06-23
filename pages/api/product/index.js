import connectDB from "../../../src/lib/db";
import Product from "../../../src/lib/models/Product";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await connectDB();

    try {
      const products = await Product.find({});
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      return res.status(500).json({ message: "Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}