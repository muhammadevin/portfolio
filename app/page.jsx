'use client'

import Image from 'next/image'
import './index.css'
import { useState, useEffect } from 'react';
import supabase from '@/utils/supabase'
import { LogoDVN, Image1, Image2, Image3, Image4 } from '@/public'
import { Navbar, ExpCard, LinksTab, TechStack, ExpDetail } from '@/components'

export const revalidate = 5

export default function Home() {
  const [selectedItemId, setSelectedItemId] = useState(null)
  const [experience, setExperience] = useState([]);

  const handleModal = (itemId) => {
    setSelectedItemId(itemId);
  };

  useEffect(() => {
    const fetchExperience = async () => {
      const { data } = await supabase.from('experience').select();
      setExperience(data);
    };

    fetchExperience();
  }, []);

  return (
    <main className="w-full h-[100vh]">
      <Navbar />

      <div className='flex flex-row w-full min-h-[400px] max-h-[500px] gap-2 mt-2 relative'>
        <div className='w-2/5 float-left relative'>
          <Image src={Image2} className='h-full object-fill' alt="img2"></Image>
        </div>
        <div className='w-3/5 float-right relative'>
          <p className='absolute right-1 top-1 font-serif text-xs md:text-base'>muhammadevin</p>
          <p className='absolute right-1 bottom-1 font-serif text-xs md:text-base'>Yogyakarta 2023</p>
          <Image src={Image1} className="h-full object-cover" alt='img1'></Image>
        </div>
      </div>

      <div className='flex md:hidden flex-row gap-1 text-white text-2xl md:text-3xl justify-center items-center p-4'>
        <span className='font-serif'>Hi</span>
        <span className='font-sans'>WELCOME</span>
        <span className='font-serif'>to Devin&apos;s portfolio.</span>
      </div>

      <div className='flex pb-3 md:py-4 px-4 font-mono mb-0 md:mb-24 justify-center items-center'>
        <div className="flex flex-col w-4/5 md:w-3/5 justify-center items-center text-center gap-4 text-sm md:text-base">
          <p>
            Currently taking my bachelors degree in Computer Science at University of Indonesia. Deep passion for software engineering, focusing on front-end development. (Also) Interest in data science and machine learning.
          </p>
          <LinksTab />
        </div>
      </div>

      <div className='flex flex-row w-full min-h-[200px] gap-2 my-4 relative'>
        <div className='w-3/5 float-left'>
          <Image src={Image3} className='h-full object-cover' alt="img3"></Image>
        </div>
        <div className='w-2/5 float-right'>
          <Image src={Image4} className='h-full object-cover' alt="img4"></Image>
        </div>
        <p className='hidden absolute left-1/4 bottom-1 font-serif text-white text-4xl md:flex gap-2'>
          <span className='bg-black px-2'>Hello</span>
          <span className='bg-black px-2'>Im Devin Muhammad</span>
        </p>
      </div>

      <div className='flex flex-col gap-4 py-4 px-6 justify-center items-center font-mono leading-6 text-sm'>
        <div className='w-full md:w-3/5 flex flex-col gap-4'>
          <p className='bg-black text-white gap-2 text-justify'>I find great satisfaction in bringing visual-pleasing ideas to life through my work, ensuring that user experiences are both seamless and visually appealing. Several projects I&apos;ve worked with involves me leading the front-end development from the designing process up until the development.</p>
          <p className='bg-black text-white gap-2 text-justify'>Furthermore, interacting with data through the realm of data science and machine learning has been my current joy. I&apos;m currently participating as a Machine Learning cohort in Bangkit 2023 where I got to learn how to develop cool machine learning models that could solve real world problems.</p>
          <p className='bg-black text-white gap-2 text-justify'>My hobbies revolves around arts such music and photography. Both reflects the idea of fulfilling my senses in the best possible way. I play in a band every once in a while, but writing (unfinished) music has always been my go-to activity during free time.</p>
        </div>
      </div>

      <div className='flex flex-row justify-center items-center gap-2 p-6 h-10 md:h-16 mt-4'>
        <div className='flex flex-row items-center justify-center gap-2 w-full sm:w-3/5'>
          <Image src={LogoDVN} alt="logo" className='w-auto h-10 md:h-16'></Image>
          <div className='bg-white text-black font-sans p-2 w-14 leading-3 h-10 md:h-16 flex justify-center items-center'>
            <span className='flex'>Tech Stack</span>
          </div>
          <TechStack />

        </div>
      </div>

      <div className='flex items-center justify-center py-10 px-6 w-full'>
        <div className='flex flex-col w-full md:w-3/5 items-center justify-center text-center gap-6'>
          <div className='flex items-center justify-center p-3 rounded-lg'>
            <h4 className='text-3xl font-sans'>my WORKS</h4>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-1 justify-items-center md:gap-6 w-full px-8 sm:px-0'>
            {experience.map((item) => (
              <div className='flex justify-center items-center h-fit' key={item.id}>
                <ExpCard experience={item} handleModal={() => handleModal(item.id)}/>
                {selectedItemId === item.id ? (
                  <ExpDetail key={item.id} experience={item} handleModal={() => handleModal(null)} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <h4 className='text-sm text-white items-center text-center justify-center py-6 font-serif'>
        © 2023 Muhammad Devin Pratista. All rights reserved.
      </h4>
    </main>
  )
}