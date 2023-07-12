"use client"

import Image from 'next/image'
import Link from 'next/link'
import './index.css'
import grain from '../public/grain.svg'
import logoui from '../public/logo_ui.png'
import brain from '../public/brain.png'
import lappy from '../public/lappy.png'
import profileimg from '../public/komuk.png'
import pythonicon from '../public/python.png'
import js from '../public/js.png'
import tf from '../public/tf.png'
import reacticon from '../public/react.png'
import nexticon from '../public/next.png'
import cssicon from '../public/css.png'
import tailwindicon from '../public/tailwind.png'
import guitar from '../public/guitar.png'
import drum from '../public/drum.png'
import cam from '../public/cam.png'

import { IoCloudyNight } from 'react-icons/io'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { CgFileDocument } from 'react-icons/cg'
import { useEffect, useRef } from 'react'

export default function Home() {
  const appRef = useRef(null)

  useEffect (() => {
    const moveGradient = (e)=> {
      const winWidth = window.innerWidth
      const winHeight = window.innerHeight

      const mouseX = Math.round((e.pageX / winWidth) * 100)
      const mouseY = Math.round((e.pageY / winHeight) * 100)

      if (appRef) {
        appRef.current.style.setProperty('--mouse-x', mouseX.toString() + "%")
        appRef.current.style.setProperty('--mouse-y', mouseY.toString() + "%")
      }
    }

    document.addEventListener("mousemove", moveGradient)
    return function cleanup() {
      document.removeEventListener("mousemove", moveGradient)
    }
  }, [appRef])

  return (
    <main ref={appRef} className="flex min-h-screen flex-col bg-primary h-[3450px] w-full">
      <div className='absolute z-10 w-[100vh]] h-[3450px] mix-blend-color-burn'><Image className=' object-cover w-full h-full opacity-30' src={grain}></Image></div>
      <div className='relative'>
        <div className="absolute z-0 w-[50px] md:w-[320px] h-[50px] md:h-[300px] top-[200px] left-[100px] flex-shrink-0 red__blur" />
        <div className="absolute z-0 w-[50px] md:w-[320px] h-[50px] md:h-[300px] top-[250px] left-[490px] flex-shrink-0 orange__blur" />
        <div className="absolute z-0 w-[50px] md:w-[320px] h-[50px] md:h-[300px] top-[320px] right-[400px] flex-shrink-0 pink__blur" />
        <div className="absolute z-0 w-[50px] md:w-[320px] h-[50px] md:h-[300px] top-[220px] right-[100px] flex-shrink-0 lpink__blur" />
        
        <div className="absolute z-0 w-[320px] h-[300px] top-[1200px] left-[100px] flex-shrink-0 pink__blur" />
        <div className="absolute z-0 w-[320px] h-[300px] top-[1250px] left-[400px] flex-shrink-0 lpink__blur" />
        <div className="absolute z-0 w-[320px] h-[300px] top-[1250px] right-[400px] flex-shrink-0 orange__blur" />
        <div className="absolute z-0 w-[320px] h-[300px] top-[1220px] right-[100px] flex-shrink-0 red__blur" />
      </div>
      
      <div className="z-20 min-h-8 w-full pt-5 px-5">
        <div className='px-10 py-5 flex flex-row justify-between items-center rounded-2xl bg-secondary'>
          <div className="flex flex-row gap-20">
            <Link href="#aboutme">Home</Link>
            <Link href="#">Works</Link>
            <Link href="#">Photos</Link>
          </div>
          <p>MDP</p>
        </div>
      </div>
      
      <div className='headline z-20 px-10 py-5 h-[810px]'>

        <div className='flex flex-col h-[540px] justify-center items-center gap-2 pt-32'>
          <div className='flex flex-row gap-3 mb-5 justify-center items-center'>
            <div className='circle'>
              <h1 className='text-[54px] font-medium'>Hello.</h1>
            </div>
            <h1 className='text-[54px] font-medium'>I'm </h1>
            <h1 className='text-[54px] font-semibold'>Devin, Muhammad.</h1>
          </div>
          <div className='flex flex-row justify-center h-[34px] gap-4 items-center'>
            <Image className='w-[32px] h-[32px]' src={logoui}></Image>
            <p className='font-light'>Currently taking my bachelor's degree in Computer Science at University of Indonesia.</p>
          </div>
          <div className='flex flex-row justify-center h-[34px] gap-4 items-center'>
            <Image className='w-[32px] h-[32px]' src={lappy}></Image>
            <p className='font-light'>Deep passion for software engineering, focusing on front-end development.</p>
          </div>
          <div className='flex flex-row justify-center h-[34px] gap-4 items-center'>
            <Image className='w-[32px] h-[32px]' src={brain}></Image>
            <p className='font-light'>(Also) Just developed interest in data science and machine learning.</p>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='flex flex-row bg-black rounded-2xl w-[250px] h-[59px] justify-center items-center gap-5 drop__shadow'>
            <Link href="#"><BsLinkedin style={{ fontSize: "24px" }} /></Link>
            <Link href="#"><FiMail style={{ fontSize: "32px" }} /></Link>
            <Link href="#"><BsInstagram style={{ fontSize: "24px" }} /></Link>
            <Link href="#"><CgFileDocument style={{ fontSize: "28px" }} /></Link>
          </div>
        </div>
      </div>

      <div className='aboutme z-20 px-64 py-20 h-[810px] flex flex-row scroll-smooth gap-10' id='aboutme'>
        <Image className='w-[420px] h-[600px] rounded-2xl' src={profileimg}></Image>
        <div className='flex flex-col h-[600px] gap-1 justify-between'>
          <p className=' text-sm font-extralight'>I find great satisfaction in bringing visual-pleasing ideas to life through my work, ensuring that user experiences are both seamless and visually appealing. Several projects I’ve worked with involves me leading the front-end development from the designing process up until the development. Furthermore, interacting with data through the realm of data science and machine learning has been my current joy. I’m currently participating as a Machine Learning cohort in Bangkit 2023 where I got to learn how to develop cool machine learning models such as object detection and (cuss) word detection.</p>
          <p className='text-sm font-extralight'>My hobbies revolves around arts such music and photography. Both reflects the idea of fulfilling my senses in the best possible way. I play in a band every once and a while, but writing (unfinished) music has always been my way pouring random ideas out my head.</p>
          <div className='flex flex-col bg-black rounded-2xl w-[497px] h-[127px] gap-5 drop__shadow p-5'>
            <h3 className='text-lg font-semibold'>Tech Stack</h3>
            <div className='flex flex-row gap-8'>
              <Image src={pythonicon} className="w-[34px] h-[34px]"></Image>
              <Image src={js} className="w-[34px] h-[34px]"></Image>
              <Image src={reacticon} className="w-[38px] h-[34px]"></Image>
              <Image src={nexticon} className="w-[34px] h-[34px]"></Image>
              <Image src={cssicon} className="w-[29px] h-[34px]"></Image>
              <Image src={tailwindicon} className="w-[56px] h-[34px]"></Image>
              <Image src={tf} className="w-[31px] h-[34px]"></Image>
            </div>
          </div>

          <div className='flex flex-col bg-black rounded-2xl w-[225px] h-[127px] gap-5 drop__shadow p-5'>
            <h3 className='text-lg font-semibold'>Tech Stack</h3>
            <div className='flex flex-row gap-8'>
              <Image src={guitar} className="w-[32px] h-[34px]"></Image>
              <Image src={drum} className="w-[34px] h-[34px]"></Image>
              <Image src={cam} className="w-[42px] h-[34px]"></Image>
            </div>
          </div>
        </div>
      </div>

      
    </main>
  )
}