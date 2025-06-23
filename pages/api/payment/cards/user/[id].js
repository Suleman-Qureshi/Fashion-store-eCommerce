import connectDB from "../../../../../src/lib/db";
import PaymentCard from "../../../../../src/lib/models/PaymentCard";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const { id } = req.query;

      const cards = await PaymentCard.find({userId:id});

      return res.status(200).json(cards);
    } catch (err) {
      console.error("Fetch cards error:", err);
      return res.status(500).json({ error: "Failed to fetch cards" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}