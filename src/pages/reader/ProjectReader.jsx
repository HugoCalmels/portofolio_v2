import "./ProjectReader.scss";
import { useState, useRef } from "react";
import { ProjectsList } from "../../data/ProjectsList";
import { useParams, useNavigate } from "react-router-dom";
import MediumStain from "../../assets/svgs/MediumStain";
import LongStain from "../../assets/svgs/LongStain";
import VeryLongStain from "../../assets/svgs/VeryLongStain";
import ImagesReader from "./ImagesReader";
import { RxTriangleRight } from "react-icons/rx";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const ProjectReader = () => {
  const navigate = useNavigate();
  const btnStyle = { color: "#8D8DDA", width: "30px", height: "30px" };
  const btnStyle2 = {
    borderRadius: "50%",
    backgroundColor: "white",
    color: "#000C2E",
    width: "35px",
    height: "35px",
  };
  const [selectedImage, setSelectedImage] = useState("");
  const ImagesReaderRef = useRef(null);
  const title = useParams();

  const foundProject = ProjectsList.find((el) => el.ref === title.project);

  const handleImage = (image) => {
    setSelectedImage(image);
    ImagesReaderRef.current.classList.add("active");
  };

  const navigateTo = (arg) => {
    navigate(`/#${arg}`);

    setTimeout(() => {
      document.querySelector(`#${arg}`).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: "0px", behavior: "smooth" });
  };

  function getIcon(title) {
    switch (title) {
      case "React":
        return <FaReact className="prb-icon-image"/>;
      case "Ruby":
        return <DiRuby className="prb-icon-image"/>;
      case "RubyOnRails":
        return <SiRubyonrails className="prb-icon-image"/>;
      case "Postgresql":
        return <SiPostgresql className="prb-icon-image" />;
      case "Angular":
        return <FaAngular className="prb-icon-image" />;
      case "Java":
        return <FaJava className="prb-icon-image" />;
      case "SpringBoot":
        return <SiSpringboot className="prb-icon-image"/>;
      default:
        return null; // Ou une icône par défaut si nécessaire
    }
  }

  const handleBackClick = () => {
    navigate(-1); // Revenir à la page précédente
  };

  return (
    <>
    <div className="projects-details-bg-wrapper"></div>
    <section className="project-reader-wrapper">
      <ImagesReader
        selectedImage={selectedImage}
        ImagesReaderRef={ImagesReaderRef}
      />




      <div className="project-reader-container">
        
          <div className="project-reader-intro">

          <h2>{foundProject.titleDetails}</h2>
          <div className="project-website-link-container">
    {foundProject.isDead ? (
      <button className="project-website-link closed" disabled>
        Fermé
      </button>
    ) : (
      <a
        className="project-website-link"
        href={foundProject.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Lien
      </a>
    )}
  </div>
        </div>

        <div className="project-reader-content">

            <div className="project-reader-box">
            <div className="prf-long-desc">
        <p dangerouslySetInnerHTML={{ __html: foundProject.longDescription }}></p>

        </div>
              <div className="prb-content">
                <div className="prb-techstack">

                <div className="prb-techstacks-container">
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

        </div>




        <div className="project-reader-features-list">
          {foundProject.features.map((feature) => (
            <div className="prf-feature-wrapper">

              <div className="prf-feature">
              <div className="prf-text">
                  <p>{feature.title}</p>
                </div>
                <div
                  className="prf-img"
                >
                  <img src={feature.screenshot} alt="project screenshot"/>
                </div>
       
              </div>
            </div>
          ))}
        </div>

        
      </div>
      </section>
      </>
  );
};

export default ProjectReader;
