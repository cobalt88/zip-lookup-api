export const systemTimestamp = () => {
	return new Date().toLocaleString();
};

export const utcTimestamp = () => {
	return new Date().toUTCString();
};

export const unixTimestamp = () => {
	return new Date().getTime();
};
