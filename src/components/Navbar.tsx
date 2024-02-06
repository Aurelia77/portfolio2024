'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { motion } from 'framer-motion'

import { usePortfolioContextProvider } from '@/context/portfolioContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    // BESOIN ????????
    const links = usePortfolioContextProvider()

    console.log("links", links)

    return (
        // FCE762   // FFFC31   // F9E900 (jaune)           // text-indigo-700
        // D7F2BA  (vert)
        // D4C5E2 (rose)
        <nav className="bg-indigo-900 text-white font-semibold p-4 flex justify-between items-center sticky top-0 z-50">

        {/* <nav className="bg-gradient-to-r from-orange-500 to-yellow-400 text-indigo-700 font-semibold p-4 flex justify-between items-start"> */}
            <Link href="/" passHref>
                <span className="font-bold text-xl cursor-pointer text-white">Home</span>
            </Link>
            <div className='flex flex-col items-end flex-grow' >
                <button
                    className="p-2 
                        block sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen
                        ? <Image
                            // src="/images/icons/cross-indigo700.png"
                            src="/images/icons/white-cross.png"
                            alt="Menu"
                            width={24}
                            height={24}
                        />
                        : <Image
                            // src="/images/icons/burger-indigo700.png"
                            src="/images/icons/burger-menu.png"
                            alt="Menu"
                            width={24}
                            height={24}
                        />
                    }
                </button>

                <div className={`sm:w-auto
                ${isOpen 
                    ? 'block flex-col items-end' 
                    : 'hidden'} 
                sm:flex flex-row gap-7 flex-grow`}>
                    {links && links.map((link: any, index: number) => (
                        <motion.p
                            key={index}
                            className="font-bold"
                            whileHover={{ rotate: 5 }}
                        >
                            <Link href={link.link} passHref key={link.name}>
                                <span className="cursor-pointer">{link.name}</span>
                            </Link>
                        </motion.p>
                    ))}
                </div>
            </div>
        </nav>
    )
}
