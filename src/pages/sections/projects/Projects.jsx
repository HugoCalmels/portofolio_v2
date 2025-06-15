import "./Projects.scss";
import React from 'react';
import SmallStain from "../../../assets/svgs/SmallStain";
import { ProjectsList } from "../../../data/ProjectsList";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
//backend
import { FaJava } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

//frontend
import { IoLogoJavascript } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiNgrx } from "react-icons/si";
import { SiRedux } from "react-icons/si";

// outils
import { FaGitAlt } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { SiDbeaver } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useInView } from "react-intersection-observer"; // Assure-toi d'avoir ce hookconst Projects = (props) => {
  const Projects = (props) => {
    const [hoveredCards, setHoveredCards] = useState({}); // Gérer les états de hover pour chaque carte
    const navigate = useNavigate();
    const projectsWrapperRef = useRef(null);
  
    const navigateTo = (title) => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      navigate(`/projets/${title}`);
    };
  
    const handleMouseEnter = (index) => {
      setHoveredCards((prev) => ({
        ...prev,
        [index]: true, // La carte à l'index actuel est survolée
      }));
    };
  
    const handleMouseLeave = (index) => {
      setHoveredCards((prev) => ({
        ...prev,
        [index]: false, // La carte à l'index actuel n'est plus survolée
      }));
    };
  
    useEffect(() => {
      const sendHeightToParent = () => {
        if (projectsWrapperRef.current) {
          const height = projectsWrapperRef.current.offsetHeight;
          if (props.onHeightChange) {
            props.onHeightChange(height);
          }
        }
      };
  
      const observer = new ResizeObserver(sendHeightToParent);
  
      if (projectsWrapperRef.current) {
        observer.observe(projectsWrapperRef.current);
      }
  
      sendHeightToParent(); // Initial call to set height
      window.addEventListener("resize", sendHeightToParent);
  
      return () => {
        window.removeEventListener("resize", sendHeightToParent);
        observer.disconnect();
      };
    }, [props.onHeightChange]);
  
    return (
      <section className="projects-wrapper" id="projects" ref={projectsWrapperRef}>
        <div className="projects-main-title">
          <h2>Projets</h2>
        </div>
  
        <div className="projects-cards-container">
          {ProjectsList.map((project, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.2, // L'animation se lance quand l'élément devient visible à 10%
            });
  
            // On alterne les classes "left" et "right" pour chaque carte
            const cardClass = `projects-card ${inView ? "visible" : ""} ${index % 2 === 0 ? "left" : "right"}`;
  
            return (
              <div
                key={project.ref}
                ref={ref}
                className={cardClass}
                onClick={() => navigateTo(project.ref)}
                onMouseEnter={() => handleMouseEnter(index)} // Gérer l'hover pour chaque carte
                onMouseLeave={() => handleMouseLeave(index)} // Gérer la fin du hover pour chaque carte
              >
                {/* Conteneur 'card-wrapper' qui gère l'animation de scroll et de zoom */}
                <div
                  className="projects-card-wrapper"
                  style={{
                    transform: hoveredCards[index] ? 'scale(1.010)' : 'scale(1)', // Appliquer le zoom uniquement si la carte est survolée
                    transition: 'transform 0.15s ease', // Transition rapide au zoom
                  }}
                >
                  {/* Conteneur 'inner' responsable des animations de scroll */}
                  <div className="projects-card-inner">
                    <div className="projects-card-title">
                      <h5>{project.title}</h5>
                    </div>
                    <div className="projects-card-image-container">
                      <img src={project.image} alt="project image" />
                    </div>
  
                    <p dangerouslySetInnerHTML={{ __html: project.shortDescription }} className="card-p"></p>
  
                    <div className="projects-card-tags">
                      <ul>
                        {project.tags.map((tag, index) => (
                          <li key={index}>
                            <span className="project-icon">
                              {/* Rendre directement l'icône ici */}
                              {tag.icon}
                            </span>
                            <span className="project-icon-title">{tag.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  };
  
  export default Projects;