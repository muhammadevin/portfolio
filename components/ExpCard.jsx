import React from 'react'
import Image from 'next/image'

const ExpCard = ({experience, handleModal}) => {
  return (
    <div onClick={handleModal} className='flex flex-col text-sm font-mono justify-center items-center hover:bg-white hover:text-black
    h-full border border-white rounded-lg px-2 pt-2 pb-4 gap-1 max-w-[18rem] md:max-w-none ease-in-out duration-150 delay-50 hover:cursor-pointer'>
        <Image width="400" height='400' src={experience.image} className="object-cover rounded-lg"></Image>
        <h4 className='mt-2'>{experience.title}</h4>
        <p>{experience.role}</p>
    </div>
  )
}

export default ExpCard