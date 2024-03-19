import React from 'react'
import Navbar from '../ui/navbar'
import fs from 'fs'
import Image from 'next/image'
import Link from 'next/link'

export default function LineupPage() {
    const lineups = fs.readdirSync('public/lineup')

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Navbar />

            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="flex flex-col">
                        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Previous lineups
                        </h2>

                        <div className="justify-center w-full grid md:grid-cols-3 p-10 align-middle">
                            {lineups.map((lineup, index) => (
                                <div className='m-2' key={index}>
                                    <Image
                                        key={index}
                                        alt="Sponsor"
                                        className="transition-transform rounded-lg overflow-hidden bg-white h-[400px] object-cover object-top p-2"
                                        height="3000"
                                        src={`/lineup/${lineup}`}
                                        width="3000"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500">© 2024 Pearl BITS Pilani, Hyderabad Campus. All rights reserved.</p>
            </footer>
        </div>
    )
}
