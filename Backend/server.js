const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);

// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Serve React for any other route not caught above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 6161;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
