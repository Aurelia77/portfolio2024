import React from 'react'
import { motion } from "framer-motion";

export default function Contact() {

  const contact = {
    name: 'Aurélia Heymann',
    phone: '06 14 94 02 03',
    email: 'aurelia.h@hotmail.fr',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
    github: 'https://github.com/johndoe',
  }

  return (
    // Pour que l'ancre soit au dessous de la navbar on met un mt négatif et on met le même pt pour que ça reste au même endroit
    <div id="contact" className="bg-cyan-100 text-indigo-900 shadow rounded-lg p-6 select-none -mt-20 pt-20 w-60">
      <h2 className="text-2xl font-bold mb-2">{contact.name}</h2>
      <p className="">{contact.phone}</p>
      <p className="">{contact.email}</p>
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={() => navigator.clipboard.writeText(contact.email)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click to copy
      </motion.button>
      <div className="mt-4">
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mr-4">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </div>
  );
};