import { Check, Play } from 'lucide-react'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from "react-icons/fa";

interface CategoryProp{
  name: string;
  id: string;
  image: string;
}
const Categories = ({name, id, image}:CategoryProp) => {
  return (
    <Link href={`/category/${id}`} className='flex cursor-pointer hover:scale-[1.03] transition-all ease-in-out items-center h-full justify-center'>
        <div className='lg:w-[400px] w-[300px] md:w-[350px] '>
          <div className='p-3 rounded-xl shadow-lg relative bg-gradient-to-r from-[#2957ed] to-[#5163e9]'>
            <div className='flex  justify-between'>
              <div className='p-2 text-white rounded-xl w-fit border-[3px] '>
                <FaPlay size={26} />
              </div>
              <Image alt='' className='absolute -top-10 right-3' width={100} height={100} src={image}/>
            </div>
            <div>
              <p>80%</p>
              <div className=' bg-gray-100 w-full rounded'>
                <div className='w-[80%] bg-green-500 h-[10px] rounded-l' />
              </div>
            </div>
            <p className='text-white text-lg font-bold'>{name}</p>
          </div>
        </div>
    </Link>
  )
}

export default Categories