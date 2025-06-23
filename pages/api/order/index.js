import connectDB from "../../../src/lib/db";
import Order from "../../../src/lib/models/Order";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const body = req.body;

      const order = new Order(body);
      const created = await order.save();

      return res.status(201).json(created);
    } catch (err) {
      console.error("Create order error:", err);
      return res.status(500).json({ message: "Failed to create order" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}