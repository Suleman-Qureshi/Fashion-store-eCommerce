import connectDB from "../../../../src/lib/db";
import Order from "../../../../src/lib/models/Order";
import Product from "../../../../src/lib/models/Product";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const { id } = req.query;

      const orders = await Order.find({ user: id })
        .populate("orderItems.productId", "imgSrc1 name");

      return res.status(200).json(orders);
    } catch (error) {
      console.error("Error fetching user orders:", error);
      return res.status(500).json({
        message: "Server error",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}