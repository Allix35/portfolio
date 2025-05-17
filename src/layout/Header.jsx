

import React from "react";

const Header = () => {
  return (
    <header className="main-header bg-light py-3 shadow-sm sticky-top">
      <nav className="container d-flex justify-content-center gap-4">
        <a href="#about" className="nav-link text-dark fw-semibold">
          À propos
        </a>
        <a href="#projects" className="nav-link text-dark fw-semibold">
          Réalisations
        </a>
        <a href="#contact" className="nav-link text-dark fw-semibold">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
