import Image from "next/image"
import { LogoDVN } from "@/public"

const Navbar = () => {
  return (
    <div className='flex w-full max-h-36 p-4 justify-start items-center gap-4'>
      <Image src={LogoDVN} alt="logo" className='w-auto h-10 md:h-20 rounded-full border border-white'></Image>
      <div className='hidden md:flex flex-row gap-1 text-white text-xl md:text-3xl'>
        <span className='font-serif'>Hi</span>
        <span className='font-sans'>WELCOME</span>
        <span className='font-serif'>to Devin&apos;s portfolio.</span>
      </div>
    </div>
  )
}

export default Navbar