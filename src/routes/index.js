import express from "express";
const router = express.Router();
import { authenticate } from "../utils/auth.js";

import zipRoutes from "./zipRoutes.js";
import marketRoutes from "./marketRoutes.js";

router.use("/zip", zipRoutes);
router.use("/market", marketRoutes);

export default router;
