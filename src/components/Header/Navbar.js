import React, { useState } from 'react'
import { useHistory } from 'react-router'
import LogDropdown from './LogDropdown'
import { StyledNavbar, NavbarList, NavbarItem } from '../styles/Header.styled'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()

  const findUser = (e) => {
    e.preventDefault()
  }

  return (
    <StyledNavbar>
      <NavbarItem href="#" id="avatar-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fa fa-user-circle fa-3x navbar__avatar" />
      </NavbarItem>
      {isOpen ? <LogDropdown findUser={findUser} /> : null}
      <NavbarList>
        <NavbarItem onClick={() => history.push('/')} href="#about">
          <li>About Us</li>
        </NavbarItem>
        <NavbarItem onClick={() => history.push('/')} href="#contact">
          <li>Contact</li>
        </NavbarItem>
      </NavbarList>
    </StyledNavbar>
  )
}

export default Navbar
