import connectDB from "../../../../../src/lib/db";
import PaymentCard from "../../../../../src/lib/models/PaymentCard";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "DELETE") {
    try {
      const { cardId } = req.query;

      await PaymentCard.findByIdAndDelete(cardId);
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error("Delete card error:", err);
      return res.status(500).json({ error: "Failed to delete card" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}