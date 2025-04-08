const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes"); 
dotenv.config();
connectDB();

const app = express();


app.use(cors());



app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);

const PORT = process.env.PORT || 6161;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));