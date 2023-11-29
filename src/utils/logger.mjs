import { Console } from "console";
import { createWriteStream } from "fs";

export const missingZipLogger = new Console({
	stdout: createWriteStream("./src/logs/missingZip.log", {
		flags: "a",
	}),
});

export const systemLogger = new Console({
	stdout: createWriteStream("./src/logs/system.log", {
		flags: "a",
	}),
});

export const errorLogger = new Console({
	stdout: createWriteStream("./src/logs/error.log", {
		flags: "a",
	}),
});
