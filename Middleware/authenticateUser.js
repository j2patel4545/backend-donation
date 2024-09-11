import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const authenticateUser = (req, res, next) => {
    // Extract token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        // Verify the token using JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user ID to the request object
        req.userId = decoded.id;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handle token verification errors
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};
