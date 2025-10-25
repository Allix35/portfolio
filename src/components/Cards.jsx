import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Cards = ({ title, category, image, live, description, maquettes }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Arrow & escape
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, maquettes]);

  // Arrow next
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % maquettes.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(maquettes[nextIndex]);
  };

  // Arrow preview
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + maquettes.length) % maquettes.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(maquettes[prevIndex]);
  };

  return (
    <div className="project-card">
      {/* Main picture */}
      <img
        src={image}
        alt={`Aperçu de ${title}`}
        className="project-image img-fluid"
        loading="lazy"
      />

      <div className="project-info">
        <h3>{title}</h3>

        {Array.isArray(category) && (
          <div className="project-tech">
            {category.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt=""
                aria-hidden="true"
                className="tech-logo img-fluid"
                loading="lazy"
              />
            ))}
          </div>
        )}

        {description && <p className="project-description">{description}</p>}

        <div className="project-links">
          {live ? (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Voir le site
            </a>
          ) : (
            <span href="#maquettes" className="voir-maquettes">
              Voir les maquettes ↓
            </span>
          )}
        </div>

        {/* Gallery */}
        {!live && maquettes && maquettes.length > 0 && (
          <div className="maquettes-gallery" id="maquettes">
            {maquettes.map((img, index) => (
              <button
                key={index}
                type="button"
                className="maquette-item"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                }}
              >
                <img
                  src={img}
                  alt={`Maquette ${index + 1} du projet ${title}`}
                  className="maquette-screenshot"
                />
              </button>
            ))}
          </div>
        )}

        {/* Navigation into modal */}
        {selectedImage &&
          createPortal(
            <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setSelectedImage(null)}>
                  ✕
                </button>

                {/* Navigation arrow */}
                <button className="nav-button left" onClick={handlePrev}>
                  ‹
                </button>
                <img
                  src={selectedImage}
                  alt={`Maquette ${currentIndex + 1} du projet ${title}`}
                  className="modal-image"
                  onLoad={(e) => e.target.classList.add("loaded")}
                />
                <button className="nav-button right" onClick={handleNext}>
                  ›
                </button>

                {/* Image counter */}
                <div className="image-counter">
                  {currentIndex + 1}/{maquettes.length}
                </div>
              </div>
            </div>,
            document.body // Put the modal into <body>
          )}
      </div>
    </div>
  );
};

export default Cards;


