import mongoose from "mongoose";
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
	scanned_by_guard_at: {
		type: Date,
		default: null,
	},
	entered_at: {
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

const QR = mongoose.models.qr || mongoose.model("qr", qrSchema);

export default QR;
