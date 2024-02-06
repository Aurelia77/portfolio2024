import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function Projects() {

    const projects = [
        {
            name: "CRM Project",
            description: <div>
                <p>I developed a tailored Customer Relationship Management (CRM) app for a friend in the entertainment industry, meeting a <span className='font-bold text-cyan-100'>specific need</span> she had.</p><br/>
                <p>This tool simplifies contact management by enabling the addition of contacts through an <span className='font-bold text-cyan-100'>INSEE search (thanks to an API)</span>, as well as a <span className='font-bold text-cyan-100'>quick search</span> functionality on the contact list, an <span className='font-bold text-cyan-100'>easy sorting</span>, and a <span className='font-bold text-cyan-100'>scheduling calendar</span> that includes follow-up dates.</p><br/>
                <p>Versatile enough for any solo entrepreneur, it efficiently improves contact management, providing a practical solution.
                </p>
            </div>,
            techno: [
                { name: "React JS", icon: "react.png" },
                { name: "TypeScript", icon: "ts.png" },
                { name: "Next JS", icon: "nextjs.png" },
                { name: "MUI", icon: "mui.png" },
                { name: "Firebase", icon: "firebase.png" },
                { name: "Github", icon: "github.png" },
                { name: "API", icon: "api.png" },
            ],
            link: "https://prospection-freya-aurelia77.vercel.app/",
            sourceCode: "https://github.com/Aurelia77/crm-private.git",
            video: "xxx",
            images: [
                {
                    url: "/images/project1/redim/home.png",
                    caption: "Home page"
                },
                {
                    url: "/images/project1/redim/calendar2.png",
                    caption: "Calendar page"
                },
                {
                    url: "/images/project1/redim/view-contact.png",
                    caption: "View Contact page"
                },
                {
                    url: "/images/project1/redim/admin2.png",
                    caption: "Admin page"
                },
            ]
        },
        {
            name: "Projet 2",
            description: "Description du projet 2",
            techno: [
                { name: "React JS", icon: "react.png" },
                { name: "TypeScript", icon: "ts.png" },
                { name: "Next JS", icon: "nextjs.png" },
                { name: "MUI", icon: "mui.png" },
                { name: "Firebase", icon: "firebase.png" },
                { name: "Github", icon: "github.png" },
                { name: "API", icon: "api.png" },
            ],
            image: "/path/to/image1.jpg",
            link: "https://link-to-project1.com",
            sourceCode: "",
            video: "",
        },
        {
            name: "Projet 3",
            description: "Description du projet 3",
            techno: [
                { name: "React JS", icon: "react.png" },
                { name: "TypeScript", icon: "ts.png" },
                { name: "Next JS", icon: "nextjs.png" },
                { name: "MUI", icon: "mui.png" },
                { name: "Firebase", icon: "firebase.png" },
                { name: "Github", icon: "github.png" },
                { name: "API", icon: "api.png" },
            ], image: "/path/to/image1.jpg",
            link: "https://link-to-project1.com",
            sourceCode: "",
            video: "",
        },
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
        <div
            className="
            ">
            {/* bg-white */}

            {/* // absolute */}
            {/* <div className="inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl sm:p-12 max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"></div> */}

            {/* px-4  */}
            {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-orange-500 to-yellow-400 p-3">Projects</h2> */}

            <div className="grid grid-cols-1 gap-4">
                {/* lg:grid-cols-2  */}
                {projects.map((project, index) => (
                    // overflow-hidden 
                    // border-indigo-500 border-2                        
                    <div key={index} className="mt-12 rounded-lg bg-white p-5">
                        <div className='flex justify-start flex-wrap items-center gap-4 mt-3'>
                            <h3 className="font-bold text-3xl mr-5">{project.name}</h3>
                            {project.techno && project.techno.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    className="
                                        rounded-full bg-cyan-300 bg-opacity-50 cursor-pointer mb-1
                                        px-2 py-1 md:px-4 md:py-2
                                        text-sm sm:text-base md:text-lg lg:text-xl 
                                        "
                                    // bg-yellow-400
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index / 10 }}
                                    // transition={{ delay: (index + 1) / 10 + 0.5 }}
                                    title={tech.name}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    whileHover={{
                                        scale: 1.2,
                                        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                                        transition: { duration: 0.1 },
                                        skew: 20
                                    }}
                                >
                                    {/* Taille des images différentes en fonction de la taille de l'écran */}
                                    <Image
                                        className='hidden sm:block'
                                        src={`/images/icons/${tech.icon}`}
                                        alt={tech.name + " icon"}
                                        width={30}
                                        height={30}
                                    />
                                    <Image
                                        className='block sm:hidden'
                                        src={`/images/icons/${tech.icon}`}
                                        alt={tech.name + " icon"}
                                        width={25}
                                        height={25}
                                    />
                                </motion.span>
                            ))}
                        </div>
                        <div
                            // h-80 
                            // bg-orange-500 
                            // p-[4%]
                            className='
                                '>
                            <div className="mt-10">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mr-2">Visit website</a>
                                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mr-2">Source code</a>
                                {project.video && <a href={project.video} target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">App Overview</a>}
                            </div>
                            <div className="mt-10">
                                <Slide
                                    duration={10000}
                                >
                                    {project.images && project.images.map((image, index) => (
                                        <div 
                                            key={index} 
                                            className='flex flex-col shadow-lg
                                            '
                                        >
                                            <span style={{ ...spanStyle, textAlign: "center" }}>
                                                {image.caption}
                                            </span>
                                            <div
                                                className=' border-2 border-indigo-500 p-2'>
                                                <div
                                                    style={{
                                                        ...divStyle,
                                                        'backgroundImage': `url(${image.url})`,
                                                        'backgroundSize': 'contain',
                                                        'backgroundRepeat': 'no-repeat',
                                                        'backgroundPosition': 'center'
                                                    }}>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slide>
                            </div>
                            <div className="mt-3">
                                <motion.div
                                    className="p-3 w-full h-full bg-gradient-to-r from-indigo-500 to-indigo-800 flex items-center justify-center text-white text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                // whileHover={{
                                //     opacity: 1,
                                //     transition: { duration: 0.5 }
                                // }}
                                >
                                    <div className="flex items-center justify-center bg-gradient-to-r from-red-600 via-pink-600 to-purple-700">
                                        <div className="p-4 bg-white bg-opacity-25 rounded shadow-lg m-2 text-white">
                                            {project.description}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
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
    )
}
