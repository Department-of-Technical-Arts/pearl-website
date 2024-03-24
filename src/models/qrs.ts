import mongoose, { Document, Model } from "mongoose";
import { Schema } from "mongoose";

const qrSchema = new Schema({
	entered_credentials: {
		type: Boolean,
		default: false,
	},
	scanned_by_guard: {
		type: Boolean,
		default: false,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	aadhar: {
		type: String,
	},
	college: {
		type: String,
	},
	scanned_by_guard_at: {
		type: Date,
		default: null,
	},
	entered_credentials_at: {
		type: Date,
		default: null,
	},
	pass: {
		type: Number,
		enum: [1, 2, 3, 4, 5],
		required: true,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const QR = mongoose.models.qrs || mongoose.model("qrs", qrSchema);

export default QR;
