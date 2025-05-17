import React from "react";

const Cards = ({ title, category, image, github, live, description }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`Aperçu de ${title}`} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>

        {/* Affichage des logos de technologies */}
        {Array.isArray(category) && (
  <div className="project-tech">
    {category.map((logo, index) => (
      <img key={index} src={logo} alt="Logo techno" className="tech-logo" />
    ))}
  </div>
)}

        {/* Description facultative */}
        {description && <p className="project-description">{description}</p>}

        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            Voir le code
          </a>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Voir le site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;





