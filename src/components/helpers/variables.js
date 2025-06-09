import { RxDiscordLogo } from 'react-icons/rx'
import { BiLogoTwitch } from 'react-icons/bi'
import { GiSpikedDragonHead } from 'react-icons/gi'
import { AiOutlineYoutube } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'
import { GiChampions } from "react-icons/gi"
import { GiBookAura } from "react-icons/gi"
import { GiBrightExplosion } from "react-icons/gi"
import { GiSoundOn } from "react-icons/gi"

export const heroIcons = [
  { 
    icon: <RxDiscordLogo />, 
    key: 'discord'
  },
  {
    icon: <BiLogoTwitch />, 
    key: 'twitch'
  },
  {
    icon: <GiSpikedDragonHead />, 
    key: 'dragon'
  },
  {
    icon: <AiOutlineYoutube />, 
    key: 'youtube'
  },
  {
    icon: <ImFacebook />, 
    key: 'facebook'
  },
]

export const aboutAwards = [
  {
    key: 'goty',
    title: 'Game of the Year',
    amount: '10',
    icon: <GiChampions />
  },
  {
    key: 'bos',
    title: 'Best Original Storyline',
    amount: '11',
    icon: <GiBookAura />
  },
  {
    key: 'bg',
    title: 'Best Graphics',
    amount: '8',
    icon: <GiBrightExplosion />
  },
  {
    key: 'bs',
    title: 'Best Soundtrack',
    amount: '9',
    icon: <GiSoundOn />
  },
]