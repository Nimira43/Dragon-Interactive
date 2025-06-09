import { motion, useMotionValue } from 'framer-motion'

const Accolades = () => {
  return (
    <div className='flex items-center gap-x-3'>
      <span className='text-4xl lg:text-2xl'>Icons</span>
      <h1 className='flex flex-col gap-y-2'>
        <span className='text-2xl lg:text-xl'>10</span>
        <span className='text-sm'>Game of the Year Awards</span>
      </h1>     
    </div>
  )
}

export default Accolades
