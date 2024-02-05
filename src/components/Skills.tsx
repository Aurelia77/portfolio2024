import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Skills() {

    const skills = [
        { name: "React", icon: "react.png" },
        { name: "TypeScript", icon: "ts.png" },
        { name: "NextJs", icon: "nextjs.png" },
        { name: "TailwindCSS", icon: "tailwindcss.png" },
        { name: "MUI", icon: "mui.png" },
        { name: "Firebase", icon: "firebase.png" },
        { name: "Github", icon: "github.png" },
        { name: "SQL", icon: "sql.png" },
        { name: "Photoshop", icon: "photoshop.png" },
        { name: "Illustrator", icon: "illustrator.png" },
        { name: "Indesign", icon: "indesign.png" },
    ];

    return (
        <div>
            <div className="flex flex-wrap justify-center max-w-[92%] m-auto
                gap-[1%] sm:gap-2 
                ">
                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        className="
                                rounded-full bg-white bg-opacity-80 cursor-pointer mb-1
                                px-3 py-2 md:px-5 md:py-3
                                text-sm sm:text-base md:text-lg lg:text-xl 
                                "
                        // bg-yellow-400
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index / 10 }}
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
                        {/* Taille des images différentes en fonction de la taille de l'écran */}
                        <Image
                            className='hidden sm:block'
                            src={`/images/icons/${skill.icon}`}
                            alt={skill.name + " icon"}
                            width={50}
                            height={50}
                        />
                        <Image
                            className='block sm:hidden'
                            src={`/images/icons/${skill.icon}`}
                            alt={skill.name + " icon"}
                            width={25}
                            height={25}
                        />
                    </motion.span>
                ))}
            </div>
        </div>
    )
}
