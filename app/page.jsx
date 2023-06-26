import Image from 'next/image'
import Link from 'next/link'
import './index.css'
import grain from '../public/grain.svg'
import { IoCloudyNight } from 'react-icons/io'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-primary px-10 py-5 h-[3450px]">
      <div className='grain__image' style={{ backgroundImage: `url(${grain.src})` }}/>
      <div className="flex flex-row justify-between content-center">
        <div className="flex flex-row gap-20">
          <Link href="#">Home</Link>
          <Link href="#">Works</Link>
          <Link href="#">Photos</Link>
        </div>
        <p>MDP</p>
      </div>

      <div className="absolute z-[0] w-[320px] h-[300px] top-[200px] left-[100px] flex-shrink-0 red__blur" />
      <div className="absolute z-[0] w-[320px] h-[300px] top-[250px] left-[490px] flex-shrink-0 orange__blur" />
      <div className="absolute z-[0] w-[320px] h-[300px] top-[320px] right-[400px] flex-shrink-0 pink__blur" />
      <div className="absolute z-[0] w-[320px] h-[300px] top-[220px] right-[100px] flex-shrink-0 lpink__blur" />
    </main>
  )
}