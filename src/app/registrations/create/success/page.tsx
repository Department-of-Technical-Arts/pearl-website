import Image from "next/image";
import React from "react";

export default function Success() {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-center -translate-y-40 text-white">
			<Image
				src={"/logo-h.png"}
				width={700}
				height={700}
				alt="logo"
				className="mx-auto h-40 w-40 object-contain"
			/>
			<h1 className="text-4xl">Registration Successful</h1>
			<p className="text-lg">You have successfully registered for the event.</p>
		</div>
	);
}
