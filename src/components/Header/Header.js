import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { StyledHeader } from '../../styles/Header.styled'

function Header() {
  return (
    <StyledHeader data-testid='header'>
      <Search />
      <Navbar />
    </StyledHeader>
  )
}

export default Header
