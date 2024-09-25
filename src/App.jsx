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
        if (section && window.scrollY >= section.offsetTop - 75) {
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
    console.log("trigger")
    // Vérifie si on est sur une page de projet
    const isOnProjectPage = location.pathname.startsWith("/projets/");
  
    // On vérifie si on essaie d'accéder à la section des projets
    if (arg === "projects") {
      const targetElement = document.querySelector(`#projects`);
  
      // On utilise setTimeout pour s'assurer que le composant est monté
      setTimeout(() => {
        if (targetElement) {
          const navbarHeight = 75; // Ajustez cela si nécessaire
          const offset = navbarHeight;
  
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
  
          window.scrollBy(0, -offset);
        }
      }, 100); // Vous pouvez ajuster le délai si nécessaire
    } else if (!isOnProjectPage && (arg === "skills" || arg === "contact")) {
      const targetElement = document.querySelector(`#${arg}`);
  
      if (targetElement) {
        const navbarHeight = 75; // Ajustez cela si nécessaire
        const offset = navbarHeight;
  
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
  
        window.scrollBy(0, -offset);
      }
    } else {
      console.log(`Route ${location.pathname} ne nécessite pas de défilement.`);
    }
  
    if (burgerModalElem.current) {
      burgerModalElem.current.classList.remove("active");
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
                  />
                }
            
              />
              <Route
                path="/projets/:project"
                element={<ProjectReader />}
          
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
