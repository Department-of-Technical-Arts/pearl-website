import mongoConnect from "@/utils/connectMongo";
import { NextRequest, NextResponse } from "next/server";
import QR from "@/models/qrs";

export const POST = async (req: NextRequest) => {
	await mongoConnect();
	const body = await req.json();

	const { qrId, email, name, phoneNumber } = body;

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

	if (!email || !name || !phoneNumber) {
		return NextResponse.json({
			status: 422,
			error: true,
			message: "Please fill all fields",
		});
	}

	const updateQR = await QR.findOneAndUpdate(
		{ _id: qrId },
		{
			email,
			name,
			phone: phoneNumber,
			entered_credentials: true,
		},
		{ new: true }
	)

	return NextResponse.json({
		status: 200,
		error: false,
		message: "QR code updated successfully",
		data: updateQR,
	});
};
