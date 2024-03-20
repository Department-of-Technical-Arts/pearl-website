import Link from "next/link";
import Image from "next/image";
import React from "react";
import galgo from "./font";
import { usePathname } from "next/navigation";
import HomeLink from "./homeLink";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<header
			className={`px-5 lg:px-6 h-24 flex items-center w-full justify-center text-2xl tracking-[0.2rem] text-[#b43232] ${galgo.className}`}
		>
			<HomeLink />

			<nav className="flex sm:ml-auto gap-0 sm:gap-2">
				<Link
					className="sm:hidden p-2 font-extrabold hover:bg-red-600/5 underline-offset-4"
					href="#"
				>
					HOME
				</Link>
				<Link
					className="p-2 font-extrabold hover:bg-red-600/5 underline-offset-4"
					href="/events"
				>
					EVENTS
				</Link>

				<Link
					className="p-2 font-extrabold hover:bg-red-600/5 underline-offset-4"
					href="/lineups"
				>
					PRO SHOWS
				</Link>

				<Link
					className="p-2 font-extrabold hover:bg-red-600/5  underline-offset-4"
					href="/sponsors"
				>
					SPONSORS
				</Link>
			</nav>
		</header>
	);
}
