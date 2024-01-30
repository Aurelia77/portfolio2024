'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export default function Home() {

    const skills = [
        { name: "typescript", icon: "ts.png" },
        { name: "react", icon: "react.png" },
        { name: "nextjs", icon: "nextjs.png" },
        { name: "tailwindcss", icon: "tailwindcss.png" },
        { name: "mui", icon: "mui.png" },
        { name: "firebase", icon: "firebase.png" },
    ];

    // ...

    {skills.map((skill) => (
        <div key={skill.name}>
            {skill.icon}
            {skill.name}
        </div>
    ))}

    return (
        <div
            // bg-gray-100
            // py-6 
            // sm:py-12
            className=" 
            flex flex-col justify-center 
            text-indigo-600
            min-h-screen 
            "
        >
            <div 
                    // py-3 
                className="
                    relative 
                    sm:mx-auto
                    sm:w-full 
                    sm:max-w-3xl 
                "
            >
                {/* A voir si mieux ORANGE ou BLEU ??? et ROTATE 6 ou 12 ??? */}
                {/* inset-0 définit top, right, bottom, et left à 0. */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div> */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div> */}
                
                <div 
                    // shadow-lg 
                    className="
                        relative 
                        px-4 py-10 
                        bg-white
                        sm:rounded-3xl sm:p-12">
                {/* <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-12"> */}
                    <div className="max-w-lg mx-auto">
                        <div className='flex' >
                            <div>
                                <motion.h1
                                    className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-semibold"
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                >
                                    <p>
                                        Hello! I&apos;m
                                        <span className='text-2xl sm:text-4xl md:text-6xl lg:text-8xl'> Aurélia Heymann</span>
                                    </p>
                                </motion.h1>
                                <motion.p
                                    className="mt-7 text-sm sm:text-lg md:text-xl lg:text-2xl
                                text-orange-500 
                                "
                                    // text-gray-600 
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                    transition={{ delay: 0.5 }}
                                >
                                    I&apos;m a Front-end developpeur based in Grenoble (France).
                                </motion.p>
                            </div>



{/* // VOIR réponse Guit cOPILOT */}









                            <div className="relative rounded-lg shadow-lg w-full h-full overflow-hidden">

                            {/* <div
                                className="w-36 h-48 absolute top-12 right-12"> */}
                                {/* <div className="w-1/4 sm:w-1/ md:w-1/3 lg:w-1/4"> */}
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    src="/images/portrait2.png"
                                    alt="Portrait Aurélia Heymann"
                                    className="rounded-lg shadow-lg w-full h-full object-cover"
                                />
                                {/* On utilise <img> car incompatibilité entre framer-motion et next/image */}
                                {/* <Image
                                    src="/portrait2.png"
                                    // src="/portrait.jpg"
                                    alt="Portrait Aurélia Heymann"
                                    layout="fill"
                                    sizes="(max-width: 40rem) 100vw, 40rem"
                                    //style={{objectFit:"cover"}}
                                    //objectFit="cover"
                                    // width={150}
                                    // height={10}
                                    className="rounded-lg shadow-lg"
                                /> */}
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="mt-5">
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <motion.span
                                            key={index}
                                            className="
                                                px-3 py-1 text-sm sm:text-base md:text-lg lg:text-xl rounded-full
                                                bg-indigo-100 cursor-pointer
                                                "
                                            // bg-yellow-400
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: (index + 1) / 10 + 0.5 }}
                                            title={skill.name}

                                        >
                                            <Image 
                                                src={`/images/${skill.icon}`} 
                                                alt="My Icon" 
                                                width={50} 
                                                height={50} 
                                            />
                                        </motion.span>
                                    ))}
                                </div>
                            </div>


                            {/* <Link href="/about">
                                <span className="text-cyan-600 font-bold">About Me {'->'}</span>
                            </Link>
                            <Link href="/work">
                                <span className="ml-4 text-cyan-600 font-bold">My Work {'->'}</span>
                            </Link>
                            <Link href="/about">
                                <span className="text-cyan-600 font-bold">About Me {'➡️'}</span>
                            </Link>
                            <Link href="/work">
                                <span className="ml-4 text-cyan-600 font-bold">My Work {'➡️'}</span>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
