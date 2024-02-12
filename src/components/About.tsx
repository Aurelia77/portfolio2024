'use client'

import React from 'react'
import { motion } from 'framer-motion';

// import { Document, Page, pdfjs } from 'react-pdf';
// import { GlobalWorkerOptions } from 'pdfjs-dist';
// GlobalWorkerOptions.workerSrc = '/pdf.worker.js';
// //pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
// //pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// //  styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// // faire aussi pnpm install canvas


export default function About() {

  const aboutMeTitle = "About\u00a0me"

  //const defaultLayoutPluginInstance = defaultLayoutPlugin();


  // Enflish speaker
  // Mike codeur
  // Mes valeurs
  return <div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // transition={{ duration: 1 }}

    //className="flex flex-col items-center justify-center bg-gray-100 text-gray-800"
    // min-h-screen 

    //containerTW + j'écrase ces valeurs : md:gap-8 lg:gap-8
    className="containerTW md:gap-8 lg:gap-8
       boxTW"
  // sm:max-w-4xl
  >
    <div className='flex' >
      {aboutMeTitle.split('').map((letter, index) => (
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
            delay: 0.5 + index / 5
          }}
          className="text-4xl font-bold text-cyan-300"
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

    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: 1 }}
      href="/images/cv.pdf"
      download
      className="px-4 py-2 bg-cyan-500 text-white font-bold rounded hover:bg-cyan-600 transition-colors"
    >
      Download CV
    </motion.a>


{/* 
    <Document file="/images/cv.jpg">
      <Page pageNumber={1} />
    </Document>

    <Viewer
      fileUrl="/images/cv.jpg"
      plugins={[defaultLayoutPluginInstance]}
    />  */}
  



  
   
    <motion.img
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}

      // initial={{ opacity: 0 }}
      // //animate={{ opacity: 1 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 2 }}

      src="/images/cv300.png"
      alt="CV Aurélia Heymann"
      // className="hidden rounded-lg shadow-lg w-full h-full md:block"
      className="rounded-lg shadow-xl border-4 border-white border-opacity-60 w-full h-full md:block "
    />  
   
   
   
    
  </div>
}
