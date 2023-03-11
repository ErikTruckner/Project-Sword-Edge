import React from 'react'
import Tilt from 'react-tilt'

import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      {/* fadeIn values: direction, type, delay, duration  */}
      <motion.p variants={fadeIn('', '', 0.1, 1)}>
        As a highly skilled software developer, I possess extensive expertise in
        an array of cutting-edge technologies, including but not limited to
        renowned JavaScript frameworks such as React, Next, Vue, Nuxt, and
        Three. My proficiency in Node.js and Express.js middleware has allowed
        me to seamlessly develop robust, scalable, and efficient APIs that cater
        to both SQL and noSQL databases. I take pride in my ability to stay
        ahead of the curve by continuously expanding my knowledge and skillset,
        enabling me to deliver innovative and reliable solutions that exceed
        expectations. In addition to my technical expertise, I am also
        passionate about creating exceptional user experiences through good
        design and user interface. I believe that pushing the boundaries of
        frontend visual styles is essential in changing the way we interact with
        the web, and I strive to incorporate emerging technologies, including
        3D, to achieve this goal. By blending my technical skills with my eye
        for design, I work to create visually stunning and intuitive interfaces
        that push the limits of what's possible in web development. I am
        dedicated to continuously exploring new design concepts and emerging
        technologies to create innovative and reliable solutions that not only
        meet but exceed expectations.
      </motion.p>
    </>
  )
}

export default About
