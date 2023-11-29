import { systemLogger, errorLogger, missingZipLogger } from "../utils/logger.mjs";
import { utcTimestamp } from "../utils/timestamp.js";

// Convert these to use the mongo endpoint
export const getMarket = async (req, res) => {
	const zip = await req.params.zip;
	systemLogger.log(`[${utcTimestamp()}] - Finding market for ${zip}.`);
	try {
		const data = await dynamo.findMarketByZip(zip);
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		errorLogger.log(`[${utcTimestamp()}] - Error finding market ${error}.`);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const getMarketAndZip = async (req, res) => {
	const city = req.body.city;
	const state = req.body.state;
	const country = req.body.country;
	try {
		systemLogger.log(`[${utcTimestamp()}] - Finding zip code for ${city}, ${state}, ${country}.`);
		const data = await dynamo.findZipCodeAndMarket(city, state, country);
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};
