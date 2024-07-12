"use client"

import React, {useState} from 'react'
import { NavbarContainer, NavbarDiv, MobileContainer } from './navbar.style'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const [navClick, setNavClick] = useState(false)
  const router = useRouter()

  const navigate = (x) => router.push(x)

  return (
    <NavbarDiv>
      <NavbarContainer>
        <img src='/logo.png' alt='logo' className='logo'  onClick={ () => navigate('/') } />

        <div className="menuitems">
          <span onClick={ () => navigate('/') } >Home</span>
          <span onClick={ () => navigate('/about') } >About us</span>
          <span onClick={ () => navigate('/contact') } >Contact us</span>
        </div>
      </NavbarContainer>
      <MobileContainer>
      <img src='/logo.png' alt='logo' className='logo' onClick={ () => navigate('/') } />
      <div className={navClick? 'hambuga spin': 'hambuga'} onClick={() => {setNavClick(!navClick)}}>
          <div className='ham dis'></div>
          <div className='ham spins'></div>
          <div className='ham spins-i'></div>
          <div className='ham dis'></div>
      </div>
      <div className={navClick? "mob-menu-div menu-show": "mob-menu-div "}>
          <div className="mob-menu-div-cont">
              <a href='/'>Home</a>
              <a href='/about'>About Us</a>
              <a href='/contact'>Contact Us</a>
              
          </div>
      </div>
      </MobileContainer>

    </NavbarDiv>
  )
}

export default Navbar