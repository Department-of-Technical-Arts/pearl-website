import mongoConnect from "@/utils/connectMongo";
import { NextRequest, NextResponse } from "next/server";
import QR from "@/models/qrs";

export const POST = async (req: NextRequest) => {
	await mongoConnect();
	const body = await req.json();

	let { qrId, email, name, phone } = body;
	qrId = qrId.slice(8, -8);

	const checkIfQrExists = await QR.findOne({ _id: qrId });
	if (!checkIfQrExists) {
		return NextResponse.json({
			status: 400,
			error: true,
			message: "QR code does not exist",
		});
	}

	if (checkIfQrExists.entered_credentials) {
		return NextResponse.json({
			status: 400,
			error: true,
			message: "QR code has already been updated",
		});
	}

	if (!email || !name || !phone) {
		return NextResponse.json({
			status: 422,
			error: true,
			message: "Please fill all fields",
		});
	}
	// Checl if email is valid
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return NextResponse.json({
			status: 422,
			error: true,
			message: "Please enter a valid email",
		});
	}

	// Check if phone number is valid
	const phoneRegex = /^[0-9]{10}$/;
	if (!phoneRegex.test(phone)) {
		return NextResponse.json({
			status: 422,
			error: true,
			message: "Please enter a valid phone number",
		});
	}

	const updateQR = await QR.findOneAndUpdate(
		{ _id: qrId },
		{
			email,
			name,
			phone: phone,
			entered_credentials: true,
			entered_credentials_at: new Date(),
		},
		{ new: true }
	);

	return NextResponse.json({
		status: 200,
		error: false,
		message: "QR code updated successfully",
		data: body.qrId,
	});
};
