import express from "express";
import apiRoutes from "./src/routes/index.js";
import dotenv from "dotenv";
import { systemLogger } from "./src/utils/logger.mjs";
import { utcTimestamp } from "./src/utils/timestamp.js";
import nodeProcess from "node:process";
import "dotenv/config";
import { connectToMongo } from "./src/clients/mongoDB.js";

const port = process.env.PORT || 5555;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

//connect to mongodb
connectToMongo();
app.listen(port, () => {
	systemLogger.log(`${utcTimestamp()} Server initiated, running on port ${port}`);
	console.log(`Server initiated for ${nodeProcess.pid}, running on port ${port}`);
});
