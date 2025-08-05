const express = require("express");
// const mongoose = require("mongoose");
require("dotenv").config();

// const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
