// Cards component : display cards elements define in project.js
const Cards = ({ title, category, image, github, live, description }) => {
  return (
    <div className="project-card">
      {/* Main img */}
      <img
        src={image}
        alt={`Aperçu de ${title}`} // Alternative text for accessibility
        className="project-image img-fluid" // img-fluid for responsive if using bootstrap
        loading="lazy"
      />

      {/* Card contain */}
      <div className="project-info">
        {/* Project title */}
        <h3>{title}</h3>

        {/* Technologies logo used (display if category is an array) */}
        {Array.isArray(category) && (
          <div className="project-tech">
            {category.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt="" // Empty alt text because the information is redundant with the global label
                aria-hidden="true" // Indicates that this image is decorative
                className="tech-logo img-fluid"
                loading="lazy"
              />
            ))}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="project-description">{description}</p>
        )}

        {/* Link to github & website */}
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

// Card export 
export default Cards;
