import { useState, useRef } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Index from "./pages/Index";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ProjectReader from "./pages/reader/ProjectReader";
import { useEffect } from "react";
import { SectionContext } from "./context/SectionContext";

function App() {
  const homeWrapperElem = useRef(null);
  const skillsWrapperElem = useRef(null);
  const projectsWrapperElem = useRef(null);
  const contactWrapperElem = useRef(null);
  const navbarLinkSkills = useRef(null);
  const navbarLinkProjects = useRef(null);
  const navbarLinkContact = useRef(null);
  const navbarHomeSkills = useRef(null);
  const navbarLinkGithub = useRef(null);

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
    const navbarHeight = 50;
    const targetElement = document.querySelector(`#${arg}`);
  
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const targetScrollPosition = targetPosition - navbarHeight;

      window.scrollTo({
        top: targetScrollPosition,  
        behavior: "smooth",  
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
<div class="hero-curve-wrapper">
  <div class="hero-curve-rect"></div>
  <div class="hero-curve-circle"></div>
          </div>
          <div className="hero-square"></div>
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
