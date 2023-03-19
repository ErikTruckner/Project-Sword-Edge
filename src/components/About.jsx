import React from 'react'

import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 1)}
        className='w-full blue-pink-gradient p-[1px] rounded-[20px] glowing-shadow-inset'>
        <div className='glowing-shadow rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className=' w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}{' '}
          </h3>
        </div>
      </motion.div>
    </div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      {/* fadeIn values: direction, type, delay, duration  */}
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        As a creative software developer, I possess technical expertise in
        utilizing frontend JavaScript technologies such as React, Next, Vue,
        Nuxt, and Three.js to deliver reliable and impactful visual solutions.
        To store necessary information I utilize Node.js and Express.js combined
        with the approriate database for the porject, either SQL or noSQL.{' '}
        <br />
        I'm committed to creating exceptional user experiences through good
        design and interface, incorporating emerging technologies like 3D to
        push the boundaries of frontend visual styles and enhance user
        engagement. My dedication to continuous improvement and learning enables
        me to deliver innovative solutions that prioritize quality and
        reliability. Overall, I strive to deliver software solutions that leave
        a lasting impact and exceed expectations.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, 'about')
