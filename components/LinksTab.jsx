import React from 'react'
import Link from 'next/link'

import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { CgFileDocument } from 'react-icons/cg'

const LinksTab = () => {
  return (
    <div className='flex flex-row bg-black rounded-xl py-2 px-4 justify-center items-center gap-5 
    border border-white w-fit hover:bg-white hover:text-black ease-in-out duration-300'>
      <Link href="https://www.linkedin.com/in/muhammadevin/"><BsLinkedin className="text-lg md:text-2xl"/></Link>
      <Link href="mailto:mdevinp@gmail.com"><FiMail className="text-xl md:text-3xl "/></Link>
      <Link href="https://www.instagram.com/devinpra/"><BsInstagram className="text-lg md:text-2xl "/></Link>
      <Link href="https://www.ristek.link/CV_MDP"><CgFileDocument className="text-xl md:text-3xl"/></Link>
    </div>
  )
}

export default LinksTab