// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Add at the top

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const app = express();
const PORT = 9000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to local MongoDB
mongoose.connect("process.env.MONGO_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  referralCode: String,
  donationsRaised: Number,
});

const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Create new user (register)
app.post("/api/users", async (req, res) => {
  const { name, username, password } = req.body;
  const referralCode = username + "2025";
  const donationsRaised = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;

  try {
    const newUser = new User({ name, username, password, referralCode, donationsRaised });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

// Get all users
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Login (basic logic)
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Leaderboard route – returns users sorted by donationsRaised (descending)
app.get("/api/leaderboard", async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ donationsRaised: -1 }); // -1 = descending
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
});


app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
