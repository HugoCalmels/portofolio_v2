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
import { SiSpringboot } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { useEffect } from "react";


const ProjectReader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ImagesReaderRef = useRef(null);
  const { project } = useParams();

  const [selectedImage, setSelectedImage] = useState("");
  const foundProject = ProjectsList.find((el) => el.ref === project);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]); 

  const handleBackClick = () => {
    navigate(-1);
  };

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
            </div>
          </div>

          <div className="project-reader-features-list">
            {foundProject.features.map((feature) => (
              <div className="prf-feature-wrapper" key={feature.title}>
                <div className="prf-feature">
                  <div className="prf-text">
                    <p>{feature.title}</p>
                  </div>
                  <div className="prf-img">
                    <img src={feature.screenshot} alt="project screenshot" />
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