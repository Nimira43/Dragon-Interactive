'use client'

import Image from 'next/image'
import Heading from './sections/Heading'

const About = () => {
  return (
    <div>
      <Heading />
      <div>
        <Image
          src={'/images/about.png'}
          alt='About Image'
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

export default About

