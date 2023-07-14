import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ExpCard = ({title, role, image, link}) => {
  return (
    <Link href={link}>
      <div className='flex flex-col text-sm font-mono justify-center items-center hover:bg-white hover:text-black
      h-full border border-white rounded-lg px-2 pt-2 pb-4 gap-1 max-w-[18rem] md:max-w-none ease-in-out duration-150 delay-50'>
          <Image src={image} className="object-cover rounded-lg"></Image>
          <h4 className='mt-2'>{title}</h4>
          <p>{role}</p>
      </div>
    </Link>
  )
}

export default ExpCard