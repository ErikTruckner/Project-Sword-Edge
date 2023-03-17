import { motion } from 'framer-motion'

{
  /* MOTION FRAMER SCROLL WHEEL ANI ICON */
}

const FramerMotionAni = () => {
  return (
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href='#about'>
        <div className='w-[70px] h-[70px] rounded-3xl border-4 border-secondary glowing-shadow extreme-hover-glowing-shadow flex justify-center items-start p-2'>
          <motion.dev
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className='w-5 h-5 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
    </div>
  )
}

export default FramerMotionAni
