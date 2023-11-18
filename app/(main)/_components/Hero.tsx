import React from 'react'
import Categories from './Categories'
import prismadb from '@/lib/prismadb'
import { Category } from '@prisma/client';



const Hero = async () => {
    const categories:Category[] = await prismadb.category.findMany()
  return (
    <div className='h-full py-10 grid md:grid-cols-2 lg:grid-cols-3  gap-10'>
          {categories?.map((category) => {
              return (
                <div key={category.id}>
                    <Categories image={category.image} id={category.id} name={category.name} />
                </div>
            )
        })}
    </div>
  )
}

export default Hero