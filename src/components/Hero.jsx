'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <div>
        <div className='flex flex-col items-center justify-center gap-y-3 font-light capitalize'>
          <div className='flex items-center justify-center'>
            <Image 
              src={'/bee.png'} 
              alt='NimiraTech Billy Bee' 
              width={400} 
              height={400} 
              priority={true} 
              className='h-auto w-[150px]'
            />
            <span className='absolute text-3xl font-semibold text-white'>Bzzz!!!</span>
            <h1>We are NimiraTech</h1>
            <p>We Love Coding 🖥️</p>
          </div>
          <a href="#">Icon</a>
        </div>
        <a href="#">Talk to Us</a>
      </div>
    </div>
  )
}

export default Hero
