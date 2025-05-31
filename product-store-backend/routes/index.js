import express from "express";
import v1Routes from "./v1/index.js";

const router = express.Router();

// API Versions
router.use("/v1", v1Routes);

// example of adding new versions here:
// router.use("/v2", v2Routes);
// router.use("/v3", v3Routes);

export default router; 