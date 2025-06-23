import jwt from 'jsonwebtoken';

export function requireAuth(handler) {
  return async (req, res) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized - no token' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
     
      req.user = user;

      return handler(req, res);
    } catch (err) {
      return res.status(401).json({ message: 'Unauthorized - invalid token' });
    }
  };
  
}
export function isAdmin(user) {
  return user && user.role === 'admin';
}
export async function verifyToken(req) {
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split(' ')[1];

  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch {
    return null;
  }
}