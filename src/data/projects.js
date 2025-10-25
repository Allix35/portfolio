import bookiImage from "../assets/Booki_7_11zon.webp";
import ohmyfoodImage from "../assets/Ohmyfood_15_11zon.webp";
import sophiebluelImage from "../assets/sophiebluel_19_11zon.webp";
import kasaImage from "../assets/Kasa_13_11zon.webp";
import argentbankImage from "../assets/Argentbank_6_11zon.webp";
import htmlLogo from "../assets/HTML5_logo_11_11zon.webp";
import cssLogo from "../assets/CSS3_logo_8_11zon.webp";
import sassLogo from "../assets/sass_18_11zon.webp";
import jsLogo from "../assets/JSlogo_12_11zon.webp";
import nodeLogo from "../assets/Node.js_logo_14_11zon.webp"; 
import reactLogo from "../assets/React_logo_16_11zon.webp"; 
import swaggerLogo from "../assets/Swagger_logo_20_11zon.webp"; 
import reduxLogo from "../assets/redux_logo_17_11zon.webp"; 
import argentbank1 from "../assets/argentbank1.webp";
import argentbank2 from "../assets/argentbank2.webp";
import argentbank3 from "../assets/argentbank3.webp";
import kasa1 from "../assets/kasa1.webp";
import kasa2 from "../assets/kasa2.webp";
import kasa3 from "../assets/kasa3.webp";
import kasa4 from "../assets/kasa4.webp";
import kasa5 from "../assets/kasa5.webp";
import sophie1 from "../assets/sophie1.webp";
import sophie2 from "../assets/sophie2.webp";
import sophie3 from "../assets/sophie3.webp";
import sophie4 from "../assets/sophie4.webp";

const projects = [
  {
    title: "Booki",
    category: [
      { src: htmlLogo, alt: "Logo HTML5" },
      { src: cssLogo, alt: "Logo CSS3" },
    ],
    description: "Refonte d’une page d’agence de voyage avec HTML5 et CSS3, en respectant la maquette Figma et le responsive design.",
    image: bookiImage,
    live: "https://allix35.github.io/Booki/",

  },
  {
    title: "Ohmyfood",
    category: [
      { src: htmlLogo, alt: "Logo HTML5" },
      { src: cssLogo, alt: "Logo CSS3" },
      { src: sassLogo, alt: "Logo SASS" },
    ],
    description: "Ohmyfood est un site web responsive de réservation de menus gastronomiques à Paris, développé en HTML5 et SASS avec animations CSS pour une expérience utilisateur fluide et esthétique.",
    image: ohmyfoodImage,
    live: "https://allix35.github.io/Ohmyfood/"
  },
  {
    title: "Sophie Bluel, Architecte d'intérieur",
    category: [
      { src: htmlLogo, alt: "Logo HTML5" },
      { src: cssLogo, alt: "Logo CSS3" },
      { src: jsLogo, alt: "Logo JavaScript" },
      { src: nodeLogo, alt: "Logo Node.js" },
    ],
    description: "Sophie Bluel est un site web responsive de présentation pour une architecte d’intérieur, développé en JavaScript avec une gestion dynamique des contenus via API REST et une interface d’administration sécurisée grâce à Node.js et JWT.",
    image: sophiebluelImage,
    maquettes: [
      sophie1,
      sophie2,
      sophie3,
      sophie4
    ],
    live: null,
  },
  {
    title: "Kasa",
    category: [
      { src: htmlLogo, alt: "Logo HTML5" },
      { src: cssLogo, alt: "Logo CSS3" },
      { src: sassLogo, alt: "Logo SASS" },
      { src: jsLogo, alt: "Logo JavaScript" },
      { src: nodeLogo, alt: "Logo Node.js" },
      { src: reactLogo, alt: "Logo React" },
    ],
    description: "Kasa est une application web de location immobilière développée avec React, utilisant React Router pour la navigation, une gestion des composants réutilisables, et un design responsive basé sur SASS. Les données sont récupérées localement au format JSON pour simuler une API.",
    image: kasaImage,
    maquettes: [
      kasa1,
      kasa2,
      kasa3,
      kasa4,
      kasa5
    ],
    live: null,
  },
  {
    title: "Argent Bank",
    category: [
      { src: htmlLogo, alt: "Logo HTML5" },
      { src: cssLogo, alt: "Logo CSS3" },
      { src: sassLogo, alt: "Logo SASS" },
      { src: jsLogo, alt: "Logo JavaScript" },
      { src: nodeLogo, alt: "Logo Node.js" },
      { src: reactLogo, alt: "Logo React" },
      { src: swaggerLogo, alt: "Logo Swagger" },
      { src: reduxLogo, alt: "Logo Redux" },
    ],
    description: "Argent Bank est une application bancaire fullstack développée avec React, Redux et Sass. L’authentification est sécurisée via JWT, les données sont échangées via une API REST documentée avec Swagger. L’interface responsive permet aux utilisateurs de consulter leurs comptes, leurs transactions, et de modifier leurs informations personnelles.",
    image: argentbankImage,
    maquettes: [
    argentbank1,
    argentbank2,
    argentbank3,
    ],
    live: null,
  }
];

export default projects;


  