import * as mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const { MONGO_URI, MONGO_DATABASE, MONGO_COLLECTION, MONGO_COLLECTION_2 } = process.env;

let collection1;
let collection2;

const MongoClient = mongodb.MongoClient;
export const client = new MongoClient(MONGO_URI);

// full text search collection
export const connectToMongo = async () => {
	try {
		await client.connect();
		collection1 = client.db(MONGO_DATABASE).collection(MONGO_COLLECTION);
		console.log("Connected to MongoDB full text search");
		collection2 = client.db(MONGO_DATABASE).collection(MONGO_COLLECTION_2);
		console.log("Connected to MongoDB unique-zips");
	} catch (error) {
		console.error(error);
	}
};

// //unique-zips collection - indexed by country then zip
// export const connectToMongo2 = async () => {
// 	try {
// 		await client.connect();
// 		collection = client.db(MONGO_DATABASE).collection(MONGO_COLLECTION_2);
// 		console.log("Connected to MongoDB unique-zips");
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

export const findLatLong = async (country, zip) => {
	try {
		console.log(country, zip);
		const data = await collection2.findOne({ Country: country, Zipcode: zip });
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

//search the mongoDB Atlas full text search index default for a city, state, country match
export const findZipCode = async (city, state, country) => {
	console.log("made it to findZipCode");
	const filterQuery = `MajorCity: ${city} AND State: ${state} AND ${country.length === 2 ? "Country2" : "Country3"}: ${country}`;

	try {
		const data = await collection1
			.aggregate([
				{
					$search: {
						index: "zip-lookup-index",
						queryString: {
							defaultPath: "MajorCity",
							query: filterQuery,
						},
					},
				},
				{
					$limit: 1,
				},
			])
			.toArray();
		console.log(data);
		return data[0];
	} catch (error) {
		console.error(error);
	}
};
