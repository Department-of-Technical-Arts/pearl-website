import React from "react";
import Navbar from "@/app/ui/navbar";
import fs from "fs";
import Image from "next/image";
import Link from "next/link";

export default function SponsorsPage() {
	const sponsors = fs.readdirSync("public/sponsors");

	return (
		<div className="flex flex-col min-h-[100dvh]">
			<Navbar />

			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="flex flex-col">
						<h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
							Previous Sponsors
						</h2>

						<h3 className="text-center text-xl m-2 underline">
							<Link href={"/spons_brochure.pdf"}>View our Sponsorship deck</Link>
						</h3>

						<div className="justify-center w-full grid md:grid-cols-3 p-10 align-middle">
							{sponsors.map((sponsor, index) => (
								<div className="m-2" key={index}>
									<Image
										key={index}
										alt="Sponsor"
										className="rounded-lg overflow-hidden bg-white h-full object-contain object-center p-2"
										height="3000"
										src={`/sponsors/${sponsor}`}
										width="3000"
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-white flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500">
					© 2024 Pearl BITS Pilani, Hyderabad Campus. All rights reserved.
				</p>
			</footer>
		</div>
	);
}
