import React from "react";
import {
  FaHtml5, FaSass, FaReact, FaJsSquare, FaNodeJs, FaGitAlt,
  FaClipboardList, FaPaintBrush
} from "react-icons/fa";
import { SiSwagger, SiRedux } from "react-icons/si";
import figmaLogo from "../assets/figma_logo.png";      
import trelloLogo from "../assets/trello_logo.png";    

const skills = [
  { icon: <FaHtml5 color="#E34F26" />, label: "HTML / CSS", percent: 80 },
  { icon: <FaSass color="#CD6799" />, label: "SASS", percent: 80 },
  { icon: <FaReact color="#61DAFB" />, label: "React", percent: 60 },
  { icon: <FaJsSquare color="#F7DF1E" />, label: "JavaScript", percent: 60 },
  { icon: <FaNodeJs color="#68A063" />, label: "Node.js / npm", percent: 60 },
  { icon: <FaGitAlt color="#F05032" />, label: "Git / GitHub", percent: 70 },
  { icon: <SiSwagger color="#85EA2D" />, label: "Swagger", percent: 40 },
  { icon: <SiRedux color="#764ABC" />, label: "Redux", percent: 40 },
  { icon: <img src={figmaLogo} alt="Figma" style={{ width: "1.5rem", height: "1.5rem" }} />, label: "Figma", percent: 80 },
  { icon: <img src={trelloLogo} alt="Trello / Kanban" style={{ width: "1.5rem", height: "1.5rem" }} />, label: "Kanban / Trello", percent: 80 },
];


const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-header">
              <span className="icon">{skill.icon}</span>
              <span className="label">{skill.label}</span>
              <span className="percent">{skill.percent}%</span>
            </div>
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


