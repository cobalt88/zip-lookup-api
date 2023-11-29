import express from "express";
import * as marketControllers from "../controllers/marketControllers.js";
const router = express.Router();

router.get("/:zip", marketControllers.getMarket);

router.post("/lookup", marketControllers.getMarketAndZip);

export default router;
