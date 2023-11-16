import { Check, Play } from 'lucide-react'
import React from 'react'
import Image from 'next/image';

interface CategoryProp{
  name: string;
}
const Categories = ({name}:CategoryProp) => {
  return (
    <div className='flex items-center h-full justify-center'>
        <div className='lg:w-[400px] w-[300px] md:w-[350px]'>
          <div className='p-3 rounded-xl relative bg-gradient-to-r from-[#2957ed] to-[#5163e9]'>
            <div className='flex  justify-between'>
              <div className='p-2 rounded-xl w-fit border '>
                <Play color='white' size={30} />
              </div>
              <Image alt='' className='absolute -top-10 right-3' width={100} height={100} src={"/phil2.png"}/>
            </div>
            <p>Level 1</p>
            <p className='text-white text-lg font-bold'>{name}</p>
          </div>
        </div>
    </div>
  )
}

export default Categories