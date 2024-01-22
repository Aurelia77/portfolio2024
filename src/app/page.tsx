'use client'

import React from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function Home() {

  return (
    <div 
    // bg-gray-100
      className="
        min-h-screen 
        py-6 
        flex flex-col justify-center sm:py-12
        text-indigo-700
      "
      >
      <div className="relative py-3 
      sm:w-1/2 sm:max-w-2xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-12 sm:rounded-3xl"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div> */}
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <motion.h1
                className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold"
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                Hello! I&apos;m <span className='text-2xl sm:text-4xl md:text-6xl lg:text-8xl'>Aurélia Heymann</span>
              </motion.h1>

              {/* <motion.h1
                className="text-7xl font-semibold"
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                Hello! I&apos;m <span className='text-8xl'>Aurélia Heymann</span>
              </motion.h1> */}

              <motion.p
                className="mt-2 text-gray-600"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.5 }}
              >
                I&apos;m a Next.js and TypeScript developer. Welcome to my portfolio!
              </motion.p>
            </div>
            <div className="mt-10">
              <Link href="/about">
                <span className="text-cyan-600 font-bold">About Me {'->'}</span>
              </Link>
              <Link href="/work">
                <span className="ml-4 text-cyan-600 font-bold">My Work {'->'}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}
