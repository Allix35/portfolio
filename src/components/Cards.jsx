import React from "react";

const Cards = ({ title, category, image, github, live, description }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4"> {/* Colonne responsive */}
      <div className="card h-100 shadow-sm"> {/* Carte Bootstrap */}
        <img
          src={image}
          alt={`Aperçu de ${title}`}
          className="card-img-top"
          loading="lazy"
        />
        <div className="card-body d-flex flex-column">
          <h3 className="card-title h5">{title}</h3>

          {Array.isArray(category) && (
            <div className="d-flex flex-wrap gap-2 my-2">
              {category.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt=""
                  aria-hidden="true"
                  className="tech-logo"
                  loading="lazy"
                  style={{ width: "25px", height: "25px" }}
                />
              ))}
            </div>
          )}

          {description && (
            <p className="card-text flex-grow-1">{description}</p>
          )}

          <div className="mt-auto d-flex justify-content-between">
            <a
              href={github}
              className="btn btn-outline-dark btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            {live && (
              <a
                href={live}
                className="btn btn-dark btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;







