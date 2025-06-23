import { verifyToken } from './jwt';

export function authMiddleware(handler) {
  return async (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ message: 'Token is invalid or expired' });
    }

    req.user = decoded; // Add user info to the request
    return handler(req, res);
  };
}