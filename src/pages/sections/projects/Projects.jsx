import "./Projects.scss";
import SmallStain from "../../../assets/svgs/SmallStain";
import { ProjectsList } from "../../../data/ProjectsList";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Projects = (props) => {
  const navigate = useNavigate();
  const projectsWrapperRef = useRef(null);

  const navigateTo = (title) => {
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    navigate(`/projets/${title}`);
    window.scrollTo({ top: "0px", behavior: "auto" });
    setTimeout(() => {
      html.style.scrollBehavior = "smooth";
    }, 100);
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
      observer.disconnect(); // Disconnect the observer on cleanup
    };
  }, [props.onHeightChange]);

  return (
    <section
      className="projects-wrapper"
      id="projects"
      ref={projectsWrapperRef}
    >
      <div className="projects-title">
        <h2>Projets</h2>
      </div>

      
      <div className="projects-cards-container">
        
      {ProjectsList.map((project) => (
  <div className="projects-card" onClick={() => navigateTo(project.ref)} key={project.ref}>
    <div className="projects-card-title">
      <h5>{project.title}</h5>
    </div>
    <div className="projects-card-image-container">
      <img src={project.image} alt="project image" />
    </div>
    {/* Utilisation de dangerouslySetInnerHTML pour interpréter les balises HTML dans shortDescription */}
    <p dangerouslySetInnerHTML={{ __html: project.shortDescription }}></p>
  </div>
))}
      </div>




     
    </section>
  );
};

export default Projects;
