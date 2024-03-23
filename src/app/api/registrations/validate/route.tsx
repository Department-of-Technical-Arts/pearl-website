import mongoConnect from "@/utils/connectMongo";
import { NextRequest, NextResponse } from "next/server";
import QR from "@/models/qrs";

export const GET = async (req: NextRequest) => {
	await mongoConnect();

	// TODO: Get qrId from request
	const qrId = "jbkfd";

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

	return NextResponse.json({
		status: 200,
		error: false,
		message: "QR code can be updated",
		data: checkIfQrExists._id,
	});
};
