import React from "react";
import LogoImg from "../../assets/logo.png";
import { StyledFooter, Images, Logo, Social, Copy } from '../styles/Footer.styled';

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <Images>
          <a href="#">
            <Logo src={LogoImg} alt="Logo" />
          </a>
          <Social>
            <li>
              <a href="#">
                <i className="fa fa-facebook-f "></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </Social>
        </Images>
        <Copy>
          Copyright - Golux Technologies 2021 - Stefan Ljusic
        </Copy>
    </footer>
    </StyledFooter>
  );
}

export default Footer;
