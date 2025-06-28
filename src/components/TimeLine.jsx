'use client'

import Image from 'next/image'
import Heading from './sections/Heading'

const TimeLine = () => {
  return (
    <div>
      <Heading 
        text={'Placeholder'}
      />
      <Image 
          src={'/images/timeline.png'}
          alt={'Timeline Dragon Image'}
          width={400}
          height={400}      
      />
      <div>
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
