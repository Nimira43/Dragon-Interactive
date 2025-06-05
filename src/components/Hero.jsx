'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <div>
        <div className='flex flex-col items-center justify-center gap-y-3 font-normal'>
          <div className='flex items-center justify-center'>
            <Image 
              src='/images/dragon-1.png'
              alt='Dragon image'
              width={400}
              height={400}
              priority={true}
              className='h-auto w-[150px]'
            />
            {/* <span className='absolute text-3xl font-medium text-main'>1997</span> */}
          </div>
          <h1 className='text-center text-3xl font-medium tracking-wider logo'>Dragon Interactive</h1>
          <p className='text-sm logo '>Creating New Horizons</p>
        </div>
        <div>
          <a href='#'>Icon</a>
        </div>
        <a 
          href='#'
          className='mx-auto mt-7 block w-max px-3 py-1 border border-dark uppercase cursor-pointer hover:border-main hover:text-main transition-all'
        >
          View Games
        </a>
      </div>
    </div>
  )
}

export default Hero
