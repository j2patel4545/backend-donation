import express from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile, logoutUser } from '../Controlers/UserControler.js'
import { authenticateUser } from '../Middleware/authenticateUser.js';

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route to get user profile (requires authentication)
router.get('/profile', authenticateUser, getUserProfile);

// Route to update user profile (requires authentication)
router.put('/profile', authenticateUser, updateUserProfile);

// Route for user logout (can be used for token invalidation if needed)
router.post('/logout', authenticateUser, logoutUser);

export default router;
