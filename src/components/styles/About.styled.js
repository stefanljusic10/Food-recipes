import styled from 'styled-components'

export const About = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20vh;

  .about__info {
    width: 50%;
  }
`

export const InfoHeader = styled.h2`
  display: inline-block;
  font-size: 2rem;
  color: darkslategray;
  border-bottom: 0.2rem solid darkslategray;
`

export const InfoText = styled.p`
  width: 30vw;
  margin-top: 10vh;
  margin-right: 20vw;
  font-size: 1.1rem;
  text-align: left;
  color: darkslategray;
`

export const AboutImage = styled.img`
  width: 40%;
  height: auto;
`
