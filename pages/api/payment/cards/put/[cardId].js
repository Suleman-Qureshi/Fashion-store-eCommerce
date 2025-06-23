import connectDB from "../../../../../src/lib/db";
import PaymentCard from "../../../../../src/lib/models/PaymentCard";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "PUT") {
    try {
      const { cardId } = req.query;

      const targetCard = await PaymentCard.findById(cardId);
      if (!targetCard) {
        return res.status(404).json({ message: "Card not found" });
      }

      // Set all cards of the user to isDefault: false
      await PaymentCard.updateMany(
        { userId: targetCard.userId },
        { $set: { isDefault: false } }
      );

      // Set the selected card to isDefault: true
      const updatedCard = await PaymentCard.findByIdAndUpdate(
        cardId,
        { isDefault: true },
        { new: true }
      );

      return res.status(200).json(updatedCard);
    } catch (error) {
      console.error("Error setting default card:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}