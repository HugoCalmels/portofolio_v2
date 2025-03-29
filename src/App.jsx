import { useState, useRef } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Index from "./pages/Index";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ProjectReader from "./pages/reader/ProjectReader";
import Loader from "./Loader";
import { useEffect } from "react";
import { SectionContext } from "./context/SectionContext";
import ScrollToTop from "./ScrollToTop";

function App() {
  const loaderElem = useRef(null);

  // Références aux éléments des sections
  const homeWrapperElem = useRef(null);
  const skillsWrapperElem = useRef(null);
  const projectsWrapperElem = useRef(null);
  const contactWrapperElem = useRef(null);
  const navbarLinkSkills = useRef(null);
  const navbarLinkProjects = useRef(null);
  const navbarLinkContact = useRef(null);
  const navbarHomeSkills = useRef(null);
  const navbarLinkGithub = useRef(null);

  // Tableau pour stocker les liens de la navbar
  const navLinkElems = [
    navbarLinkSkills,
    navbarLinkProjects,
    navbarLinkContact,
    navbarHomeSkills
  ];

  const [section, setSection] = useState([]);

  useEffect(() => {
    console.log("test app")
    const handleScroll = () => {
      let current = "";
      // Récupérer les éléments des sections
      const sectionsElements = [
        homeWrapperElem.current,
        skillsWrapperElem.current,
        projectsWrapperElem.current,
        contactWrapperElem.current
      ];

      sectionsElements.forEach((section) => {
        if (section && window.scrollY >= section.offsetTop ) {
          current = section.getAttribute("id");
        }
      });

      navLinkElems.forEach((link) => {
        if (link.current) {
          link.current.classList.remove("active");
          if (link.current.classList.contains(current)) {
            link.current.classList.add("active");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (arg) => {
    console.log("trigger");
    console.log(arg);

  
    // Hauteur de la navbar fixe à 50px
    const navbarHeight = 50;
  
    const targetElement = document.querySelector(`#${arg}`);
    console.log(targetElement);  // Vérifie si l'élément existe
  
    if (targetElement) {
      // Position de l'élément cible par rapport à la page
      const targetPosition = targetElement.offsetTop;
      console.log(`Position de l'élément par rapport au haut de la page : ${targetPosition}px`);
  
      // Calculer la position ajustée pour la navbar
      const targetScrollPosition = targetPosition - navbarHeight;
      console.log(`Position après ajustement de la navbar : ${targetScrollPosition}px`);
  
      // Effectuer le défilement
      window.scrollTo({
        top: targetScrollPosition,  // Défilement jusqu'à la position ajustée
        behavior: "smooth",  // Défilement fluide
      });
    } else {
      console.log(`Section ${arg} non trouvée.`);
    }
  };



  return (
    <div className="app">
      <SectionContext.Provider value={{ section, setSection }}>
        <Router>

          <Navbar
            navbarLinkGithub={navbarLinkGithub}
            navbarLinkSkills={navbarLinkSkills}
            navbarLinkProjects={navbarLinkProjects}
            navbarLinkContact={navbarLinkContact}
            navbarHomeSkills={navbarHomeSkills}
            navigateTo={navigateTo} 
          />

          <main className="main-content">
         
            <Routes>
              <Route
                path="/"
                element={
                  <Index
                    homeWrapperElem={homeWrapperElem}
                    projectsWrapperElem={projectsWrapperElem}
                    contactWrapperElem={contactWrapperElem}
                    skillsWrapperElem={skillsWrapperElem}
                    navbarLinkProjects={navbarLinkProjects}
                    navbarLinkContact={navbarLinkContact}
                    navigateTo={navigateTo} 
                  />
                }
            
              />
              <Route
                path="/projets/:project"
                element={<ProjectReader
                  navigateTo={navigateTo} 
                />}
          
              />
            </Routes>
          </main>
          <Footer />
        </Router>
      </SectionContext.Provider>
    </div>
  );
}

export default App;
