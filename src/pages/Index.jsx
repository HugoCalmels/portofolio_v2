import "./Index.scss";
import Home from "./sections/home/Home";
import Skills from "./sections/skills/Skills";
import Services from "./sections/services/Services";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Presentation from "./sections/presentation/Presentation"; // importation de la section Presentation
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const Index = (props) => {
  const [projectsHeight, setProjectsHeight] = useState(0);
  const [bgWrapperTop, setBgWrapperTop] = useState(0);
  const [skillsBgTop, setSkillsBgTop] = useState(0);
  const [skillsHeight, setSkillsHeight] = useState(0);
  const [servicesBgTop, setServicesBgTop] = useState(0);
  const [servicesHeight, setServicesHeight] = useState(0);
  const [presentationBgTop, setPresentationBgTop] = useState(0); // état pour la section Présentation
  const [presentationHeight, setPresentationHeight] = useState(0); // état pour la hauteur de la section Présentation
  const location = useLocation();
  const homeRef = useRef(null);
  const presentationRef = useRef(null); // référence pour la section Présentation
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const canvasRef = useRef(null);

  const handleHeightChange = (height) => {
    setProjectsHeight(height);
  };

  const calculateBgWrapperTop = () => {
    if (homeRef.current && presentationRef.current && skillsRef.current && servicesRef.current) {
      const homeHeight = homeRef.current.offsetHeight || 0;
      const presentationHeight = presentationRef.current.offsetHeight || 0; // hauteur de la section Présentation
      const skillsHeight = skillsRef.current.offsetHeight || 0;
      const servicesHeight = servicesRef.current.offsetHeight || 0;

      console.log("Home Height: ", homeHeight);
      console.log("Presentation Height: ", presentationHeight); // log pour la présentation
      console.log("Skills Height: ", skillsHeight);
      console.log("Services Height: ", servicesHeight);

      // Calcul des positions de fond en tenant compte de la section Présentation
      setBgWrapperTop(homeHeight + presentationHeight + skillsHeight + servicesHeight);
      setPresentationBgTop(homeHeight);
      setSkillsBgTop(homeHeight + presentationHeight);
      setSkillsHeight(skillsHeight);
      setServicesBgTop(homeHeight + presentationHeight + skillsHeight);
      setServicesHeight(servicesHeight);
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      calculateBgWrapperTop();
    };

    const observer = new ResizeObserver(() => {
      calculateBgWrapperTop();
    });

    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", calculateBgWrapperTop);

    if (homeRef.current) observer.observe(homeRef.current);
    if (presentationRef.current) observer.observe(presentationRef.current); // observation de la section Présentation
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", calculateBgWrapperTop);
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (presentationRef.current) observer.unobserve(presentationRef.current); // désabonnement de la section Présentation
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, [location.pathname]);

  // anims //
 

  return (
    <div className="main-default">

      <Home
        homeWrapperElem={homeRef}
        navbarLinkProjects={props.navbarLinkProjects}
        navbarLinkContact={props.navbarLinkContact}
        navigateTo={props.navigateTo} 
      />
      <Presentation presentationWrapperElem={presentationRef} /> {/* Section Présentation */}
      <Skills skillsWrapperElem={skillsRef} />
      <Services servicesWrapperElem={servicesRef} />

      {/* Background pour la section Présentation */}
      <div
        className="presentation-bg-wrapper"
        style={{ top: `${presentationBgTop}px`, height: `${presentationHeight}px` }}
      ></div>

      {/* Background pour la section Skills */}
      <div
        className="skills-bg-wrapper"
        style={{ top: `${skillsBgTop}px`, height: `${skillsHeight}px` }}
      ></div>

      {/* Background pour la section Services */}
      <div
        className="services-bg-wrapper"
        style={{ top: `${servicesBgTop}px`, height: `${servicesHeight}px` }}
      ></div>

      {/* Background pour la section Projects */}
      <div
        className="projects-bg-wrapper"
        style={{ top: `${bgWrapperTop}px`, height: `${projectsHeight}px` }}
      ></div>

      <Projects
        projectsWrapperElem={props.projectsWrapperElem}
        onHeightChange={handleHeightChange}
      />
      <Contact contactWrapperElem={props.contactWrapperElem} />
    </div>
  );
};

export default Index;
