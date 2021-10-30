import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20vh;
  padding: 0 15vw;
  border-bottom: 0.1rem darkslategray solid;
`

export const StyledSearch = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  height: 4vh;
  border: solid grey 0.08rem;
  border-radius: 0.5rem;
  padding: 0 0.4rem;
`

export const SearchInput = styled.input`
  position: absolute;
  border: none;
  width: 15vw;

  &:focus {
    outline: none;
  }
`

export const SearchLink = styled(Link)`
  margin-left: auto;

  i {
    color: darkslategray;
  }
`

export const StyledNavbar = styled.div`
  display: flex;

  .navbar__avatar {
    vertical-align: middle;
    color: darkslategray;
    margin-right: 4vw;
    height: auto;
    cursor: pointer;
  }
`

export const NavbarList = styled.div`
  display: flex;

  .navbar__avatar {
    vertical-align: middle;
    color: darkslategray;
    margin-right: 4vw;
    height: auto;
    cursor: pointer;
  }

  .navbar__list-item {
    display: inline-block;
    text-decoration: none;
    color: darkslategray;
    font-size: 1.5rem;
    font-weight: bold;
  }

  a:first-child {
    margin-right: 4vw;
  }
`

export const NavbarItem = styled.a`
  li {
    display: inline-block;
    text-decoration: none;
    color: darkslategray;
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const Dropdown = styled.div`
  width: 20vw;
  height: 60vh;
  position: absolute;
  background-color: white;
  border: 0.1rem solid darkslategray;
  border-radius: 0.8rem;
  padding-left: 2.5vw;
  margin-top: 15vh;
  margin-left: -9vw;
  z-index: 9;
  box-shadow: 0 0 0.5rem 0.1rem darkslategray;

  form {
    width: 100%;
  }

  input {
    position: relative;
    width: 15vw;
    height: 4vh;
    border: solid grey 0.05rem;
    border-radius: 0.5rem;
    padding: 0 0.4rem;
  }
`
