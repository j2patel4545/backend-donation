import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { DatabaseConnection } from './Database/Db.js';
import UserRouter from './Routers/UserRouter.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000; // Change port to 3000 or any other available port
// Database connection
DatabaseConnection();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', UserRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});