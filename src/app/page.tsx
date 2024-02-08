'use client'

import React from 'react';
import Presentation from '@/components/Presentation';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function HomePage() {

  // const links = usePortfolioContextProvider()

  return <div className="containerTW"
        // sm:max-w-4xl 
        >
          {/* A voir si mieux ORANGE ou BLEU ??? et ROTATE 6 ou 12 ??? */}
          {/* inset-0 définit top, right, bottom, et left à 0. */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl sm:p-12 max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"></div> */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div> */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div> */}
          {/* <div
            // shadow-lg 
            className="
                        relative 
                        px-4
                        py-10 
                        bg-white
                        sm:rounded-3xl sm:p-12 lg:p-16
                        max-w-xl md:max-w-2xl lg:max-w-4xl
                        mx-auto"> */}
          {/* <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-12"> */}
          {/* <div className="max-w-xl mx-auto"> */}

          <div
            className='boxTW' 
          >
            <Presentation />
            <Skills />
    </div>

    <Projects />
    <Contact />
  </div>

      {/* More (links) */}
      {/* <div className="mt-16 flex flex-wrap justify-around gap-7">
                {links.map((link : any, index : number) => (
                    <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0 + index * 2 / 10 }}>
                        <Link href={link.link} className='flex gap-1' >
                            <motion.span
                                className="font-bold"
                                whileHover={{ rotate: 5 }}
                            >
                                {link.name}
                            </motion.span>
                            <Image
                                src="/images/icons/blue_go_to.png"
                                alt="Right blue arrow"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </motion.div>
                ))}
            </div> */}
}
