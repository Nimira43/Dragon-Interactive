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
          <p>Dragon Interactive is a pioneering game studio redefining interactive storytelling. With titles like Qine and Gemini, we merge science fiction, philosophy, and cutting-edge technology into compelling games. Our upcoming project, VNR, promises a gripping post-apocalyptic mystery, solidifying our reputation for crafting thought-provoking, immersive worlds that challenge players’ perceptions and intellect.</p>
          <a href="/images/The-Evolution-of-Dragon-Interactive.pdf"></a>
        </div>
      </div>
    </div>
  )
}

export default About

