import React from 'react';
import allixPortrait from '../assets/Allix_5_11zon.webp'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img 
          src={allixPortrait} 
          alt="Portrait de Allix Dolou" 
          className="hero-image" 
          loading="lazy"
          
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          {"Allix Dolou".split("").map((letter, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${index * 0.1}s`,
                display: "inline-block",
                ...(letter === " " && { width: "0.6rem" }) 
              }}
            >
              {letter === " " ? "\u00A0" : letter} 
            </span>
          ))}
        </h1>

        <p className="hero-tagline">Développeuse Web Junior</p>
        
        <p className="about-text">
          Issu d’un parcours en communication, vente et webmarketing, j’ai développé une forte sensibilité pour la stratégie digitale et l’expérience utilisateur. 
          Animée par une volonté d’évoluer vers un métier technique, j’ai entrepris une reconversion professionnelle en développement web via la formation diplômante d’OpenClassrooms. 
          Aujourd’hui, je combine mes compétences en communication digitale avec mes savoir-faire techniques pour concevoir des interfaces web modernes, performantes et centrées utilisateur.
        </p>

        <a href="#contact" className="hero-button">Me contacter</a>
        <a 
          href="/portfolio/CV_Allix_Dolou.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-button"
          aria-label="Voir mon CV au format PDF, le document s’ouvre dans un nouvel onglet"
        >
          Voir mon CV (PDF)
          <span className="visually-hidden">, nouveau onglet, document PDF</span>
        </a>

      </div>
    </section>
  );
};

export default Hero;


