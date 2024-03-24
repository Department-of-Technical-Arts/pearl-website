"use client";

import React, { useEffect } from "react";
import RegisterButton from "./registerButton";

export default function RegistrationForm(props: {
	sendRegisterRequestWithPassID: (formData: FormData) => Promise<void>;
}) {
	const [loading, setLoading] = React.useState(false);
	const [formData, setFormData] = React.useState<FormData | null>(null);

	const handleSubmit = async (formData: FormData) => {
		setLoading(true);
		setFormData(formData);
	};

	useEffect(() => {
		if (!formData || !loading) {
			return;
		}
		props.sendRegisterRequestWithPassID(formData).finally(() => {
			setLoading(false);
		});
	}, [loading, formData]);

	return (
		<form action={handleSubmit} className="flex flex-col gap-2">
			<div className="flex flex-row min-w-1/2 justify-between items-center gap-10">
				<label className="hidden md:block text-white" htmlFor="name">Name</label>
				<input
					type="text"
					placeholder="Name"
					required
					name="name"
					className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div className="flex flex-row min-w-1/2 justify-between items-center gap-10">
				<label className="hidden md:block text-white" htmlFor="email">Email</label>
				<input
					type="email"
					placeholder="Email"
					required
					name="email"
					className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div className="flex flex-row min-w-1/2 justify-between items-center gap-10">
				<label className="hidden md:block text-white" htmlFor="phone">Phone</label>
				<input
					type="tel"
					placeholder="Phone"
					required
					name="phone"
					className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div className="flex flex-row min-w-1/2 justify-between items-center gap-10">
				<label className="hidden md:block text-white" htmlFor="phone">Aadhar Number</label>
				<input
					type="number"
					placeholder="Aadhar Number"
					required
					name="aadhar"
					className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div className="flex flex-row min-w-1/2 justify-between items-center gap-10">
				<label className="hidden md:block text-white" htmlFor="phone">College/Organization</label>
				<input
					type="text"
					placeholder="College/Organization"
					required
					name="college"
					className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
				/>
			</div>
			<RegisterButton loading={loading} />
		</form>
	);
}
