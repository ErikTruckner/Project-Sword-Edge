import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')

  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Erik Truckner &nbsp;{' '}
            <span className='sm:block hidden'>|&nbsp; React Developer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flew-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium hover-text-glowing-shadow cursor-pointer`}
              onClick={() => setActive(link.title)}>
              {/* Coming from src\constants\index.js */}
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <div className='black-gradient w-7 h-7  glowing-shadow extreme-hover-glowing-shadow  rounded-full flex justify-center items-center'>
            <a
              className='w-6 h-6 object-contain'
              href='https://github.com/ErikTruckner/Project-Sword-Edge'
              target='_blank'>
              <img src='src\assets\github.png' alt='github' />
            </a>
          </div>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-12 left-0 mx-0 my-5 w-full h-screen z-10`}>
            <ul className='list-none flex justify-start items-center flex-1 flex-col gap-6'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer  text-[36px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <div className='black-gradient w-12 h-12 mt-10 glowing-shadow rounded-full flex justify-center items-center'>
                <a
                  className='w-6 h-6 object-contain'
                  href='https://github.com/ErikTruckner/Project-Sword-Edge'
                  target='_blank'>
                  <img src='src\assets\github.png' alt='github' />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
