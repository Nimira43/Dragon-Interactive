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
              priority={true} 
            />
            <span>Bzzz!!!</span>
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
