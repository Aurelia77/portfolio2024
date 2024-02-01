'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { usePortfolioContextProvider } from "@/context/portfolioContext"

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export default function Home() {

    const links = usePortfolioContextProvider()

    const skills = [
        { name: "TypeScript", icon: "ts.png" },
        { name: "React", icon: "react.png" },
        { name: "NextJs", icon: "nextjs.png" },
        { name: "TailwindCSS", icon: "tailwindcss.png" },
        { name: "MUI", icon: "mui.png" },
        { name: "Firebase", icon: "firebase.png" },
        { name: "Github", icon: "github.png" },
        { name: "Photoshop", icon: "icon-photoshop.png" },
        { name: "Illustrator", icon: "icon-illustrator.png" },
        { name: "Indesign", icon: "icon-indesign.png" },
    ];

    const projects = [
        {
            name: "CRM",
            description: "Pour une amie...",
            techno: "React, TS, MUI, Firebase, API",
            link: "https://prospection-freya-aurelia77.vercel.app/",
            images: [
                {
                    url: "/images/project1/redim/home.png",
                    caption: "Home"
                },
                {
                    url: "/images/project1/redim/calendar.png",
                    caption: "Calendar"
                },
                {
                    url: "/images/project1/redim/view-contact.png",
                    caption: "View Contact"
                },
                {
                    url: "/images/project1/redim/admin.png",
                    caption: "Admin"
                },
            ]
        },
        {
            name: "Projet 2",
            description: "Description du projet 2",
            techno: "React, TS, MUI, Firebase, API",
            image: "/path/to/image1.jpg",
            link: "https://link-to-project1.com"
        },
        {
            name: "Projet 3",
            description: "Description du projet 3",
            techno: "React, TS, MUI, Firebase, API",
            image: "/path/to/image1.jpg",
            link: "https://link-to-project1.com"
        },
    ];




    const description = [
        <div key={1}><span className='font-bold'>{"Front-end\u00A0developer"}</span></div>,
        // <div key={1}><span className='font-bold'>{"Front-end\u00A0developer"}</span> based in Grenoble (France)</div>,
        <div key={2}><span className='font-bold'>3 years IT experience</span></div>,
        <div key={3}><span className='font-bold'>Last whole year : React and TS</span> formation and projects</div>,
        // <div key={3}><span className='font-bold'>Last whole year : React and TS</span> formation and projects ({"Mike\u00A0Codeur"})</div>,
        <div key={4}><span className='font-bold'>5 years IT formation</span></div>,
    ];  

    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000',
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }   


    return (
        // ENSEMBLE DES ELEMENTS : Présentation, Skills, More (links) 
        <div>
            {/* Présentation */}
            <div
                className='flex justify-between gap-5'
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
                            {/* Hello! I&apos;m<br /> */}
                            <span className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl'> Aurélia Heymann</span>
                        </p>
                    </motion.h1>

                    {description.map((descr, index) => (
                        <motion.div
                            key={index}
                            className="text-sm sm:text-lg md:text-xl lg:text-2xl
                                text-orange-500 flex items-start gap-2
                                "
                            // text-gray-600 
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        //transition={{ delay: 0.4 }}
                        // transition={{ delay: 0.5 }}
                        >
                            <Image
                                src="/images/icons/blue-star.png"
                                alt="Right arrow"
                                width={20}
                                height={20}
                                className='hidden md:block mt-1'
                            />
                            {descr}
                        </motion.div>
                    ))
                    }
                </div>

                {/* Présentation PHOTO (2 tailles de portrait selon la taille de l'écran)  + btn CONTACT ME */}
                <div className="relative rounded-lg w-[45%] h-[80%] 
                        "
                // overflow-hidden
                >

                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        src="/images/portrait3.png"
                        alt="Portrait Aurélia Heymann"
                        // className="hidden rounded-lg shadow-lg w-full h-full md:block"
                        className="hidden rounded-lg shadow-xl border-8 border-opacity-40 border-orange-500 w-full h-full md:block "
                    />
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        src="/images/portrait2.png"
                        alt="Portrait Aurélia Heymann"
                        className="rounded-lg shadow-lg border-4 border-opacity-40 border-orange-500 w-full h-full md:hidden"

                    />
                    <motion.div
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                        transition={{ times: [0, 0.5, 1], duration: 1, delay: 2 }}
                    >
                        <Link href="/contact">
                            <motion.button
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                                    transition: { duration: 0.1 }
                                }}
                                className="flex justify-center items-center font-bold text-lg py-2 px-4 rounded-full w-full mt-4 transition duration-200 ease-in-out transform hover:shadow-lg bg-gradient-to-r from-orange-500 to-yellow-400 h-16"
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
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
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
                            transition={{ delay: 1 + (index + 1) / 10 }}
                            // transition={{ delay: (index + 1) / 10 + 0.5 }}
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
                                src={`/images/icons/${skill.icon}`}
                                alt={skill.name + " icon"}
                                width={50}
                                height={50}
                            />
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* More (links) */}
            {/* <div className="mt-16 flex flex-wrap justify-around gap-7">
                {links.map((link : any, index : number) => (
                    <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0 + index * 2 / 10 }}>
                        <Link href={link.link} className='flex gap-1' >
                            <motion.span
                                className="font-bold"
                                whileHover={{ rotate: 5 }}
                            >
                                {link.name}
                            </motion.span>
                            <Image
                                src="/images/icons/blue_go_to.png"
                                alt="Right blue arrow"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </motion.div>
                ))}
            </div> */}

            {/* Projects */}
            <div 
                className="mx-auto bg-white
            mt-20 absolute left-0">



                 {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl sm:p-12 max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"></div> */}



                {/* px-4  */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-indigo-500 p-3 rounded">Projects</h2>

                <div className="grid grid-cols-1 
                gap-4">
                    {/* lg:grid-cols-2  */}
                    {projects.map((project, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mt-12 ">
                            {/* <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                                <p className="text-gray-700">{project.description}</p>
                                <a href={project.link} className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Project</a>
                            </div> */}
                            <h3 className="font-bold text-xl p-2">{project.name}</h3>
                            <div 
                            // h-80 
                            className='
                            bg-orange-500 p-[4%]'>
                                <Slide 
                                //duration={500}
                                >
                                    {project.images && project.images.map((image, index) => (
                                        <div key={index} className='flex flex-col' >
                                            <span style={{...spanStyle, textAlign:"center" }}>{image.caption}</span>
                                            <div style={{ 
                                                ...divStyle, 
                                                'backgroundImage': `url(${image.url})` ,
                                                // 'backgroundSize': 'contain', 
                                                // 'backgroundRepeat': 'no-repeat',
                                                // 'backgroundPosition': 'center'
                                                }}>                                                
                                            </div>
                                        </div>
                                    ))}
                                </Slide>
                               
                                {/* <motion.div
                                    className="p-2 w-full h-full bg-indigo-400 bg-opacity-75 flex items-center justify-center text-white text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0 }}
                                    whileHover={{
                                        opacity: 1,
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    <p>{project.description}</p>
                                </motion.div> */}
                            </div>
                            {/* <div className='h-80 bg-orange-500 p-[4%]' >
                                <motion.div
                                    className="p-2 w-full h-full
                                 bg-indigo-400 bg-opacity-75 flex items-center justify-center text-white text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0 }}
                                    //animate={{ y: '100%' }}
                                    whileHover={{
                                        opacity: 1,
                                        //boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    <p>{project.description}</p>
                                </motion.div>
                            </div> */}
                        </div>
                    ))}
                </div>
                {/* Contact */}
                <div className="container mx-auto px-4 mt-20">
                    <h2 className="text-2xl font-bold mb-5 text-white bg-indigo-500 p-3 rounded">Contact</h2>

                </div>

            </div>

        </div>
    )
}
