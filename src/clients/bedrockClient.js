import { BedrockClient } from "@aws-sdk/client-bedrock";
import { systemLogger, errorLogger } from "../utils/logger.mjs";
import { utcTimestamp } from "../utils/timestamp.js";
const awsRegion = process.env.AWS_REGION;
const client = BedrockClient({ region: awsRegion });

export const command = async () => {
	const params = {
		// TODO: Add parameters here. Dynamically.
	};
	try {
		systemLogger.log(`[${utcTimestamp()}] - Initiating Bedrock Client.`);
		const data = await client.send(new CreateEnvironmentCommand(params));
		// process data.
	} catch (error) {
		errorLogger.log(`[${utcTimestamp()}] - Error Bedrock Client: ${err}.`);
	}
};
