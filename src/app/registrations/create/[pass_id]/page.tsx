import Image from "next/image";
import React from "react";
import { sendRegosterRequest } from "./sendRegisterRequest";
import { redirect } from "next/navigation";
import RegisterButton from "@/app/ui/registrationForm/registerButton";
import RegistrationForm from "@/app/ui/registrationForm";

export default async function CreateRegistration(props: {
	params: {
		pass_id: string;
	};
	searchParams: {
		[key: string]: string;
	};
}) {
	const { pass_id } = props.params;
	let error = "";
	if (props.searchParams.error) {
		error = props.searchParams.message;
	}
	if (props.searchParams.success) {
		return (
			<div className="flex h-[100vh] w-full justify-center items-center text-white">
				Registration successful
			</div>
		);
	}
	const pass = await fetch(
		`${process.env.url}/api/registrations/validate?qrId=${pass_id}`,
		{ cache: "no-cache" }
	);
	if (!pass.ok) {
		return (
			<div className="flex h-[100vh] w-full justify-center items-center text-white">
				Invalid QR code
			</div>
		);
	}
	const passData = await pass.json();
	if (passData.error) {
		return (
			<div className="flex h-[100vh] w-full justify-center items-center text-white">
				{passData.message}
			</div>
		);
	}

	const sendRegisterRequestWithPassID = sendRegosterRequest.bind(null, pass_id);

	return (
		<div className="flex flex-col h-full  justify-center items-center gap-10">
			<Image
				src={"/logo-h.png"}
				width={700}
				height={700}
				alt="logo"
				className="mx-auto h-40 w-40 object-contain"
			/>
			<h1 className="text-3xl font-bold tracking-tighter text-white">
				Register for {passData.data <= 4 ? "Day " + passData.data : "Mega Pass"}
			</h1>
			<h3 className="text-white">{error}</h3>
			<RegistrationForm
				sendRegisterRequestWithPassID={sendRegisterRequestWithPassID}
			/>
			<div className="flex grow mb-auto min-h-full" />
		</div>
	);
}
