"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HomeLink() {
	const pathname = usePathname();
	return (
		pathname !== "/" && (
			<Link className="flex items-center justify-center" href="/">
				<Image
					src={"/logo-h.png"}
					width={150}
					height={150}
					alt="logo"
					className="mx-auto mt-2 hidden sm:block"
				/>
			</Link>
		)
	);
}
