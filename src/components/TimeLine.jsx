'use client'

import Image from 'next/image'
import Heading from './sections/Heading'

const TimeLine = () => {
  return (
    <div>
      <Heading 
        text={'Placeholder'}
      >
        <Image 
          src={''}
          alt='Timeline Dragon Image'
          width={400}
          height={400}      
        />

      </Heading>
    </div>
  )
}

export default TimeLine
