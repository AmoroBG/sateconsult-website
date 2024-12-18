import React from "react";
import acssanLogo from "../assets/acssanLogo.png";

const Header = ({
  home,
  about,
  programs,
  partners,
  contact,
  scrollToSection,
}) => {
  return (
    <header>
      <nav>
        <div className="brand">
          <a href="#">
            <img src={acssanLogo} alt="ACSSAN Logo" className="logo" />
          </a>
        </div>
        <ul className="menu">
          <li onClick={() => scrollToSection(home)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => scrollToSection(about)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => scrollToSection(programs)}>
            <a href="#programs">Programs</a>
          </li>
          <li onClick={() => scrollToSection(partners)}>
            <a href="#partners">Partners</a>
          </li>
          <li onClick={() => scrollToSection(contact)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
