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
        <div>
          <span>Arrow Left</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ducimus quaerat ad laudantium atque consequatur nulla eos explicabo provident magni voluptates ipsam eveniet maxime quia dolore deleniti. Porro, cum ullam?</p>
          <a href="/newsletter.pdf"></a>
        </div>
      </div>
    </div>
  )
}

export default About

