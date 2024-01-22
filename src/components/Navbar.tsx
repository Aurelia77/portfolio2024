import React from 'react'
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-indigo-900 text-white p-4 flex justify-between items-center">
            <Link href="/" passHref>
                <span className="font-bold text-xl cursor-pointer">Home</span>
            </Link>
            <div className="space-x-4">
                <Link href="/about" passHref>
                    <span className="cursor-pointer">About</span>
                </Link>
                <Link href="/work" passHref>
                    <span className="cursor-pointer">Work</span>
                </Link>
            </div>
        </nav>
    )
}
