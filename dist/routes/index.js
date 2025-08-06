import express from "express";
import healthRoutes from "./health/index.js";
var router = express.Router();
router.use("/health", healthRoutes);
export default router;