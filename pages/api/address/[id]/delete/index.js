import connectDB from '../../../../../src/lib/db';
import Address from '../../../../../src/lib/models/UserAddress';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connectDB();
  if (method === 'DELETE') {
    try {
      const deletedAddress = await Address.findByIdAndDelete(id);

      if (!deletedAddress) {
        return res.status(404).json({ message: 'Address not found' });
      }

      return res.status(200).json({
        success: true,
        message: 'Address deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting address:', error);
      return res.status(500).json({
        message: 'Internal server error',
        error: error.message,
      });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}