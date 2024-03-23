import { NextApiRequest, NextApiResponse } from "next";
import mongoConnect from "@/utils/connectMongo";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
	const body = await req.json();
	console.log(body);
	await mongoConnect();
	return NextResponse.json({ message: "Hello" });
};
