'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <div>
        <div className='flex flex-col items-center justify-center gap-y-3 font-normal'>
          <div>
            <Image 
              src='/images/dragon-1.png'
              alt='Dragon image'
              width={400}
              height={400}
              priority={true}
            />
            <span>1997</span>
          </div>
          <h1>Dragon Interactive</h1>
          <p>Creating New Horizons</p>
        </div>
        <div>
          <a href='#'>Icon</a>
        </div>
        <a href='#'>View Games</a>
      </div>
    </div>
  )
}

export default Hero
