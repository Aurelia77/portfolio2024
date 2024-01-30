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
        { name: "TypeScript", icon: "ts.png" },
        { name: "React", icon: "react.png" },
        { name: "NextJs", icon: "nextjs.png" },
        { name: "TailwindCSS", icon: "tailwindcss.png" },
        { name: "MUI", icon: "mui.png" },
        { name: "Firebase", icon: "firebase.png" },
        { name: "Github", icon: "github.png" },
    ];

    const pages = [
        { name: "About Me", link: "/about" },
        { name: "My Work", link: "/work" },
        { name: "Recommendations", link: "/recommendations" },
    ];

    return (
        <div
            className=" 
            flex flex-col justify-center 
            text-indigo-600
            mt-16
            "
        // min-h-[90vh]
        // sm:min-h-screen
        >
            <div
                // py-3 
                className="
                    relative 
                    sm:mx-auto
                    sm:w-full 
                    sm:max-w-4xl 
                "
            >
                {/* A voir si mieux ORANGE ou BLEU ??? et ROTATE 6 ou 12 ??? */}
                {/* inset-0 définit top, right, bottom, et left à 0. */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl sm:p-12 max-w-xl mx-auto"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div> */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div> */}

                {/* ENSEMBLE DES ELEMENTS : Présentation, Skills, More (links) */}
                <div
                    // shadow-lg 
                    className="
                        relative 
                        px-4 py-10 
                        bg-white
                        sm:rounded-3xl sm:p-12 max-w-xl mx-auto">
                    {/* <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-12"> */}
                    {/* <div className="max-w-xl mx-auto"> */}

                    {/* Présentation */}
                    <div
                        className='flex justify-center gap-5'
                    >
                        {/* Présentation TEXTE */}
                        <div className='w-[45%] flex flex-col justify-around'>
                            <motion.h1
                                className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold"
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                            >
                                <p>
                                    Hello! I&apos;m<br />
                                    <span className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl'> Aurélia Heymann</span>
                                </p>
                            </motion.h1>
                            <motion.p
                                className="text-sm sm:text-lg md:text-xl lg:text-2xl
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
                            <motion.p
                                className="text-sm sm:text-lg md:text-xl lg:text-2xl
                                text-orange-500 
                                "
                                // text-gray-600 
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                transition={{ delay: 1 }}
                            >
                                AND ??????????? ???????????
                            </motion.p>
                        </div>

                        {/* Présentation PHOTO + btn CONTACT ME */}
                        <div className="relative rounded-lg w-[45%] h-[80%] 
                        "
                        // overflow-hidden
                        >
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                //src="/images/portrait.jpg"
                                src="/images/portrait3.png"
                                alt="Portrait Aurélia Heymann"
                                // className="hidden rounded-lg shadow-lg w-full h-full md:block"
                                className="hidden rounded-lg shadow-xl border-8 border-opacity-40 border-orange-500 w-full h-full md:block "
                            />
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                //src="/images/portrait.jpg"
                                src="/images/portrait2.png"
                                alt="Portrait Aurélia Heymann"
                                className="rounded-lg shadow-lg border-4 border-opacity-40 border-orange-500 w-full h-full md:hidden"

                            />
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 2, 1] }}
                                transition={{ times: [0, 0.5, 1], duration: 1 }}
                            >
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.2,
                                            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                                            transition: { duration: 0.1 }
                                        }}
                                        className="flex justify-center items-center font-bold text-lg py-2 px-4 rounded-lg w-full mt-4 transition duration-200 ease-in-out transform hover:shadow-lg bg-gradient-to-r from-orange-500 to-yellow-400"
                                    >
                                        Contact me
                                    </motion.button>
                                </Link>
                            </motion.div>
                            {/* <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ 
                                            scale: 1.2, 
                                            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)", 
                                            transition: { duration: 0.1 } 
                                        }}
                                        className="flex justify-center items-center font-bold text-lg py-2 px-4 rounded-lg w-full mt-4 transition duration-200 ease-in-out transform hover:shadow-lg bg-gradient-to-r from-orange-500 to-yellow-400"
                                    >
                                        Contact me
                                    </motion.button>
                                </Link>
                            </motion.div>                         */}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-12">
                        <div className="flex flex-wrap justify-center gap-2">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    className="
                                                px-3 py-2 md:px-5 md:py-3
                                                text-sm sm:text-base md:text-lg lg:text-xl rounded-full
                                                bg-indigo-100 cursor-pointer
                                                "
                                    // bg-yellow-400
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (index + 1) / 10 + 0.5 }}
                                    title={skill.name}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    whileHover={{
                                        scale: 1.2,
                                        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                                        transition: { duration: 0.1 },
                                        skew: 20
                                    }}
                                >
                                    <Image
                                        src={`/images/${skill.icon}`}
                                        alt={skill.name + " icon"}
                                        width={50}
                                        height={50}
                                        style={{}}
                                    />
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* More (links) */}
                    <div className="mt-12 flex flex-wrap justify-around gap-7">
                        {pages.map((page, index) => (
                            <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0 + index * 2 / 10 }}>
                                <Link href={page.link} className='flex gap-1' >
                                    <motion.span
                                        className="font-bold"
                                        whileHover={{ rotate: 10 }}
                                    >
                                        {page.name}
                                    </motion.span>
                                    <Image
                                        src="/images/blue_go_to.png"
                                        alt="My Icon"
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
