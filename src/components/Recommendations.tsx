import React from 'react'

import Image from 'next/image'

export default function Recommendations() {
  return (
    <div className='
      containerTW
      boxTW
      '>
      <Image
        src="/images/recommandationJCS.png"
        alt="Recommendations Aurélia Heymann"
        width={200}
        height={200}
        // className="hidden rounded-lg shadow-lg w-full h-full md:block"
        className="rounded-lg shadow-xl border-4 border-white border-opacity-60
      w-full h-full mx-auto
        "
      />
    </div>
  )
}
