'use client'

import React from 'react'
import { motion } from 'framer-motion';

export default function About() {

  const aboutMeTitle = "About me"

  // Enflish speaker
  // Mike codeur
  // Mes valeurs
  return <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      //className="flex flex-col items-center justify-center bg-gray-100 text-gray-800"
      // min-h-screen 

      //containerTW + j'écrase ces valeurs : md:gap-8 lg:gap-8
      className="containerTW md:gap-8 lg:gap-8
       boxTW"
  // sm:max-w-4xl
  >
    <div className='flex' >
      {/* On remplace les espaces sinon motion.span ne les affiche pas */}
      {aboutMeTitle.replace(/ /g, '\u00a0').split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ 
            //y: -50, 
            opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, 
            delay: 0.5 + index / 5 
          }}
          className="text-4xl font-bold"
        >
          {letter}
        </motion.span>
      ))}
    </div>   

      <motion.p
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl"
      >
        Passionate web developer, I am driven by the desire to create websites that are efficient, aesthetic and user-friendly.  
      </motion.p>
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-xl"
      >
        Motivated by technical challenges and human interactions, I put my expertise at the service of your projects to offer you innovative and sustainable web solutions.  
      </motion.p>

    <motion.img
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}

      // initial={{ opacity: 0 }}
      // //animate={{ opacity: 1 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 2 }}

      src="/images/cv.jpg"
      alt="CV Aurélia Heymann"
      // className="hidden rounded-lg shadow-lg w-full h-full md:block"
      className="rounded-lg shadow-xl border-4 border-white border-opacity-60 w-full h-full md:block "
    />

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mb-4"
      >coucou
      </motion.div>

      <motion.a
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        href="/path/to/your/cv.pdf"
        download
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-colors"
      >
        Télécharger mon CV
      </motion.a>
    </motion.div>
}
