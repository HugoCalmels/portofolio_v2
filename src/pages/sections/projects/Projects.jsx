import "./Projects.scss";
import React from 'react';
import { ProjectsList } from "../../../data/ProjectsList";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { useInView } from "react-intersection-observer"; 
  const Projects = (props) => {
    const [hoveredCards, setHoveredCards] = useState({}); 
    const navigate = useNavigate();
    const projectsWrapperRef = useRef(null);
  
    const navigateTo = (title) => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      navigate(`/projets/${title}`);
    };
  
    const handleMouseEnter = (index) => {
      setHoveredCards((prev) => ({
        ...prev,
        [index]: true,
      }));
    };
  
    const handleMouseLeave = (index) => {
      setHoveredCards((prev) => ({
        ...prev,
        [index]: false, 
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
  
      sendHeightToParent(); 
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
              threshold: 0.1, 
            });
  
            const cardClass = `projects-card ${inView ? "visible" : ""} ${index % 2 === 0 ? "left" : "right"}`;
  
            return (
              <div
                key={project.ref}
                ref={ref}
                className={cardClass}
                onClick={() => navigateTo(project.ref)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  className="projects-card-wrapper"
                  style={{
                    transform: hoveredCards[index] ? 'scale(1.01)' : 'scale(1)', 
                    transition: 'transform 0.15s ease',
                  }}
                >
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