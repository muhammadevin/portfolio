import Image from 'next/image'
import './index.css'
import supabase from '@/utils/supabase'
import { LogoDVN, Image1, Image2, Image3, Image4 } from '@/public'
import { Navbar, LinksTab, TechStack, Experience } from '@/components'

export const revalidate = 5

const Home = async () => {
  const { data: experience } = await supabase.from('experience').select();

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
            I&apos;m Devin, a Computer Science graduate from the University of Indonesia. Deep passion for software engineering, focusing on front-end and mobile development.
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
          <p className='bg-black text-white gap-2 text-justify'>I find great satisfaction in bringing visual-pleasing ideas to life through my work, ensuring that user experiences are both seamless and visually appealing. Throughout my college years, I led front-end development for multiple projects, handling everything from designing user interfaces to writing the code.</p>
          <p className='bg-black text-white gap-2 text-justify'>I also explored the world of data science and machine learning, completing the Machine Learning path at Bangkit Academy 2023, where I learned about data analytics and building models to solve real-world problems. While it was quite an experience, my passion led me back to front-end development. I am currently working as a software developer, focusing on front-end and mobile development in the banking and financial industry.</p>
          <p className='bg-black text-white gap-2 text-justify'>My hobbies revolve around arts such music and photography. Both reflect the idea of fulfilling my senses in the best possible way. I&apos;ve been taking photos on film since 2018, and around the same time, I started playing in a band every once in a while—both of which I still enjoy today.</p>
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
        <Experience experience={experience} />
      </div>

      <h4 className='text-sm text-white items-center text-center justify-center py-6 font-serif'>
        © 2023 Muhammad Devin Pratista. All rights reserved.
      </h4>
    </main>
  )
}

export default Home