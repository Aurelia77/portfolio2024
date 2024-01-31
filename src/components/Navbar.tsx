'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

import { usePortfolioContextProvider } from '@/context/portfolioContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const links = usePortfolioContextProvider()

    console.log("links", links)

    return (
        <nav className="bg-indigo-900 text-white p-4 flex justify-between items-center">
            <Link href="/" passHref>
                <span className="font-bold text-xl cursor-pointer">Home</span>
            </Link>
            <div className='flex flex-col items-end' >
                <button
                    className="p-2 
                        block sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen
                        ? <Image
                            src="/images/white-cross.png"
                            alt="Menu"
                            width={24}
                            height={24}
                        />
                        : <Image
                            src="/images/burger-menu.png"
                            alt="Menu"
                            width={24}
                            height={24}
                        />
                    }
                </button>
                <div className={`sm:w-auto
                ${isOpen ? 'block flex-col items-end' : 'hidden'} sm:block
                flex space-x-7`}>
                    {links && links.map((link: any) => (
                        <Link href={link.link} passHref key={link.name}>
                            <span className="cursor-pointer">{link.name}</span>
                        </Link>
                    ))}                    
                </div>
            </div>
        </nav>
    )
}
