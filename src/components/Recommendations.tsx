'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Recommendations() {

  const recommendationTitle = "Recommendation\u00a0letters..."

  return (
    <div
    // boxTW + on ecrase max-w pour que ce soit plus grand
      className='boxTW lg:max-w-full'
    >
      <div className='flex' >
        {recommendationTitle.split('').map((letter, index) => (
          <motion.span
            key={index}
            initial={{
              //y: -50, 
              opacity: 0
            }}
            whileInView={{ y: 0, opacity: 1 }}
            //animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 0.5 + index / 10
            }}
            className="text-3xl sm:text-4xl font-bold text-cyan-300"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className='
        mt-10 sm:mt-14 lg:mt-20
      flex flex-wrap justify-around gap-1
      '>
        <div className='max-w-3xl mb-10'>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className=" text-lg sm:text-2xl font-semibold mb-2 text-center"
          >
            ...from my IT manager at Prox-Hydro
          </motion.h1>
          <motion.img
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}

            // initial={{ opacity: 0 }}
            // //animate={{ opacity: 1 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 2 }}

            src="/images/recommandationJCS.png"
            alt="Aurélia Heymann recommendations"
            // className="hidden rounded-lg shadow-lg w-full h-full md:block"
            className="rounded-lg shadow-xl border-4 border-white border-opacity-60 md:block "
          />
        </div>

        <div className='max-w-3xl'>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className=" text-lg sm:text-2xl font-semibold mb-2 text-center"
          >
            ...from the person for whom I developed the CRM app
          </motion.h1>
          <motion.img
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}

            // initial={{ opacity: 0 }}
            // //animate={{ opacity: 1 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 2 }}

            src="/images/recommandationLauriane.png"
            alt="Aurélia Heymann recommendations"
            // className="hidden rounded-lg shadow-lg w-full h-full md:block"
            className="rounded-lg shadow-xl border-4 border-white border-opacity-60 md:block "
          />
        </div>
      </div>
    </div>
  )
}
