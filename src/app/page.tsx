'use client'

import React from 'react';
import Presentation from '@/components/Presentation';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function HomePage() {

  // const links = usePortfolioContextProvider()

  return (
    <div className="containerTW">
      <div className='boxTW'>
        <Presentation />
        <Skills />
      </div>

      <Projects />
      <Contact />
    </div>
  )

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
