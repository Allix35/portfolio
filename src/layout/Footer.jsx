import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer" id="contact">
      <div className="footer-icons">
        <a
          href="mailto:dolou.allix@gmail.com"
          aria-label="Envoyer un mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Allix35"
          aria-label="Profil GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/allix-dolou-17488910a/"
          aria-label="Profil LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <p>© 2025 Allix Dolou. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;

