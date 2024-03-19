import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Navbar({ }: Props) {
    return (
        <header className="px-4 lg:px-6 h-24 flex items-center w-full justify-center">
            <Link className="flex items-center justify-center" href="#">
                <Image
                    src={"/logo.png"}
                    width={3000}
                    height={3000}
                    alt="logo"
                    className="w-24 h-24" />
                <span className="sr-only">Pearl 2024</span>
            </Link>

            <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Events
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Sponsors
                </Link>
            </nav>
        </header>
    )
}