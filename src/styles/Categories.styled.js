import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-row-gap: 10vh;
`

export const CategoriesLink = styled(Link)`
  text-decoration: none;
`

export const Item = styled.div`
  text-align: center;
`

export const ItemImage = styled.img`
  width: 15vw;
  height: auto;
`

export const ItemHeader = styled.h2`
  margin-top: 2vh;
  color: darkslategray;
`
