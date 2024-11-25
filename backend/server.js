const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const ruleRoutes = require("./routes/ruleRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/rules", ruleRoutes);

// Serve Frontend in Production
if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // Catch-all route to serve the React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
} else {
  // Development environment setup
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
  