import express from "express";
import healthController from "../../controllers/health/index.js";
var router = express.Router();
router.get("/", healthController.getHealthStatus);
export default router;