import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { StyledHeader } from '../styles/Header.styled'

function Header() {
  return (
    <StyledHeader>
      <Search />
      <Navbar />
    </StyledHeader>
  )
}

export default Header
