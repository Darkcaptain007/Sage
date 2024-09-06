import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const mongoUri = process.env.MONGODB_URI;

const dbConnect = async () => {
	try {
		const connectionInstance = await mongoose.connect(
			`${mongoUri}${DB_NAME}?authSource=admin`
		);

		console.log(
			`Connected to database. Connection Host: ${connectionInstance.connection.host}`
		);
	} catch (error) {
		console.log(`Error in connecting to database: ${error.message}`);
		process.exit(1);
	}
};

export default dbConnect;
