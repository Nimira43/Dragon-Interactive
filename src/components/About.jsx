'use client'

import Image from 'next/image'
import Heading from './sections/Heading'
import Accolades from './sections/Accolades'
import { aboutAwards } from './helpers/variables'
import { IoDownloadOutline } from 'react-icons/io5'
import { IoMdArrowDropleft } from 'react-icons/io'

const About = () => {
  return (
    <div className='min-h-screen px-96 flex flex-col items-center justify-center'>
      <Heading text={'About Us'}/>
      <div className='w-full flex items-center justify-between md:justify-center'>
        <Image
          className='w-[300px] lg:w-[200px] md:hidden'
          src={'/images/about.png'}
          alt='About Image'
          width={400}
          height={400}
        />
        <div className=' relative max-w-[800px] p-5 text-justify'>
          <span className='absolute -left-5 top-20 scale-2.5 md:hidden'>
            <IoMdArrowDropleft />
          </span>
          <p>Dragon Interactive is a pioneering game studio redefining interactive storytelling. With titles like Qine and Gemini, we merge science fiction, philosophy, and cutting-edge technology into compelling games. Our upcoming project, VNR, promises a gripping post-apocalyptic mystery, solidifying our reputation for crafting thought-provoking, immersive worlds that challenge players’ perceptions and intellect.</p>
          <a href="/images/The-Evolution-of-Dragon-Interactive.pdf" download=''>
          <span>Download Gamer Review</span>
          <span>Download Icon</span>
          </a>
        </div>
      </div>
      <div>
        <Accolades />
      </div>
    </div>
  )
}

export default About

