import Image from 'next/image'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'

export default function Home() {
  return (
    <div className="bg-[#eae5e5] ">
      <Navbar />
      <Hero />
    </div>
  )
}
