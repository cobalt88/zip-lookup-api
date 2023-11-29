import * as mongo from "../clients/mongoDB.js";

export const authenticate = async (req, res, next) => {
	const apiKey = req.headers["x-api-key"];

	if (!apiKey) {
		return res.status(401).json({ message: "API key is missing" });
	}

	const data = await mongo.findApiKey(apiKey);

	if (data === null || data.isValid === 0) {
		return res.status(401).json({ message: "Invalid API key" });
	}

	next();
};
