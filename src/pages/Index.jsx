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
  const [bgWrapperTop, setBgWrapperTop] = useState(0);
  const location = useLocation();
  const homeRef = useRef(null);
  const skillsRef = useRef(null);

  const NAVBAR_HEIGHT = 75; // Fixed navbar height

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
    // Calculer la position après le chargement complet de la page
    const handleLoad = () => {
      calculateBgWrapperTop();
    };

    // Observer les changements de taille
    const observer = new ResizeObserver(() => {
      calculateBgWrapperTop();
    });

    if (homeRef.current) observer.observe(homeRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    // Exécuter le calcul après le chargement complet de la page
    window.addEventListener("load", handleLoad);

    // Réagir au changement de la taille de la fenêtre
    window.addEventListener("resize", calculateBgWrapperTop);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", calculateBgWrapperTop);
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, [location.pathname]);

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