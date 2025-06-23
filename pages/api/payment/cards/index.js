import connectDB from "../../../../src/lib/db";
import PaymentCard from "../../../../src/lib/models/PaymentCard";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const { userId, last4digit, expiryMonth, expiryYear, brand } = req.body;

      const card = new PaymentCard({
        userId,
        last4digit,
        expiryMonth,
        expiryYear,
        brand,
      });

      await card.save();
      return res.status(201).json(card);
    } catch (err) {
      console.error("Add card error:", err);
      return res.status(500).json({ error: "Failed to add card" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}