import React from 'react'
import Image from 'next/image'
import { PythonLogo, JSLogo, ReactLogo, NextLogo, CSSLogo, TailwindLogo, TFLogo } from '@/public'

const TechStack = () => {
  const textack = [PythonLogo, JSLogo, ReactLogo, NextLogo, CSSLogo, TailwindLogo, TFLogo]

  return (
    <div className='border-white border flex flex-row h-10 w-full md:h-16
    overflow-hidden select-none max-w-sm'>
      <div className='flex flex-row items-center py-2 px-4 gap-2 sm:gap-4
      flex-shrink-0 justify-around whitespace-no-wrap w-full'>
        {textack.map((item, index) => (
          <div className='imggro' key={index}>
            <Image alt='techstack-img' src={item} className="w-auto h-4 sm:h-5 lg:h-8" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack