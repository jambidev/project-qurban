// Express server with MySQL connection for Surya Ternak application
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql2/promise";
import compression from "compression";
import helmet from "helmet";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "surya_ternak",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Create MySQL connection pool - only if not in production or if DB env vars are set
let pool;
if (
  process.env.NODE_ENV !== "production" ||
  (process.env.DB_HOST && process.env.DB_USER)
) {
  try {
    pool = mysql.createPool(dbConfig);
    console.log("Database pool created");
  } catch (error) {
    console.error("Failed to create database pool:", error);
  }
}

// Test database connection
async function testDbConnection() {
  if (!pool) return false;

  try {
    const connection = await pool.getConnection();
    console.log("Database connection successful");
    connection.release();
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

const app = express();
const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, "dist");

// Middleware
app.use(compression()); // Compress responses
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP for simplicity in development
    crossOriginEmbedderPolicy: false, // Allow loading resources from different origins
  }),
); // Set security headers
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Serve static files
app.use(express.static(distPath));

// API routes
app.get("/api/health", async (req, res) => {
  const dbConnected = pool ? await testDbConnection() : false;
  res.json({
    status: "ok",
    dbConnected,
    timestamp: new Date().toISOString(),
  });
});

// Example API endpoint using database
app.get("/api/products", async (req, res) => {
  if (!pool) {
    return res.status(503).json({ error: "Database not available" });
  }

  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// SPA fallback: always serve index.html for any non-API route
app.use((req, res, next) => {
  if (req.path.startsWith("/api/")) {
    return next();
  }
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  if (pool) testDbConnection();
});
