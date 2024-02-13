import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Presentation() {

    const description = [
        <div key={1}><span className='font-bold'>{"Front-end\u00A0developer"}</span></div>,
        // <div key={1}><span className='font-bold'>{"Front-end\u00A0developer"}</span> based in Grenoble (France)</div>,
        <div key={2}><span className='font-bold'>3 years IT experience</span></div>,
        <div key={3}><span className='font-bold'>Last whole year : React and TS</span> formation and projects</div>,
        // <div key={3}><span className='font-bold'>Last whole year : React and TS</span> formation and projects ({"Mike\u00A0Codeur"})</div>,
        <div key={4}><span className='font-bold'>5 years IT formation</span></div>,
        <div key={5}><span className='font-bold'>Fluent in English</span></div>,
    ];

    return <div
        className='flex justify-between gap-5 max-w-3xl m-auto'
    //                className='flex justify-between gap-5 max-w-3xl m-auto max-h-52'

    >
        {/* TEXTE */}
        <div className=' w-[60%] flex flex-col justify-around'>
            <motion.h1
                className="text-cyan-300 md:text-4xl lg:text-5xl font-semibold mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                //whileInView="visible"
            >
                <p>
                    {/* Hello! I&apos;m<br /> */}
                    <span className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl'>Aurélia Heymann</span>
                </p>
            </motion.h1>

            {description.map((descr, index) => (
                <motion.div
                    key={index}
                    className={(index % 2 === 1 ? "text-cyan-100" : "" )+ " text-base sm:text-lg md:text-xl lg:text-2xl flex items-start gap-2 mt-2"}
                    // text-gray-600 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    //whileInView="visible"
                    transition={{ delay: 0.2 + index / 10 }}
                // transition={{ delay: 0.5 }}
                >
                    <Image
                        src="/images/icons/star-cyan.png"
                        alt="Right arrow"
                        width={20}
                        height={20}
                        className='hidden sm:block mt-1'
                    />
                    {descr}
                </motion.div>
            ))
            }
        </div>

        {/* PHOTO (2 tailles de portrait selon la taille de l'écran)  + btn CONTACT ME */}
        <div className="relative rounded-lg w-[38%] h-[70%] 
             "
        // overflow-hidden
        >
            <motion.img
                initial={{ opacity: 0 }}
                //animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                src="/images/portrait3.png"
                alt="Portrait Aurélia Heymann"
                // className="hidden rounded-lg shadow-lg w-full h-full md:block"
                className="hidden md:block rounded-lg shadow-xl border-4 border-white border-opacity-60 w-full h-full  "
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src="/images/portrait2.png"
                alt="Portrait Aurélia Heymann"
                className="md:hidden rounded-lg shadow-lg border-4 border-white border-opacity-60 w-full h-full"
            />
            {/* BOUTON dans une DIV pour avoir l'effet voulu (sinon il disparait quand on quitte le FOCUS) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView={{ scale: [0, 1.3, 1] }}
                transition={{ times: [0, 0.3, 1], duration: 1.5, delay: 1 }}
            >
                {/* <Link href="#contact"> */}
                    <motion.button                        
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                            transition: { duration: 0.1 }
                        }}
                        // uppercase sm:lowercase ==> mais pas la 1ere lettre en maj !
                        className="cyanBtn flex justify-center items-center  
                        text-base sm:text-2xl 
                        py-[4%] sm:py-2 px-4 
                        uppercase sm:normal-case
                        w-full mt-4"
                        onClick={() => window.location.href = '#contact'}
                    >
                        Contact&nbsp;me
                    </motion.button>
                {/* </Link> */}
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
}
