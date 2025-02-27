import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/ester-andrews-97080716b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#5a2c91]"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/ester-a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#5a2c91]"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
