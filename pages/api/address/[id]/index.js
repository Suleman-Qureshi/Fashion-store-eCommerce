import connectDB from '../../../../src/lib/db';
import Address from '../../../../src/lib/models/UserAddress';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connectDB();
  switch (method) {
    case 'GET':
      try {
        const addresses = await Address.find({ userId: id });

        if (!addresses || addresses.length === 0) {
          return res.status(404).json({ message: "No addresses found for this user" });
        }

        return res.status(200).json(addresses);
      } catch (error) {
        console.error("Error fetching addresses:", error);
        return res.status(500).json({ message: "Internal server error" });
      }

    case 'POST':
      try {
        const { addressPlace, address, isDefault } = req.body;

        if (
          !addressPlace ||
          !address ||
          !address.houseNo ||
          !address.street ||
          !address.city ||
          !address.pincode ||
          !address.country
        ) {
          return res.status(400).json({ message: "All fields are required" });
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ message: "Invalid userId" });
        }

        const newAddress = new Address({
          userId: id,
          addressPlace,
          address,
          isDefault,
        });

        const saved = await newAddress.save();
        return res.status(201).json(saved);
      } catch (error) {
        console.error("Error adding address:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
      }

    case 'PUT':
      try {
        const addressId = id;

        const selectedAddress = await Address.findById(addressId);
        if (!selectedAddress) {
          return res.status(404).json({ message: "Address not found" });
        }

        const userId = selectedAddress.userId;

        await Address.updateMany({ userId }, { isDefault: false });

        const updatedAddress = await Address.findByIdAndUpdate(
          addressId,
          { isDefault: true },
          { new: true }
        );

        return res.status(200).json(updatedAddress);
      } catch (error) {
        console.error("Error setting default address:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }

    default:
      return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}