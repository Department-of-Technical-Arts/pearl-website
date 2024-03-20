import { Button } from "@/app/ui/button";
import { lineup } from "@/data/lineup";
import { aftermovies } from "@/data/aftermovies";
import Image from "next/image";
import Navbar from "@/app/ui/navbar";
import Link from "next/link";
import Footer from "./ui/footer";

import { Amita } from "next/font/google";
import { redirect } from "next/navigation";

const amita = Amita({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export default function Home() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<Navbar />

			<main className="flex-1">
				<section className="w-full h-[100vh]">
					<Image
						src={"/curtains.png"}
						width={3000}
						height={3000}
						alt="curtain"
						className="absolute animate-curtain top-0 left-0 w-[110vw] object-cover  sm:w-full z-[-3] sm:-translate-y-10 "
					/>
					<Image
						src={"/pillar.png"}
						width={3000}
						height={3000}
						alt="pillar"
						className="absolute hidden md:block top-0 left-0 h-full w-[200px] z-[-2] "
					/>
					<Image
						src={"/pillar.png"}
						width={3000}
						height={3000}
						alt="pillar"
						className="absolute  hidden md:block translate-x-full sm:translate-x-0 top-0 right-0  h-full w-[200px] z-[-2] "
					/>
					<div className="px-4 sm:flex-col items-center justify-center space-y-2 text-center ">
						<div className="">
							<Image
								src={"/logo-h.png"}
								width={700}
								height={700}
								alt="logo"
								className="mx-auto pt-32"
							/>
						</div>

						<form
							className="mx-auto max-w-lg space-y-2"
							action={async () => {
								"use server";
								redirect("/events");
							}}
						>
							<p className="mx-auto max-w-[1300px] text-[#823732] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								The annual cultural fest of BITS Pilani, Hyderabad Campus, that
								grew into a national level college cultural fest with
								participation from more than 50 colleges across India..
							</p>
							<Button className="m-2 z-20 font-bold">Purchase Tickets</Button>
						</form>
					</div>
					<div className="flex flex-col absolute top-full w-full -translate-y-1/2 z-[-2]">
						<Image
							src={"/wave.svg"}
							width={3000}
							height={1500}
							alt="bg-hyd"
							className="w-[102vw] z-[-2] relative "
						/>
						<Image
							src={"/wave.svg"}
							width={3000}
							height={1500}
							alt="bg-hyd"
							className="w-[102vw] z-[-2]  relative rotate-180"
						/>
					</div>
				</section>

				{/* {lineup.length > 0 && (
					<section className="w-full relative">
						<div className="px-4 md:px-6 flex flex-col items-center gap-6 text-center text-[#823732] lg:gap-12 sm:mt-20 ">
							<div className="space-y-2">
								<h2
									className={`text-6xl text-[#823732] font-bold tracking-tighter sm:text-8xl ${amita.className}`}
								>
									Lineup Announcement
								</h2>
								<p className="mx-auto max-w-[600px] text-[#e6c8a5] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Check out the amazing artists who will be performing at the
									festival!
								</p>
							</div>
						</div>
						<Image
							alt="Artist Lineup"
							src={"/artist_lineup.png"}
							className="w-full object-contain z-[-1] "
							width={3000}
							height={3000}
						/>
					</section>
				)} */}

				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="flex flex-col">
						<h2
							className={`text-center text-[#e6c8a5] text-6xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ${amita.className}`}
						>
							Aftermovies
						</h2>

						<div className="justify-center w-full grid md:grid-cols-3 my-10 align-middle">
							{aftermovies.map((aftermovie, index) => (
								<div key={index} className="justify-center items-center m-4">
									<div key={index} className="w-full">
										<iframe
											allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
											className="rounded-lg w-full h-64"
											src={aftermovie.url}
										/>
									</div>
									<p className="text-xl text-stone-900 text-center m-2">
										{aftermovie.year}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
