import React from 'react'

import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, arrow } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  link,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className='blue-gradient hover-glowing-shadow p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className='relative w-full h-[230px]'>
        <a href={link} target='_blank'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </a>
      </div>

      <div className='mt-5'>
        <h3 className='text-white w-full font-bold text-[24px] text-center'>
          {' '}
          {name}
        </h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='m-auto mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`m-auto text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      <div
        onClick={() => window.open(source_code_link, '_blank')}
        className='m-auto mt-4 black-gradient w-10 h-10 extreme-hover-glowing-shadow rounded-full flex justify-center items-center cursor-pointer'>
        <img
          src={github}
          alt='source code'
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
    </div>
  )
}

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My Portfolio</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          The following projects showcases my skills and experience through real
          world examples of my work. Each project is briefly described with
          links to live demos on the project image, and GitHub code repository
          near the bottom of each card.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'portfolio')
