import Image from "next/image";
import React from "react";
import { sendRegosterRequest } from "./sendRegisterRequest";
import { redirect } from "next/navigation";

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
		redirect(`/registrations/create/success`);
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
			<div className="flex grow" />
			<h1 className="text-3xl font-bold tracking-tighter text-white">
				Register for {passData.data <= 4 ? "Day " + passData.data : "Mega Pass"}
			</h1>
			<h3 className="text-white">{error}</h3>
			<form
				action={sendRegisterRequestWithPassID}
				className="flex flex-col gap-2"
			>
				<div className="flex flex-row min-w-1/2 justify-between items-center gap-10">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						placeholder="Name"
						required
						name="name"
						className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="flex flex-row min-w-1/2 justify-between items-center gap-10">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="Email"
						required
						name="email"
						className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="flex flex-row min-w-1/2 justify-between items-center gap-10">
					<label htmlFor="phone">Phone</label>
					<input
						type="tel"
						placeholder="Phone"
						required
						name="phone"
						className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					/>
				</div>
				<button
					type="submit"
					className="hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Register
				</button>
			</form>
			<div className="flex grow mb-auto" />
		</div>
	);
}
