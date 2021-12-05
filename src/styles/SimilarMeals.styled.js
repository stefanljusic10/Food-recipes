import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledSimilar = styled.div`
  width: 70vw;
  margin: 20vh auto;
  font-family: sans-serif;
  color: darkslategray;

  .similarMeals {
    display: flex;
  }
`

export const SimilarLink = styled(Link)`
  text-decoration: none;
  color: darkslategray;

  &::last-child {
    margin-right: 0;
  }
`

export const Item = styled.div`
  width: 20vw;
  margin-right: 5vw;

  img {
    width: 20vw;
    height: auto;
  }
`
