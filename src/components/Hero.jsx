'use client'

import Image from 'next/image'
import { RxDiscordLogo } from "react-icons/rx"
import { BiLogoTwitch } from "react-icons/bi"
import { GiSpikedDragonHead } from 'react-icons/gi'
import { AiOutlineYoutube } from "react-icons/ai"
import { ImFacebook } from "react-icons/im"
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useState } from 'react'

const heroIcons = [
  {icon: <RxDiscordLogo />, key: 'discord'},
  {icon: <BiLogoTwitch />, key: 'twitch'},
  {icon: <GiSpikedDragonHead />, key: 'dragon'},
  {icon: <AiOutlineYoutube />, key: 'youtube'},
  {icon: <ImFacebook />, key: 'facebook'},
]

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0
  })
  const [mouseMove, setMouseMove] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)
  }

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    })
    setMouseMove(true)
  }

  const {innerWidth, innerHeight} = windowOffset
  const rotateY = useTransform(x, [0, innerWidth], [-30, 30])
  const rotateX = useTransform(y, [0, innerHeight], [10, -50])

  return (
    <div 
      className='h-screen grid place-items-center' 
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className='flex flex-col items-center justify-center gap-y-3 font-normal'>
          <motion.div 
            className='flex items-center justify-center'
            style={{
              rotateX: mouseMove ? rotateX: 0,
              rotateY: mouseMove ? rotateY: 0,
              transition: '0.1s',  
            }}
          >
            <Image 
              src='/images/dragon-1.png'
              alt='Dragon image'
              width={400}
              height={400}
              priority={true}
              className='h-auto w-[150px]'
            />
          </motion.div>
          <h1 className='text-center text-4xl font-medium tracking-wider logo'>Dragon Interactive</h1>
          <p className='text-lg logo tracking-wider'>Creating New Horizons</p>
        </div>
        <div className='mt-8 flex justify-center gap-x-10 text-3xl'>
          {heroIcons.map(( {icon, key} ) => (
            <a 
              href='#' 
              key={key}
              className='hover:text-main transition-all'
            >
              {icon}
            </a>
          ))}
        </div>
        <a 
          href='#'
          className='mx-auto mt-7 block w-max px-3 py-1 border border-dark uppercase cursor-pointer hover:border-main hover:text-main transition-all'
        >
          Enter
        </a>
      </div>
    </div>
  )
}

export default Hero
