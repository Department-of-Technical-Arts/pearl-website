"use client";

import React from "react";
import RegisterButton from "./registerButton";

export default function RegistrationForm(props: {
	sendRegisterRequestWithPassID: (formData: FormData) => Promise<void>;
}) {
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = async (formData: FormData) => {
		setLoading(true);
		props.sendRegisterRequestWithPassID(formData).finally(() => {
			setLoading(false);
		});
	};
	return (
		<form action={handleSubmit} className="flex flex-col gap-2">
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
			<RegisterButton loading={loading} />
		</form>
	);
}
