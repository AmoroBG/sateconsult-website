import React from "react";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import sateconsultLogo from "../assets/sateconsultLogo.png";
import MobileMenu from "./MobileMenu";

const Header = ({ home, about, services, contact, scrollToSection }) => {
  const [clickHamburger, setClickHamburger] = useState(false);

  const closeMobileMenu = () => {
    setClickHamburger(false);
  };

  return (
    <header>
      <nav>
        <div className="brand">
          <a href="#">
            <img src={sateconsultLogo} alt="ACSSAN Logo" className="logo" />
          </a>
        </div>
        <ul className="menu">
          <li onClick={() => scrollToSection(home)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => scrollToSection(about)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => scrollToSection(services)}>
            <a href="#services">Services</a>
          </li>
          <li onClick={() => scrollToSection(contact)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {clickHamburger && (
          <MobileMenu
            home={home}
            about={about}
            services={services}
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
