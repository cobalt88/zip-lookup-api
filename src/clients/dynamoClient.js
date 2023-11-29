import { DynamoDBClient, ScanCommand, UpdateItemCommand, GetItemCommand, DynamoDB } from "@aws-sdk/client-dynamodb";
const awsRegion = process.env.AWS_REGION;
import { systemLogger, errorLogger, missingZipLogger } from "../utils/logger.mjs";
import { utcTimestamp } from "../utils/timestamp.js";
export const client = new DynamoDBClient({ region: awsRegion });

export const findZipCode = async (city, state, country) => {
	console.log(city, state, country);
	try {
		systemLogger.log(`[${utcTimestamp()}] - Finding zip code for ${city}, ${state}, ${country}.`);
		// TODO: compile command to send to dynamo client.
		//Command needs to scan dynamo table for city-state match and return full 5 digit zip code.
		// if city state zip combo is not found - include in missingZip.log
		console.log(city, state, country);
		const params = {
			TableName: "zip-lookup",
			FilterExpression: "#MajorCity = :cityValue AND #StateName = :stateValue AND #CountryName = :countryValue",
			ExpressionAttributeValues: {
				":cityValue": { S: city },
				":stateValue": { S: state },
				":countryValue": { S: country },
			},
			ExpressionAttributeNames: {
				"#MajorCity": "Major.City",
				"#StateName": "State",
				"#CountryName": country.length === 2 ? "Country2" : "Country3",
			},
			// Limit: 1,
		};
		const command = await new ScanCommand(params);
		const data = await client.send(command);

		return { Zip: data.Items[0].Zipcode.S };
	} catch (error) {
		errorLogger.log(`[${utcTimestamp()}] - Error finding zip code for ${city}, ${state}, ${country}.`);
	}
};

export const findZipCodes = async (city, state, country) => {
	console.log(city, state, country);
	try {
		systemLogger.log(`[${utcTimestamp()}] - Finding zip code for ${city}, ${state}, ${country}.`);
		// TODO: if city state zip combo is not found - include in missingZip.log
		console.log(city, state, country);
		const params = {
			TableName: "zip-lookup",
			FilterExpression: "#MajorCity = :cityValue AND #StateName = :stateValue AND #CountryName = :countryValue",
			ExpressionAttributeValues: {
				":cityValue": { S: city },
				":stateValue": { S: state },
				":countryValue": { S: country },
			},
			ExpressionAttributeNames: {
				"#MajorCity": "Major.City",
				"#StateName": "State",
				"#CountryName": country.length === 2 ? "Country2" : "Country3",
			},
			// Limit: 1,
		};
		const command = await new ScanCommand(params);
		const data = await client.send(command);
		const zipData = data.Items;
		const allZips = [];

		for (let i = 0; i < zipData.length; i++) {
			const zipObject = { Zip: zipData[i].Zipcode.S };
			allZips.push(zipObject);
		}

		return allZips;
	} catch (error) {
		errorLogger.log(`[${utcTimestamp()}] - Error finding zip code for ${city}, ${state}, ${country}.`);
	}
};

export const findZipCodeAndMarket = async (city, state, country) => {
	console.log(city, state, country);
	try {
		systemLogger.log(`[${utcTimestamp()}] - Finding zip code for ${city}, ${state}, ${country}.`);
		// TODO: if city state zip combo is not found - include in missingZip.log
		console.log(city, state, country);
		const params = {
			TableName: "zip-lookup",
			FilterExpression: "#MajorCity = :cityValue AND #StateName = :stateValue AND #CountryName = :countryValue",
			ExpressionAttributeValues: {
				":cityValue": { S: city },
				":stateValue": { S: state },
				":countryValue": { S: country },
			},
			ExpressionAttributeNames: {
				"#MajorCity": "Major.City",
				"#StateName": "State",
				"#CountryName": country.length === 2 ? "Country2" : "Country3",
			},
			// Limit: 1,
		};
		const command = await new ScanCommand(params);
		const data = await client.send(command);

		return { Zip: data.Items[0].Zipcode.S, Market: data.Items[0].Market.S };
	} catch (error) {
		errorLogger.log(`[${utcTimestamp()}] - Error finding zip code for ${city}, ${state}, ${country}.`);
	}
};

export const findMarketByZip = async (zip) => {
	try {
		systemLogger.log(`[${utcTimestamp()}] - Finding market for ${zip}.`);
		const params = {
			TableName: "zip-lookup",
			FilterExpression: "#Zipcode = :zipValue",
			ExpressionAttributeValues: {
				":zipValue": { S: zip },
			},
			ExpressionAttributeNames: {
				"#Zipcode": "Zipcode",
			},
			// Limit: 1,
		};
		const command = await new ScanCommand(params);
		const data = await client.send(command);
		console.log(data);
		return {
			Market: data.Items[0].Market.S,
			State: data.Items[0].State.S,
			Country: data.Items[0].Country2.S,
		};
	} catch (error) {
		errorLogger.log(`[${utcTimestamp()}] - Error finding market for ${zip}.`);
	}
};
