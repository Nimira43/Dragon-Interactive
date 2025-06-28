'use client'

import Image from 'next/image'
import Heading from './sections/Heading'

const TimeLine = () => {
  return (
    <div className='py-20 px-96 relative'>
      <Heading 
        text={'Placeholder'}
      />
      <Image 
          src={'/images/timeline.png'}
          alt={'Timeline Dragon Image'}
          width={400}
          height={400} 
          className='absolute -top-4 opacity-70 lg:hidden k'     
      />
      <div className='w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10' >
        <div>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            <span>Lorem, ipsum dolor.</span>
            <span>Lorem, ipsum dolor.</span>
          </p>
          <div>
            <span>Lorem</span>
            <ul>
              <li>Icon</li>
            </ul>
          </div>
          <span>Date</span>
        </div>
        <div>Timeline</div>
      </div>
    </div>
  )
}

export default TimeLine
