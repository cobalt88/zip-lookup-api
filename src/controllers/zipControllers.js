import { systemLogger, errorLogger, missingZipLogger } from "../utils/logger.mjs";
import * as dynamo from "../clients/dynamoClient.js";
import { utcTimestamp } from "../utils/timestamp.js";
import * as mongo from "../clients/mongoDB.js";

//mongo - used to be dynamo
export const getZip = async (req, res) => {
	const city = await req.params.city;
	const state = await req.params.state;
	const country = await req.params.country;
	systemLogger.log(`[${utcTimestamp()}] - Finding zip code for ${city}, ${state}, ${country}.`);
	try {
		const data = await mongo.findZipCode(city, state, country);
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		errorLogger.log(`[${utcTimestamp()}] - Error finding zip code ${error}.`);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

//dynamo
export const getAllZips = async (req, res) => {
	const city = await req.params.city;
	const state = await req.params.state;
	const country = await req.params.country;
	systemLogger.log(`[${utcTimestamp()}] - Finding zip code for ${city}, ${state}, ${country}.`);
	try {
		const data = await dynamo.findZipCodes(city, state, country);
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		errorLogger.log(`[${utcTimestamp()}] - Error finding zip code ${error}.`);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

//dynamo
export const getZipJSON = async (req, res) => {
	const city = req.body.city;
	const state = req.body.state;
	const country = req.body.country;
	try {
		systemLogger.log(`[${utcTimestamp()}] - Finding zip code for ${city}, ${state}, ${country}.`);
		const data = await dynamo.findZipCode(city, state, country);
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const insertZip = async (req, res) => {
	// TODO: Implement insertZip.
};

export const getCityState = async (req, res) => {
	try {
		systemLogger.log(`[${utcTimestamp()}] - Finding city and state for ${zip}.`);
		res.status(501).json({ message: "Not Implemented" });
	} catch {
		errorLogger.log(`[${utcTimestamp()}] - Error finding city and state for ${zip}.`);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const getCountry = async (req, res) => {
	// TODO: Implement getCountry.
};

export const test = async (req, res) => {
	try {
		console.log("test");
		res.status(200).json({ message: "Made it to test route in zip code api" });
	} catch (error) {
		console.error(`error in test route: ${error}`);
	}
};

//mongo - returns all data based pon city, state, country
export const getZipFromMongo = async (req, res) => {
	const city = req.body.city;
	const state = req.body.state;
	const country = req.body.country;
	try {
		const data = await mongo.findZipCode(city, state, country);
		res.status(200).json(data);
	} catch (error) {}
};

// returns lan and long values for a given country and zip code
export const getLatLong = async (req, res) => {
	try {
		const country = req.body.country;
		const zip = req.body.zip;
		const data = await mongo.findLatLong(country, zip);
		const latLong = {
			lat: data.Latitude,
			long: data.Longitude,
		};
		res.status(200).json(latLong);
	} catch (error) {}
};

export const getZipAndMarket = async (req, res) => {
	try {
		const city = req.body.city;
		const state = req.body.state;
		const country = req.body.country;

		const data = await mongo.findZipCode(city, state, country);
		const data2 = {
			zip: data.Zipcode,
			market: data.Market,
		};

		res.status(200).json(data2);
	} catch (error) {
		res.status(500);
		console.error(error);
	}
};
