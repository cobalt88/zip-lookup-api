import express from "express";
import * as zipControllers from "../controllers/zipControllers.js";
const router = express.Router();

router.get("/test", zipControllers.test);
// router.get("/all/:city/:state/:country", zipControllers.getAllZips);
router.get("/:city/:state/:country", zipControllers.getZip);
router.get("/:zip", zipControllers.getCityState);

router.post("/latlong", zipControllers.getLatLong);
router.post("/zipmarket", zipControllers.getZipAndMarket);
// router.post("/lookup", zipControllers.getZipJSON);
router.post("/mongo/ziplookup", zipControllers.getZipFromMongo);

export default router;
