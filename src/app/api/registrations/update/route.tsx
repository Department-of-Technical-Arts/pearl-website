import mongoConnect from "@/utils/connectMongo";
import { NextRequest, NextResponse } from "next/server";
import QR from "@/models/qrs";
import * as csv from "csv";

const XMLHttpRequest = require("xhr2");

export const POST = async (req: NextRequest) => {
	await mongoConnect();
	const body = await req.json();

	let { qrId, email, name, phone, aadhar, college, referral } = body;
	qrId = qrId.slice(8, -8);

	const checkIfQrExists = await QR.findOne({ _id: qrId });
	let sheetsURL = process.env.sheets;
	if (!sheetsURL) {
		return NextResponse.json({
			status: 500,
			error: true,
			message: "Referal Codes broken. Please contact the admin.",
		});
	}
	sheetsURL +=
		(sheetsURL.indexOf("?") >= 0 ? "&" : "?") +
		"noCache=" +
		new Date().getTime();
	let campusAmbassadors = new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.open("GET", sheetsURL, true);
		request.onreadystatechange = () => {
			if (request.readyState === 4 && request.status === 200) {
				const data = request.responseText;
				csv.parse(data, (err: any, data: any) => {
					if (err) {
						reject(err);
					}
					resolve(data);
				});
			}
		};
		request.send();
		request.onerror = () => {
			reject("Failed to fetch data");
		};
	});
	let campusAmbassadorsData = (await campusAmbassadors) as any[];
	let validReferral = false;
	if (referral) {
		campusAmbassadorsData.forEach((row) => {
			if (row[3] === referral.trim()) {
				validReferral = true;
			}
		});
	}
	if (!validReferral) {
		return NextResponse.json({
			status: 400,
			error: true,
			message: "Invalid referral code",
		});
	}
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

	if (!email || !name || !phone || !aadhar || !college) {
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

	const aadharRegex = /^[1-9][0-9]{11}$/;
	if (!aadharRegex.test(aadhar)) {
		return NextResponse.json({
			status: 422,
			error: true,
			message: "Please enter a valid Aadhar number",
		});
	}

	const updateQR = await QR.findOneAndUpdate(
		{ _id: qrId },
		{
			$set: {
				email,
				name,
				phone: phone,
				aadhar,
				college,
				referral,
				entered_credentials: true,
			},
			$currentDate: { entered_credentials_at: true },
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
