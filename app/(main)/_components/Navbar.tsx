import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='p-4 bg-[#7ab3f4]'>
        <div className='flex justify-around items-center'>
            <div className='flex items-center gap-2'>
                <Image width={50} height={50} src={"/logo.png"} alt=''/>
                <p className='font-bold text-xl text-stone-200'>I2KNOW</p>
            </div>
            <div>
              <button className="text-white bg-black px-6 py-3">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar