// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./config/db");
// const ruleRoutes = require("./routes/ruleRoutes");

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json()); // Parse JSON requests

// // Connect to MongoDB
// connectDB();

// // API Routes
// app.use("/api/rules", ruleRoutes);

// // Serve Frontend in Production
// if (process.env.NODE_ENV === "production") {
//   // Serve static files from the React app
//   app.use(express.static(path.join(__dirname, "../frontend/build")));

//   // Catch-all route to serve the React app
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
//   });
// } else {
//   // Development environment setup
//   app.get("/", (req, res) => {
//     res.send("API is running...");
//   });
// }

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
  
// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const ruleRoutes = require('./routes/ruleRoutes');

// dotenv.config();
// connectDB();

// const app = express();

// app.use(express.json()); // Middleware to parse JSON

// // Routes
// app.use('/api', ruleRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({ error: err.message });
// });

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const ruleRoutes = require('./routes/ruleRoutes');

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());

// // Routes
// app.use('/api/rules', ruleRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const ruleRoutes = require('./routes/ruleRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/rules', ruleRoutes);

// Error Handling Middleware
const errorHandler = require('./middleware/errorMiddleware');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post('/api/rules/test', (req, res) => {
  res.send('Test POST route working');
});
