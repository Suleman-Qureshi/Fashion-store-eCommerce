import { isAdmin,verifyToken,requireAuth } from '../../../../src/lib/middleware/authMiddle';
import {  } from '../../../../src/lib/jwt';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const user = await verifyToken(req);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
return res.status(200).json({
  message: 'Welcome to your dashboard',
  user,
});
  } catch (error) {
    console.error('Error in admin route:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}