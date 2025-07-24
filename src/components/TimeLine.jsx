'use client'

import Image from 'next/image'
import Heading from './sections/Heading'

const TimeLine = () => {
  return (
    <div className='py-20 px-96 relative'>
      <Image 
          src={'/images/timeline.png'}
          alt={'Timeline Dragon Image'}
          width={400}
          height={400} 
          className='absolute -top-4 right-96 opacity-70 lg:hidden'     
      />
      <div className='w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10'>
        <div className='w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative -left-[300px] bg-yellow-200'>
          <div>
            <h1>Our Approach</h1>
            <p>
              <span>History</span>
              <span>History</span>
            </p>
            <div>
              <span>Experience</span>
              <ul>
                <li>Experience</li>
              </ul>
            </div>
            <span>Icon</span>
          </div>
          <div>2025</div>  
        </div>
        <div>Timeline</div>
      </div>
    </div>
  )
}

export default TimeLine
