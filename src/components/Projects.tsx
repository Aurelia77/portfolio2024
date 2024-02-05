import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function Projects() {

    const projects = [
        {
            name: "CRM",
            description: "I developed a tailored Customer Relationship Management (CRM) app for my friend in the entertainment industry, meeting a specific need she had. This tool simplifies contact management through quick search, easy sorting, and a scheduling calendar that includes follow-up dates. Versatile enough for any solo entrepreneur, it efficiently improves contact management, providing a practical solution.",
            techno: ["React JS", "Next JS", "TypeScript", "MUI", "Firebase", "API"],
            link: "https://prospection-freya-aurelia77.vercel.app/",
            sourceCode: "https://github.com/Aurelia77/crm-private.git",
            video: "",
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
            techno: ["React JS", "Next JS", "TypeScript", "MUI", "Firebase", "API"],
            image: "/path/to/image1.jpg",
            link: "https://link-to-project1.com",
            sourceCode: "",
            video: "",
        },
        {
            name: "Projet 3",
            description: "Description du projet 3",
            techno: ["React JS", "Next JS", "TypeScript", "MUI", "Firebase", "API"],
            image: "/path/to/image1.jpg",
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
            className="mx-auto bg-white left-0 rounded-3xl">


            {/* // absolute */}
            {/* <div className="inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl sm:p-12 max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"></div> */}


            {/* px-4  */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-orange-500 to-yellow-400 p-3 rounded-t-3xl">Projects</h2>

            <div className="grid grid-cols-1 
                gap-4">
                {/* lg:grid-cols-2  */}
                {projects.map((project, index) => (
                    // overflow-hidden 
                    <div key={index} className=" border-indigo-500
                    border-2                        
                    
                    mt-12 ">
                        {/* <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                    <p className="text-gray-700">{project.description}</p>
                    <a href={project.link} className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Project</a>
                </div> */}
                        <div className='flex justify-around flex-wrap items-center gap mb-4' >
                            <h3 className="font-bold text-xl">{project.name}</h3>
                            {project.techno && project.techno.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    className="ml-1 mb-1
                                md:px-3 md:py-1
                                rounded-full
                                bg-indigo-100 cursor-pointer
                                "
                                    // text-sm sm:text-base md:text-lg lg:text-xl 
                                    // bg-yellow-400
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + (index + 1) / 10 }}
                                    // transition={{ delay: (index + 1) / 10 + 0.5 }}
                                    //title={skill.name}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    whileHover={{
                                        scale: 1.2,
                                        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                                        transition: { duration: 0.1 },
                                        skew: 20
                                    }}
                                >

                                    <p key={index} className="text-gray-700 p-2">{tech}</p>
                                </motion.span>
                            ))}
                        </div>
                        <div
                            // h-80 
                            // bg-orange-500 
                            // p-[4%]
                            className='
                                '>
                            <div className="mt-4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">Visit website</a>
                                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">Source code</a>
                                <a href={project.video} target="_blank" rel="noopener noreferrer" className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">App Overview</a>
                            </div>
                            <Slide
                            //duration={500}
                            >
                                {project.images && project.images.map((image, index) => (
                                    <div key={index} className='flex flex-col' >
                                        <span style={{ ...spanStyle, textAlign: "center" }}>{image.caption}</span>
                                        <div style={{
                                            ...divStyle,
                                            'backgroundImage': `url(${image.url})`,
                                            // 'backgroundSize': 'contain', 
                                            // 'backgroundRepeat': 'no-repeat',
                                            // 'backgroundPosition': 'center'
                                        }}>
                                        </div>
                                    </div>
                                ))}
                            </Slide>

                            <motion.div
                                className="p-3 w-full h-full bg-gradient-to-r from-indigo-500 to-indigo-800 flex items-center justify-center text-white text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                // whileHover={{
                                //     opacity: 1,
                                //     transition: { duration: 0.5 }
                                // }}
                            >
                                <p>{project.description}</p>
                            </motion.div>
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
