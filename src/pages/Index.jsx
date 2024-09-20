import "./Index.scss";
import Home from "./sections/home/Home";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import img from "../../src/assets/images/backgroundThree.png";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const Index = (props) => {
  const [projectsHeight, setProjectsHeight] = useState(0);
  const [bgWrapperTop, setBgWrapperTop] = useState(0); // State to track the top position of the background wrapper
  const location = useLocation();
  const homeRef = useRef(null);
  const skillsRef = useRef(null);

  const NAVBAR_HEIGHT = 75; // Height of the navbar (fixed value)

  // Function to update the height based on the Projects section
  const handleHeightChange = (height) => {
    setProjectsHeight(height);
  };

  // Function to calculate the top offset of .projects-bg-wrapper
  const calculateBgWrapperTop = () => {
    if (homeRef.current && skillsRef.current) {
      const homeHeight = homeRef.current.offsetHeight || 0;
      const skillsHeight = skillsRef.current.offsetHeight || 0;
      const newTop = homeHeight + skillsHeight + NAVBAR_HEIGHT; // Adjust with navbar height
      setBgWrapperTop(newTop);
    }
  };

  useEffect(() => {
    const calculateAfterRender = () => {
      // Ajoute un délai court (par exemple 100 ms) avant de calculer la position
      setTimeout(() => {
        calculateBgWrapperTop(); // Ensure all elements are rendered before calculating the top
      }, 100);
    };

    // Calculer la position après le rendu complet
    calculateAfterRender();

    // Recalculer lors du redimensionnement de la fenêtre
    window.addEventListener("resize", calculateBgWrapperTop);

    return () => {
      window.removeEventListener("resize", calculateBgWrapperTop);
    };
  }, [location.pathname]); // Depend on pathname to ensure recalculation

  return (
    <div className="main-default">
      <div className="homepage-background-image">
        <img src={img} alt="background" />
      </div>
      <Home homeWrapperElem={homeRef} />
      <div className="skills-gradiant"></div>
      <Skills skillsWrapperElem={skillsRef} />

      {/* Background wrapper with dynamic top position and height */}
      <div
        className="projects-bg-wrapper"
        style={{ top: `${bgWrapperTop}px`, height: `${projectsHeight}px` }}
      ></div>

      {/* Projects section with a ref and height change callback */}
      <Projects
        projectsWrapperElem={props.projectsWrapperElem}
        onHeightChange={handleHeightChange}
      />
      <Contact contactWrapperElem={props.contactWrapperElem} />
    </div>
  );
};

export default Index;