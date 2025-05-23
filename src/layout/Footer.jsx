// Import react-icons
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// Footer component
const Footer = () => {
  return (
    <footer className="main-footer" id="contact">
      {/* Social icons */}
      <div className="footer-icons">
        {/* Link & icon to send email*/}
        <a
          href="mailto:dolou.allix@gmail.com"
          aria-label="Envoyer un mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>

        {/* Link to github*/}
        <a
          href="https://github.com/Allix35"
          aria-label="Profil GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        {/* Link to LinkedIn */}
        <a
          href="https://www.linkedin.com/in/allix-dolou-17488910a/"
          aria-label="Profil LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p>© 2025 Allix Dolou. Tous droits réservés.</p>
    </footer>
  );
};

// Component export
export default Footer;


