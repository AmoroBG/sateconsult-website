import React from "react";

const MobileMenu = ({
  home,
  about,
  programs,
  partners,
  contact,
  scrollToSection,
  isClicked,
  closeMobileMenu,
}) => {
  return (
    <nav>
      <ul className="menu mobile-menu">
        <li
          onClick={() => {
            scrollToSection(home);
            isClicked && closeMobileMenu();
          }}
        >
          <a href="#home">Home</a>
        </li>
        <li
          onClick={() => {
            scrollToSection(about);
            isClicked && closeMobileMenu();
          }}
        >
          <a href="#about">About</a>
        </li>
        <li
          onClick={() => {
            scrollToSection(programs);
            isClicked && closeMobileMenu();
          }}
        >
          <a href="#programs">Programs</a>
        </li>
        <li
          onClick={() => {
            scrollToSection(partners);
            isClicked && closeMobileMenu();
          }}
        >
          <a href="#partners">Partners</a>
        </li>
        <li
          onClick={() => {
            scrollToSection(contact);
            isClicked && closeMobileMenu();
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
