import React from 'react'

import Image from 'next/image'
import AutoDrawing from './AutoDrawing'

import { motion } from 'framer-motion'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function Projects() {

    const [isModalVideoOpen, setIsModalVideoOpen] = React.useState(false);
    const [showDescription, setShowDescription] = React.useState(false);

    const highlightedTextClasses = "font-bold text-indigo-200 text-shadow";

    const projects = [
        {
            name: "CRM Project",
            quickDescr:
                <div>
                    <h2>Most recent & important project</h2><br />
                    <p>Customized <span className={highlightedTextClasses}>CRM</span> app developed for entertainment industry freelancer.</p>
                    <p>Simplifies contact management with <span className={highlightedTextClasses}>INSEE company search, quick search, sorting, and scheduling</span>.</p>
                    <p><span className={highlightedTextClasses}>Admin page</span> enables category and file management.</p>
                </div>,
            description:
                <div>
                    <h2>My most recent and significant project</h2><br />
                    <p>I developed a customized Customer Relationship Management (<span className={highlightedTextClasses}>CRM</span>) application for a self-employed person in the entertainment industry, meeting a <span className={highlightedTextClasses}>specific need</span> she had.</p><br />
                    <p>This tool simplifies contact management by enabling the addition of contacts through an <span className={highlightedTextClasses}>INSEE search</span> (utilizing an <span className={highlightedTextClasses}>API</span>), as well as providing <span className={highlightedTextClasses}>quick search functionality</span> on the contact list, <span className={highlightedTextClasses}>easy sorting options</span>, and a <span className={highlightedTextClasses}>scheduling calendar</span> with follow-up dates.</p><br />
                    <p>Additionally, the <span className={highlightedTextClasses}>Admin</span> page allows for <span className={highlightedTextClasses}>management of contacts categories and files.</span></p><br />
                    <p>Versatile enough for any solo entrepreneur, it significantly improves contact management, providing a practical solution.
                    </p>
                </div>,
            techno: [
                { name: "React JS", icon: "react.png" },
                { name: "TypeScript", icon: "ts.png" },
                { name: "Next JS", icon: "nextjs.png" },
                { name: "MUI", icon: "mui.png" },
                { name: "Firebase", icon: "firebase.png" },
                { name: "API", icon: "api.png" },
                { name: "Git", icon: "git.png" },
                { name: "Github", icon: "github.png" },
            ],
            link: "https://crm-public.vercel.app",
            sourceCode: "https://github.com/Aurelia77/crm-private.git",
            video: "/videos/videoCRM.mp4",
            images: [
                {
                    url: "/images/projectCRM/home.png",
                    caption: "Home page"
                },
                {
                    url: "/images/projectCRM/calendar.png",
                    caption: "Calendar page"
                },
                {
                    url: "/images/projectCRM/view-contact.png",
                    caption: "View Contact page"
                },
                {
                    url: "/images/projectCRM/admin.png",
                    caption: "Admin page"
                },
            ]
        },
        {
            name: "Auto Drawing",
            quickDescr:
            <div>
                <h2>One click. An <span className={highlightedTextClasses}>endless line flows</span>, ever-changing within the frame.</h2>
            </div>,
            description: 
                <div>
                    <h2>Have fun using this app!</h2><br/>
                    <p>It allows you to create an <span className={highlightedTextClasses}>endless, flowing line that bounce around the frame</span>.</p><br />
                    <p>With a simple click, you can launch a line that will continuously draw itself, changing direction whenever it hits the edge of the frame.
                    </p>
                </div>,
            techno: [
                { name: "React JS", icon: "react.png" },
                { name: "Next JS", icon: "nextjs.png" },
                { name: "TailwindCSS", icon: "tailwindcss.png" },
                { name: "Git", icon: "git.png" },
                { name: "Github", icon: "github.png" },
            ],
            link: "https://dessin-pink.vercel.app/autoDraw3",
            sourceCode: "https://github.com/Aurelia77/dessin.git",
            video: "",
        },
        {
            name: "Kitch : Twitch clone",
            quickDescr:
            <div>
                <h2>Twitch website clone</h2><br />
                <p>First time using <span className={highlightedTextClasses}>Twitch API, Next JS and Typescript</span>.</p>
                <p><span className={highlightedTextClasses}>Collaboration</span> with other learners.</p>
            </div>,
            description: 
                <div>
                    <h2>Team project</h2><br/>
                    <p>In mid-2023, after completing my online React training with the instructor Mike Codeur, I <span className={highlightedTextClasses}>collaborated with a team of other learners to build a Twitch website clone</span>.</p> 
                    <p>This project introduced me to <span className={highlightedTextClasses}>NextJS and TypeScript</span>, and it proved to be a thrilling learning adventure. To this day, I find TypeScript essential and incorporate it into every project I work on.</p><br/>
                    <p>We utilized the Twitch <span className={highlightedTextClasses}>API</span> to fetch and display data within our web application.</p><br/>
                    <p>Collaborating with my teammates was an enriching experience. We honed our communication skills, efficiently divided tasks, and <span className={highlightedTextClasses}>learned to work harmoniously towards a shared objective</span>. </p> 
                    <p>However, the project encountered challenges like time management, differing viewpoints, and technical difficulties. Unfortunately, due to team members withdrawal, it was not fully realized.</p>
                    <p>Despite these obstacles, this was a valuable learning experience. <span className={highlightedTextClasses}>I significantly improved my React skills, gained valuable experience with APIs, and strengthened my teamwork abilities</span>.</p>
                </div>,           
            techno: [
                { name: "React JS", icon: "react.png" },
                { name: "TypeScript", icon: "ts.png" },
                { name: "Next JS", icon: "nextjs.png" },
                { name: "TailwindCSS", icon: "tailwindcss.png" },
                { name: "API", icon: "api.png" },
                { name: "Git", icon: "git.png" },
                { name: "Github", icon: "github.png" },
            ],
            images: [
                {
                    url: "/images/projectKITCH/img1.png",
                    caption: "Home page"
                },
                {
                    url: "/images/projectKITCH/img2.png",
                    caption: "Channel page"
                },
            ],
            link: "https://kitch-team-project.vercel.app/",
            sourceCode: "https://github.com/Aurelia77/kitch-team-project.git",
            video: "",
        },    
    ]; 

    return (
        <div
            id='projects'
            // mt-6 sm:mt-10 md:mt-12 lg:mt-16
            // Pour que l'ancre soit au dessous de la navbar on met un mt négatif et on met le même pt pour que ça reste au même endroit
            className="sm:mx-[1%] lg:mx-[5%] -mt-32 pt-32
            ">
            {/* bg-white */}

            {/* // absolute */}
            {/* <div className="inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl sm:p-12 max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"></div> */}

            {/* px-4  */}
            {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  bg-gradient-to-r from-orange-500 to-yellow-400 p-3">Projects</h2> */}

            <div className="grid grid-cols-1 gap-4">
                {/* lg:grid-cols-2  */}
                {projects.map((project, index) => (
                    // overflow-hidden 
                    // border-indigo-500 border-2                        
                    <div key={index} className="rounded-lg bg-white p-5 w-full
                        mb-4 sm:mb-8 md:mb-12 
                        xl:max-w-6xl xl:mx-auto
                        "
                    >
                        <div className='flex justify-between flex-wrap items-center gap-4 mt-3'>
                            <h3 className="font-bold text-3xl mr-5 text-indigo-900">{project.name}</h3>
                            <div className='flex gap-2 mr-5' >
                                {project.techno && project.techno.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        className="
                                            rounded-full bg-cyan-300 bg-opacity-50 cursor-pointer mb-1
                                            px-2 py-1 md:px-4 md:py-2
                                            text-sm sm:text-base md:text-lg lg:text-xl 
                                            "
                                        // bg-yellow-400
                                        initial={{ y: -10 }}
                                        //animate={{ opacity: 1, y: 0 }}
                                        whileInView={{ y: 0 }}
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
                            {/* BTNs Grand écran */}
                            <div className="hidden sm:block"> 
                                {/* On utilise notre classe CSS : animate-custom-pulse */}
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block font-bold py-2 px-8 rounded mr-2  animate-custom-pulse">Visit website</a>
                                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="inline-block bg-pink-500 hover:bg-pink-600  font-bold py-2 px-4 rounded mr-2">Source code</a>
                                {project.video &&
                                    <>
                                        <button
                                            className="inline-block bg-purple-500 hover:bg-purple-600  font-bold py-2 px-4 rounded"
                                            onClick={() => setIsModalVideoOpen(!isModalVideoOpen)}
                                        >
                                            Live Demo
                                        </button>                                    
                                        {isModalVideoOpen && <video width="320" height="240" controls className='m-auto mt-1'>
                                            <source
                                                src={project.video}
                                                type="video/mp4" />
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>}
                                    </>
                                }
                            </div>
                            {/* BTNs Petit écran */}
                            <div className="flex sm:hidden mt-1 flex-wrap gap-y-1">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-500 hover:bg-cyan-600  font-bold py-2 px-8 rounded mr-2  animate-custom-pulse">Website</a>
                                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="inline-block bg-pink-500 hover:bg-pink-600  font-bold py-2 px-4 rounded mr-2">Source</a>
                                {project.video && <a href={project.video} target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-500 hover:bg-purple-600  font-bold py-2 px-4 rounded">Demo</a>}
                            </div>
                        </div>
                        <div>
                            <div className="mt-3 sm:mt-7">
                                {project.images
                                    ? <Slide duration={3000}>
                                        {project.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className='flex flex-col shadow-lg'
                                            >
                                                <span className='bg-[#efefef] text-indigo-900 text-sm sm:text-lg text-center p-5'>
                                                    {image.caption}
                                                </span>
                                                <div
                                                    className='border-2 border-indigo-500 p-2'
                                                >
                                                    <Image
                                                        src={image.url}
                                                        alt="CRM project Aurélia Heymann"
                                                        layout="responsive" width="1700" height={900}
                                                    />
                                                    {/* <div
                                                        className='flex items-center justify-center bg-no-repeat bg-center                                                     
                                                        bg-contain h-96
                                                        '
                                                        // h-96
                                                        //sm:bg-contain 
                                                        style={{
                                                            'backgroundImage': `url(${image.url})`,
                                                            // 'backgroundPosition': 'center',
                                                            //height: imageHeight,
                                                        }}>
                                                    </div> */}
                                                </div>
                                            </div>
                                        ))}
                                    </Slide>
                                    : <AutoDrawing />
                                }
                            </div>
                            <div className="mt-3 w-full">
                                <motion.div
                                    className="p-3 w-full h-full bg-gradient-to-r from-indigo-500 to-indigo-800 flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                // whileHover={{
                                    //     opacity: 1,
                                    //     transition: { duration: 0.5 }
                                    // }}
                                    onMouseEnter={() => setShowDescription(true)}
                                    onMouseLeave={() => setShowDescription(false)}
                                >
                                    <div className="w-full flex items-center justify-start bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 rounded p-4">
                                        {/* {project.description} */}
                                        {/* {project.quickDescr} */}
                                        {showDescription 
                                            ? <div className='text-lg'>
                                                {project.description}
                                            </div> 
                                            : <div className='text-lg sm:text-xl font-bold'>
                                                {project.quickDescr}
                                            </div>
                                        }
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* <div className='h-80 bg-orange-500 p-[4%]' >
                    <motion.div
                        className="p-2 w-full h-full
                     bg-indigo-400 bg-opacity-75 flex items-center justify-center  text-lg"
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
        </div>
    )
}
