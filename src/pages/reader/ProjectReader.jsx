import "./ProjectReader.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectsList } from "../../data/ProjectsList";

import { FaReact, FaAngular, FaJava, FaAws } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails, SiPostgresql, SiSpring, SiNgrx, SiRedux, SiVite } from "react-icons/si";
import { FaOpenid } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const ProjectReader = () => {
  const { project } = useParams();
  const foundProject = ProjectsList.find((el) => el.ref === project);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  const getIcon = (title) => {
    switch (title) {
      case "React": return <FaReact className="prb-icon-image" />;
      case "Ruby": return <DiRuby className="prb-icon-image" />;
      case "RoR": return <SiRubyonrails className="prb-icon-image" />;
      case "Postgres": return <SiPostgresql className="prb-icon-image" />;
      case "Angular": return <FaAngular className="prb-icon-image" />;
      case "Java": return <FaJava className="prb-icon-image" />;
      case "Spring": return <SiSpring className="prb-icon-image" />;
      case "OpenID": return <FaOpenid className="prb-icon-image" />;
      case "NgRx": return <SiNgrx className="prb-icon-image" />;
      case "Redux": return <SiRedux className="prb-icon-image" />;
      case "AWS S3": return <FaAws className="prb-icon-image" />;
      case "Vite": return <SiVite className="prb-icon-image" />;
      case "JavaScript": return <IoLogoJavascript className="prb-icon-image" />;
      default: return null;
    }
  };

  if (!foundProject) {
    return null; 
  }

  return (
    <>
      <div className="projects-details-bg-wrapper"></div>
      <section className="project-reader-wrapper">
        <div className="project-reader-container">
          <div className="project-reader-intro">
            <h2>{foundProject.titleDetails}</h2>
            <div className="project-website-link-container">
              {foundProject.isDead ? (
                <button className="project-website-link closed" disabled>Site fermé</button>
              ) : (
                <a className="project-website-link" href={foundProject.link} target="_blank" rel="noopener noreferrer">
                  Lien vers le site
                </a>
              )}
            </div>
          </div>

          <div className="project-reader-content">
            <div className="project-reader-box">
              <div className="prf-long-desc">
                <h4>1. Description du projet</h4>
                <p dangerouslySetInnerHTML={{ __html: foundProject.longDescription }} />
              </div>

              <div className="sp-section-2">
                <h4>2. Fonctionnalités & Fiche technique</h4>
                <p dangerouslySetInnerHTML={{ __html: foundProject.technical }} />
              </div>

              <div className="prb-techstacks-container">
                <h4>3. Stack technique</h4>
                <div className="prb-container">
                  {foundProject.tags.map((tag) => (
                    <div className="prb-techstack-entity" key={tag.title}>
                      {getIcon(tag.title)}
                      <p>{tag.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="project-reader-features-list">
            <h4>4. Captures d'écran</h4>
            <div className="prf-container">
              {foundProject.features.map((feature) => (
                <div className="prf-feature-wrapper" key={feature.title}>
                  <div className="prf-feature">
                    <div className="prf-text">
                      <h6>{feature.title}</h6>
                    </div>
                    <div className="prf-img">
                      <img src={feature.screenshot} alt="project screenshot" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectReader;
