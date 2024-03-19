import { Button } from "./ui/button";
import { lineup } from "./data/lineup";
import { aftermovies } from "./data/aftermovies";
import Image from "next/image";
import Navbar from "./ui/navbar";
import Link from "next/link";


export default function Home() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<Navbar />

			<main className="flex-1">
				<section className="w-full">
					<div className="px-4 flex flex-col items-center justify-center space-y-2 text-center">
						<div className="space-y-2">
							<Image
								src={"/logo-h.png"}
								width={400}
								height={400}
								alt="logo"
								className="mx-auto" />
							{/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-mono">Pearl 2024</h1>
							<h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-mono">Streets of Hyderabad</h1> */}
							<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								The annual cultural fest of BITS Pilani, Hyderabad Campus, that grew into a national level college cultural fest.
							</p>
						</div>

						<div className="mx-auto max-w-sm space-y-2">
							<Button className="m-2">Get Your Pass!</Button>
						</div>
						<Image
							src={"/hyd.png"}
							width={3000}
							height={3000}
							alt="bg-hyd"
							className="w-full" />
					</div>
				</section>

				{lineup.length > 0 && <section className="w-full py-12 md:py-24 lg:py-32">
					<div className="px-4 md:px-6 grid items-center gap-6 text-center lg:grid-cols-[1fr_600px] lg:gap-12">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
								Lineup Announcement
							</h2>
							<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Check out the amazing artists who will be performing at the festival.
							</p>
						</div>
						<div className="mx-auto w-full max-w-2xl space-y-4">
							<div className="grid gap-4">
								{
									lineup.map((artist, index) => (
										<div key={index} className="flex items-center space-x-4">
											<Image
												alt="Artist"
												className="rounded-lg overflow-hidden aspect-square object-cover object-center"
												height="100"
												src={artist.image}
												width="100"
											/>
											<div className="space-y-1">
												<h3 className="text-xl font-bold">{artist.name}</h3>
												<p className="text-sm text-gray-500">{artist.time}</p>
											</div>
										</div>
									))
								}

							</div>
						</div>
					</div>
					<div className="flex justify-center items-center my-2">
						<Link href="/lineups"><Button className="m-2">View our Previous Lineups!</Button></Link>
					</div>
				</section>}

				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="flex flex-col">
						<h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
							Aftermovies
						</h2>

						<div className="justify-center w-full grid md:grid-cols-3 my-10 align-middle">
							{aftermovies.map((aftermovie, index) => (
								<div key={index} className="justify-center items-center m-4">
									<p className="text-6xl text-stone-900 text-center m-2">{aftermovie.year}</p>

									<div key={index} className="w-full">
										<iframe
											allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
											className="rounded-lg w-full h-64"
											src={aftermovie.url}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-white flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500">© 2024 Pearl BITS Pilani, Hyderabad Campus. All rights reserved.</p>
			</footer>
		</div >
	);
}
