import express from "express";
import path from "path";
import { connectDB } from "./config/db.js";
import apiRoutes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

// Load .env file (for local development and testing)
// In actual production deployment, use environment variables directly
const { config } = await import("dotenv");
config();

// Initialize the app
const application = express();

// CORS middleware
application.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
const __dirname = path.resolve();

// Middleware
application.use(express.json());

// API Routes
application.use("/api", apiRoutes);

// Serve static files from the React app
application.use(express.static(path.join(__dirname, '/product-store-frontend/dist')));

// Catch all handler: send back React's index.html file for any non-API routes
application.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'product-store-frontend', 'dist', 'index.html'));
});

// Error Handling Middleware
application.use(notFound);
application.use(errorHandler);

// Start the server
application.listen(process.env.PORT, async () => {
  try {
    const databaseConnection = await connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
});
