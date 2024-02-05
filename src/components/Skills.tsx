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
    )
}
