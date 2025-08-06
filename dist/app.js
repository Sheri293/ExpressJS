import express from "express";
import routes from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
var app = express();
var PORT = process.env.PORT || 8000;
app.use(express.json());
app.use("/api", routes);
app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT));
});