import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledMeals = styled.div`
  margin: 10vh auto;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, auto);
  grid-gap: 5vh 5vw;
  font-family: sans-serif;
`

export const MealLink = styled(Link)`
  text-decoration: none;
`

export const Item = styled.div`
  width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
  }

  h3 {
    text-align: left;
    color: darkslategray;
  }
`
