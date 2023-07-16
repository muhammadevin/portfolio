'use client'

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs'

const ExpDetail = ({experience, handleModal}) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed 
        inset-0 z-50 outline-none focus:outline-none font-mono left-0 top-0 h-full w-full"
      >
        <div className="relative w-auto my-6 mx-auto max-w-[80%] md:max-w-[60%] max-h-96" ref={modalRef}>
          <div className="border-0 rounded-lg shadow-lg relative flex w-full bg-white outline-none focus:outline-none max-h-[375px] overflow-auto md:overflow-hidden">
            <div className="flex flex-col md:flex-row items-start justify-between p-5 rounded-t text-black gap-4">
              <div className='flex flex-col gap-1 items-start justify-center w-full md:w-1/2 float-left'>
                <Image alt='exp-image' width="400" height='400' src={experience.image} className="max-w-full object-cover rounded-lg mb-2"></Image>
                <div className='flex flex-row gap-2 items-center w-full justify-start'>
                  <h3 className="text-left text-base md:text-xl font-semibold flex-grow-1">{experience.title}</h3>
                  <Link href={experience.link}>
                    <div className='border border-black rounded-sm hover:bg-black hover:text-white h-full'><BsArrowUpRight /></div>
                  </Link>
                </div>
                <h4 className='text-left text-sm md:text-base font-normal'>{experience.role}</h4>
              </div>
              <div className='flex flex-col max-h-[275px] w-full md:w-1/2 float-right md:overflow-auto pb-4 gap-3'>
                <h4 className='text-semibold text-base md:text-lg text-left underline'>Description</h4>
                <p className='text-xs md:text-sm text-justify'>{experience.description}</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default ExpDetail