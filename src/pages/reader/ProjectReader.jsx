import "./ProjectReader.scss";
import { useState, useRef,useLayoutEffect } from "react";
import { ProjectsList } from "../../data/ProjectsList";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import MediumStain from "../../assets/svgs/MediumStain";
import LongStain from "../../assets/svgs/LongStain";
import VeryLongStain from "../../assets/svgs/VeryLongStain";
import ImagesReader from "./ImagesReader";
import { RxTriangleRight } from "react-icons/rx";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { FaAngular } from "react-icons/fa";
import { SiNgrx, SiPostgresql } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { useEffect } from "react";
import { FaAws } from "react-icons/fa";
import { FaOpenid } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
const ProjectReader = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const ImagesReaderRef = useRef(null);
  const { project } = useParams();

  const [selectedImage, setSelectedImage] = useState("");
  const foundProject = ProjectsList.find((el) => el.ref === project);

  console.log(foundProject)



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]); 

  const handleBackClick = () => {
    navigate(-1);
  };

  function getIcon(title) {
    switch (title) {
      case "React":
        return <FaReact className="prb-icon-image"/>;
      case "Ruby":
        return <DiRuby className="prb-icon-image"/>;
      case "RoR":
        return <SiRubyonrails className="prb-icon-image"/>;
      case "Postgres":
        return <SiPostgresql className="prb-icon-image" />;
      case "Angular":
        return <FaAngular className="prb-icon-image" />;
      case "Java":
        return <FaJava className="prb-icon-image" />;
      case "Spring":
        return <SiSpring className="prb-icon-image" />;
      case "OpenID":
        return <FaOpenid className="prb-icon-image" />;
      case "NgRx":
        return <SiNgrx className="prb-icon-image" />;
      case "Redux":
        return <SiRedux className="prb-icon-image" />;
      case "AWS S3":
        return <FaAws className="prb-icon-image" />;
      case "Vite":
        return <SiVite className="prb-icon-image" />;
      case "JavaScript":
        return <IoLogoJavascript className="prb-icon-image"/>;
      default:
        return null; // Ou une icône par défaut si nécessaire
    }
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
                <button className="project-website-link closed" disabled>
                  Site fermé
                </button>
              ) : (
                <a
                  className="project-website-link"
                  href={foundProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lien vers le site
                </a>
              )}
            </div>
          </div>

          <div className="project-reader-content">
            <div className="project-reader-box">

              
              <div className="prf-long-desc">
                <h4>1. Description du projet</h4>
                <p dangerouslySetInnerHTML={{ __html: foundProject.longDescription }}></p>
              </div>

              <div className="sp-section-2">
                <h4>2. Fonctionnalités & Fiche technique</h4>
                <p dangerouslySetInnerHTML={{ __html: foundProject.technical }}></p>
              </div>
              <div className="prb-techstacks-container">
                <h4>3. Stack technique</h4>
                <div className="prb-container">
                  {foundProject.tags.map((tag) => (
                    <div className="prb-techstack-entity">
                      {getIcon(tag.title)} {/* Utiliser une fonction pour obtenir l'icône appropriée */}
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