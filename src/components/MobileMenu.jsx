import React from "react";

const MobileMenu = ({
  home,
  about,
  services,
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
            scrollToSection(services);
            isClicked && closeMobileMenu();
          }}
        >
          <a href="#services">Services</a>
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
