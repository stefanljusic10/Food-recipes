import styled from 'styled-components'

export const StyledWelcome = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Info = styled.div`
  width: 50%;
  margin-top: 10vh;

  h1 {
    font-size: 3rem;
    color: darkslategray;
  }

  p {
    width: 50%;
    margin-top: 2vh;
    font-size: 1.1rem;
    text-align: left;
    color: darkslategray;
  }
`

export const Image = styled.img`
  max-width: 50%;
  height: auto;
`
