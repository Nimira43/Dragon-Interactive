import { RxDiscordLogo } from 'react-icons/rx'
import { BiLogoTwitch } from 'react-icons/bi'
import { GiSpikedDragonHead } from 'react-icons/gi'
import { AiOutlineYoutube } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'
import { GiChampions } from 'react-icons/gi'
import { GiBookAura } from 'react-icons/gi'
import { GiBrightExplosion } from 'react-icons/gi'
import { GiSoundOn } from 'react-icons/gi'

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
    title: 'Game of the Year Awards',
    amount: '10',
    icon: <GiChampions />
  },
  {
    title: 'Best Original Storyline Awards',
    amount: '11',
    icon: <GiBookAura />
  },
  {
    title: 'Best Graphics Awards',
    amount: '8',
    icon: <GiBrightExplosion />
  },
  {
    title: 'Best Soundtrack Awards',
    amount: '9',
    icon: <GiSoundOn />
  },
]