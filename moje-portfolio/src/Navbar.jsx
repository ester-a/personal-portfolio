import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { GB, CZ } from "country-flag-icons/react/3x2";

import "./styles/main.scss";

const Navbar = ({ language, setLanguage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const texts = {
    cz: {
      home: "Úvod",
      bio: "Bio",
      skills: "Dovednosti",
      education: "Vzdělání",
      planets: "Planety",
      contact: "Kontakt",
    },
    en: {
      home: "Home",
      bio: "Bio",
      skills: "Skills",
      education: "Education",
      planets: "Planets",
      contact: "Contact",
    },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  {
    /*smooth scroll */
  }
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="mobile-header">
          <div className="logo">
            Ester's Space
          </div>

          <button
            className="switchButton"
            onClick={() => setLanguage(language === "en" ? "cz" : "en")}
          >
            {language === "en" ? (
              <CZ title="Czech Republic" className="flag-icon" />
            ) : (
              <GB title="United Kingdom" className="flag-icon" />
            )}
          </button>

          <button className="menu-toggle" onClick={toggleMobileMenu}>
            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
            />
          </button>
        </div>

        {isMobileMenuOpen && (
          <ul className="menu-list">
            <li>
              <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
                {texts[language].home}
              </a>
            </li>
            <li>
              <a href="#bio" onClick={(e) => handleLinkClick(e, "#bio")}>
                {texts[language].bio}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleLinkClick(e, "#skills")}>
                {texts[language].skills}
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={(e) => handleLinkClick(e, "#education")}
              >
                {texts[language].education}
              </a>
            </li>
            <li>
              <a
                href="#SpaceExcursion"
                onClick={(e) => handleLinkClick(e, "#SpaceExcursion")}
              >
                {texts[language].planets}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
              >
                {texts[language].contact}
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        <div className="logo">🚀 Ester's Space</div>
        <ul className="menu-list">
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
              {texts[language].home}
            </a>
          </li>
          <li>
            <a href="#bio" onClick={(e) => handleLinkClick(e, "#bio")}>
              {texts[language].bio}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "#skills")}>
              {texts[language].skills}
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => handleLinkClick(e, "#education")}
            >
              {texts[language].education}
            </a>
          </li>
          <li>
            <a
              href="#SpaceExcursion"
              onClick={(e) => handleLinkClick(e, "#SpaceExcursion")}
            >
              {texts[language].planets}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
              {texts[language].contact}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ester-andrews-97080716b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#5a2c91]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ester-a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#5a2c91]"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>

        <button
          className="switchButton"
          onClick={() => setLanguage(language === "en" ? "cz" : "en")}
        >
          {language === "en" ? (
            <CZ title="Czech Republic" className="flag-icon" />
          ) : (
            <GB title="United Kingdom" className="flag-icon" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
