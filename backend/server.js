const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware — these process every incoming request
app.use(cors()); // Allow frontend to call us
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Student API is running!" });
});

app.get("/api/students", async (req, res) => {
  try {
    // In real app: const students = await Student.find();
    const students = [
      { id: 1, name: "Arjun Sharma", course: "B.Tech CSE" },
      { id: 2, name: "Priya Patel", course: "MCA" },
    ];
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port change-2 ${PORT}`);
});
