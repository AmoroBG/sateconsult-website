import React from "react";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import acssanLogo from "../assets/acssanLogo.png";
import MobileMenu from "./MobileMenu";

const Header = ({
  home,
  about,
  programs,
  partners,
  contact,
  scrollToSection,
}) => {
  const [clickHamburger, setClickHamburger] = useState(false);

  const closeMobileMenu = () => {
    setClickHamburger(false);
  };

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

        {clickHamburger && (
          <MobileMenu
            home={home}
            about={about}
            programs={programs}
            partners={partners}
            contact={contact}
            scrollToSection={scrollToSection}
            isClicked={true}
            closeMobileMenu={closeMobileMenu}
          />
        )}

        <div className="hamburger">
          {/* <IoIosMenu onClick={() => setClickHamburger(!clickHamburger)} /> */}
          {clickHamburger ? (
            <IoCloseSharp onClick={() => setClickHamburger(!clickHamburger)} />
          ) : (
            <IoIosMenu onClick={() => setClickHamburger(!clickHamburger)} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
