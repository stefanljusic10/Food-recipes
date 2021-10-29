import React from "react";
import { useSelector } from "react-redux";
import LimeImg from "../../assets/Lime.png";
import { About, InfoHeader, InfoText, AboutImage } from '../styles/About.styled';

function AboutUs() {
  const aboutUs = useSelector((state) => state.aboutUs);

  return (
    <About id="about">
        <div className="about__info">
          <InfoHeader>{aboutUs.head}</InfoHeader>
          <InfoText>{aboutUs.text}</InfoText>
        </div>
        <AboutImage src={LimeImg} alt="Cutlery" />
    </About>
  );
}

export default AboutUs;
