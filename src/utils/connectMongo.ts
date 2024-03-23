import mongoose from "mongoose";

const connectMongo = async () => {
	try {
		const uri = process.env.MONGO_URI;
		if (!uri) {
			throw new Error("MONGO_URI not found in .env");
		}
		await mongoose.connect(uri, {});
		console.log("MongoDB connected");
	} catch (error) {
		console.error("MongoDB connection failed");
	}
};

export default connectMongo;
