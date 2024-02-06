import React from 'react'

export default function Contact() {

  const contact = {
    name: 'Aurélia Heymann',
    phone: '06 14 94 02 03',
    email: 'aurelia.h@hotmail.fr',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
    github: 'https://github.com/johndoe',
  }

  return (

    // <div id="contact" >Cliquer pour copier !! Ad mail !!!</div>
    <div className="bg-white shadow rounded-lg p-6 select-none">
      <h2 className="text-2xl font-bold mb-2">{contact.name}</h2>
      <p className="text-gray-700">{contact.phone}</p>
      <p className="text-gray-700">{contact.email}</p>
      <button 
        onClick={() => navigator.clipboard.writeText(contact.email)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Clic pour copier
      </button>
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