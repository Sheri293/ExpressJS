import express from "express";

import healthRoutes from "./health/index.js";

const router = express.Router();

router.use("/health", healthRoutes);

export default router;


echo const unused = "test"; > bad-test.js