// Import react-icons
import {
  FaHtml5, FaSass, FaReact, FaJsSquare, FaNodeJs, FaGitAlt,
  FaClipboardList, FaPaintBrush
} from "react-icons/fa";

// Icons from other libraries
import { SiSwagger, SiRedux } from "react-icons/si";

// Import figma & trello logo
import figmaLogo from "../assets/figma_logo_9_11zon.webp";      
import trelloLogo from "../assets/trello_logo_21_11zon.webp";    

// Define array with objects reprsenting each skills
const skills = [
  // Each objet contain icone, name & %
  { icon: <FaHtml5 color="#E34F26" />, label: "HTML / CSS", percent: 80 },
  { icon: <FaSass color="#CD6799" />, label: "SASS", percent: 80 },
  { icon: <FaReact color="#61DAFB" />, label: "React", percent: 60 },
  { icon: <FaJsSquare color="#F7DF1E" />, label: "JavaScript", percent: 60 },
  { icon: <FaNodeJs color="#68A063" />, label: "Node.js / npm", percent: 60 },
  { icon: <FaGitAlt color="#F05032" />, label: "Git / GitHub", percent: 70 },
  { icon: <SiSwagger color="#85EA2D" />, label: "Swagger", percent: 40 },
  { icon: <SiRedux color="#764ABC" />, label: "Redux", percent: 40 },
  { icon: <img src={figmaLogo} alt="" aria-hidden="true" style={{ width: "1.5rem", height: "1.5rem" }} />, label: "Figma", percent: 80 },
  { icon: <img src={trelloLogo} alt="" aria-hidden="true" style={{ width: "1.5rem", height: "1.5rem" }} />, label: "Kanban / Trello", percent: 80 },
];

// React component for skills section
const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-grid">
        {/* Skills generate from array */}
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {/* Header with icon, name and % */}
            <div className="skill-header">
              <span className="icon">{skill.icon}</span>
              <span className="label">{skill.label}</span>
              <span className="percent">{skill.percent}%</span>
            </div>

            {/* Barre de progression visuelle */}
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;



