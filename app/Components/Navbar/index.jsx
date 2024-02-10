"use client"

import React, {useState} from 'react'
import { NavbarContainer, NavbarDiv, MobileContainer } from './navbar.style'

const Navbar = () => {

  const [navClick, setNavClick] = useState(false)

  return (
    <NavbarDiv>
      <NavbarContainer>
        <img src='/logo.png' alt='logo' className='logo' />

        <div className="menuitems">
          <span>Home</span>
          <span>About us</span>
          <span>Contact us</span>
        </div>
      </NavbarContainer>
      <MobileContainer>
      <img src='/logo.png' alt='logo' className='logo' />
      <div className={navClick? 'hambuga spin': 'hambuga'} onClick={() => {setNavClick(!navClick)}}>
          <div className='ham dis'></div>
          <div className='ham spins'></div>
          <div className='ham spins-i'></div>
          <div className='ham dis'></div>
      </div>
      <div className={navClick? "mob-menu-div menu-show": "mob-menu-div "}>
          <div className="mob-menu-div-cont">
              <a href=''>Home</a>
              <a href=''>About Us</a>
              <a href=''>Contact Us</a>
              
          </div>
      </div>
      </MobileContainer>

    </NavbarDiv>
  )
}

export default Navbar