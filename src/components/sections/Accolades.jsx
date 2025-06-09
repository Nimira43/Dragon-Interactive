import { motion, useMotionValue } from 'framer-motion'

const Accolades = ({ title, amount, children }) => {
  const number = useMotionValue(0)
  const count = (amount) => {
    let i = 0
    const updateCount = () => {
      let timeOut
      if (i <= amount) {
        number.set(i++)
        timeOut = setTimeout(updateCount, 0)
      } else {
        clearTimeout(timeOut)
      }
    }
    updateCount()
  }
  
  return (
    <div className='flex items-center gap-x-3 '>
      <span className='text-4xl lg:text-2xl hover:text-main transition-colors'>{children}</span>
      <h1 className='flex flex-col gap-y-2 hover:text-main transition-colors'>
        <motion.span 
          className='text-2xl lg:text-xl text-center font-normal'
          whileInView={() => count(amount)}
          viewport={{ once: true}}
        >
          {number} 
        </motion.span>
        <span className='text-sm font-normal'>{title}</span>
      </h1>
           
    </div>
  )
}

export default Accolades
