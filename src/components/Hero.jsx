import allixPortrait from '../assets/Allix_Dolou.webp'; 

// Hero component
const Hero = () => {
  return (

    <section className="hero">

      {/* Profil img */}
      <div className="hero-image-container">
        <img 
          src={allixPortrait} 
          alt="Portrait de Allix Dolou" 
          className="hero-image"
          loading="lazy" 
        />
      </div>

      {/* Hero content */}
      <div className="hero-content">

        {/* Title with animation */}
        <h1 className="hero-title">
          {"Allix Dolou".split("").map((letter, index) => ( // Split the string into an array of letters and spaces
            <span
              key={index}
              style={{
                animationDelay: `${index * 0.1}s`, // Animation delay for each letter, first letter start at 0s
                display: "inline-block",
                ...(letter === " " && { width: "0.6rem" }) // Adding visual space for empty letter
              }}
            >
              {letter === " " ? "\u00A0" : letter} 
            </span>
          ))}
        </h1>

        {/* 2nd title */}
        <p className="hero-tagline">Développeuse Web Junior</p>
        
        {/* Presentation */}
        <p className="about-text">
          Issue d’un parcours en communication et webmarketing, j’ai développé une sensibilité pour la stratégie digitale et l’expérience utilisateur. Après une reconversion en développement web chez OpenClassrooms, je conçois aujourd’hui des interfaces modernes, performantes et centrées sur l’utilisateur. <br />
          J’interviens également pour corriger vos bugs front-end, améliorer les performances (vitesse, accessibilité, chargement), optimiser le SEO technique, intégrer de nouveaux éléments et garantir un design responsive sur tous les écrans.
        </p>

        {/* Anchorage button */}
        <a href="#contact" className="hero-button">Me contacter</a>

        {/* Link to CV */}
        <a 
          href="/portfolio/CV_Allix_Dolou.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-button"
          aria-label="Voir mon CV au format PDF, le document s’ouvre dans un nouvel onglet"
        >
          Voir mon CV (PDF)
          {/* Hidden text */}
          <span className="visually-hidden">, nouvel onglet, document PDF</span>
        </a>

      </div>
    </section>
  );
};

export default Hero;



