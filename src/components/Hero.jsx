'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <div>
        <div>
          <div>
            <Image 
              src={'/bee.png'} 
              alt='NimiraTech Billy Bee' 
              width={400} 
              height={400} 
              priority={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
