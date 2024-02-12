'use client'

import React from 'react'
import { motion } from "framer-motion";

export default function Contact() {

  const contact = {
    name: 'Aurélia Heymann',
    phone: '06 14 94 02 03',
    email: 'aurelia.h@hotmail.fr',
    linkedin: 'https://www.linkedin.com/in/aurelia-heymann-37ba689b/',
    github: 'https://github.com/Aurelia77',
  }

  return (
  
    // Pour que l'ancre soit au dessous de la navbar on met un mt négatif et on met le même pt pour que ça reste au même endroit
    //-mt-20 pt-20
         
    <div 
      id="contact" 
      className="flex flex-wrap shadow rounded-lg 
      border-4 border-cyan-300 border-opacity-80 bg-white bg-opacity-20
      text-xl sm:text-2xl md:text-3xl
      p-6 sm:p-10 md:p-16 lg:p-20
      gap-8 sm:gap-12 md:gap-16 lg:gap-22
      md:mt-2 lg:mt-3
      mx-4 lg:mx-[10%]
      "
    >
      <h2 className="text-cyan-200 font-bold mb-3
      text-2xl sm:text-3xl md:text-4xl
      ">{contact.name}</h2>

      <div className='flex flex-col gap-7 select-none ' >
        <p className="">{contact.phone}</p>

        <div className='flex flex-wrap 
        gap-4 sm:gap-6 
        items-center' >
          <p className="">{contact.email}</p>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => navigator.clipboard.writeText(contact.email)}
            className="cyanBtn px-4 md:text-2xl"
          >
            Click to copy email
          </motion.button>
        </div>



{/* // voir les attributs ??? et couleur gitHub */}
        <div className="font-mono mt-8">
          <a 
            href={contact.linkedin} 
            target="_blank" 
            //L'attribut rel définit la relation entre la page actuelle et la page liée. noopener et noreferrer sont utilisés pour des raisons de sécurité et de performance lorsque target="_blank" est utilisé. noopener empêche la nouvelle page d'avoir accès à la page qui a ouvert le lien via l'objet window.opener. noreferrer empêche le navigateur d'envoyer la page de référence à la page liée.
            rel="noopener noreferrer" 
            className="text-cyan-300 hover:text-cyan-400 mr-8">


              {/* Mettre icone Linkin ??? Et git ???? */}


            <i className="fab fa-linkedin"></i> LinkedIn


            
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-600 mt-1">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>       
      </div>
    </div>
  );
};