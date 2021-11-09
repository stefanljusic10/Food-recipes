import React from 'react'
import LimeImg from '../../assets/Lime.png'
import { About, InfoHeader, InfoText, AboutImage } from '../styles/About.styled'
import { aboutUs } from '../../assets/aboutText'

function AboutUs() {
  return (
    <About id="about">
      <div>
        <InfoHeader>{aboutUs.head}</InfoHeader>
        <InfoText>{aboutUs.text}</InfoText>
      </div>
      <AboutImage src={LimeImg} alt="Cutlery" />
    </About>
  )
}

export default AboutUs
