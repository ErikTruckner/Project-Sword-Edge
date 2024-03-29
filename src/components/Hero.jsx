import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import FramerMotionAni from './FramerMotionAni'

import React from 'react'

const Hero = () => {
  return (
    // *** TO PREVENT CAMERA LOCK ON CANVAS ONE CAN RENDER COMPUTERVANVAS HERE AND USER CAN SCROLL ON TOP OF CANVAS (mobile relevent only)
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#1180ff]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#3ac0ff]'>Erik</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack Web Developer <br className='sm:block hidden' />
            Specializing in React, Node, <br className='sm:block hidden' />
            and 3D Web Integrations
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <FramerMotionAni />
    </section>
  )
}

export default Hero
