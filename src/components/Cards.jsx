import React from "react";

const Cards = ({ title, category, image, github, live, description }) => {
  return (
    <div className="project-card">
      <img
        src={image}
        alt={`Aperçu de ${title}`}
        className="project-image"
        loading="lazy"
      />
      <div className="project-info">
        <h3>{title}</h3>

        {/* Logos des technologies (accessibilité OK + lazy loading) */}
        {Array.isArray(category) && (
          <div className="project-tech">
            {category.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt=""
                aria-hidden="true"
                className="tech-logo"
                loading="lazy"
              />
            ))}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="project-description">{description}</p>
        )}

        {/* Liens */}
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






