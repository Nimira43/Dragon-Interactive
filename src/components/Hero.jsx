'use client'

import Image from 'next/image'
import { RxDiscordLogo } from "react-icons/rx"
import { BiLogoTwitch } from "react-icons/bi"
import { GiSpikedDragonHead } from 'react-icons/gi'
import { AiOutlineYoutube } from "react-icons/ai"
import { ImFacebook } from "react-icons/im"

const heroIcons = [
  {icon: <RxDiscordLogo />, key: 'discord'},
  {icon: <BiLogoTwitch />, key: 'twitch'},
  {icon: <GiSpikedDragonHead />, key: 'dragon'},
  {icon: <AiOutlineYoutube />, key: 'youtube'},
  {icon: <ImFacebook />, key: 'facebook'},
]

const Hero = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <div>
        <div className='flex flex-col items-center justify-center gap-y-3 font-normal'>
          <div className='flex items-center justify-center'>
            <Image 
              src='/images/dragon-1.png'
              alt='Dragon image'
              width={400}
              height={400}
              priority={true}
              className='h-auto w-[150px]'
            />
          </div>
          <h1 className='text-center text-3xl font-medium tracking-wider logo'>Dragon Interactive</h1>
          <p className='text-sm logo '>Creating New Horizons</p>
        </div>
        <div>
          {heroIcons.map(( {icon, key} ) => (
            <a href='#' key={key}>{icon}</a>
          ))}
        </div>
        <a 
          href='#'
          className='mx-auto mt-7 block w-max px-3 py-1 border border-dark uppercase cursor-pointer hover:border-main hover:text-main transition-all'
        >
          View Games
        </a>
      </div>
    </div>
  )
}

export default Hero
