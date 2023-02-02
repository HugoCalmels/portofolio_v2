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

function App() {
  const loaderElem = useRef(null);

  let navLinkElems = [];
  let homeWrapperElem = useRef(null);
  let skillsWrapperElem = useRef(null);
  let projectsWrapperElem = useRef(null);
  let contactWrapperElem = useRef(null);
  let navbarLinkSkills = useRef(null);
  let navbarLinkProjects = useRef(null);
  let navbarLinkContact = useRef(null);
  let navbarHomeSkills = useRef(null);
  let navbarLinkGithub = useRef(null);

  const [section, setSection] = useState([]);

  useEffect(() => {
    navLinkElems.push(navbarLinkSkills);
    navLinkElems.push(navbarLinkProjects);
    navLinkElems.push(navbarLinkContact);
    navLinkElems.push(navbarHomeSkills);
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      var current = "";
      let sectionsElements = [];
      let homeWrapperElem = document.querySelector("#home");
      let skillsWrapperElem = document.querySelector("#skills");
      let projectsWrapperElem = document.querySelector("#projects");
      let contactWrapperElem = document.querySelector("#contact");
      sectionsElements.push(homeWrapperElem);
      sectionsElements.push(skillsWrapperElem);
      sectionsElements.push(projectsWrapperElem);
      sectionsElements.push(contactWrapperElem);
      if (window.location.pathname === "/") {
        sectionsElements.forEach((section) => {
          if (pageYOffset >= section.offsetTop - 60) {
            current = section.getAttribute("id");
          }
        });
        navLinkElems.forEach((link) => {
          link.current.classList.remove("active");
          if (link.current.classList.contains(current)) {
            link.current.classList.add("active");
          }
        });
      }
    };
  }, []);

  return (
    <div className="app">
      <SectionContext.Provider value={{ section, setSection }}>
        <Router>
          <Loader
            loaderElem={loaderElem}
            homeWrapperElem={homeWrapperElem}
            skillsWrapperElem={skillsWrapperElem}
            projectsWrapperElem={projectsWrapperElem}
            contactWrapperElem={contactWrapperElem}
          />
          <Navbar
            navbarLinkGithub={navbarLinkGithub}
            navbarLinkSkills={navbarLinkSkills}
            navbarLinkProjects={navbarLinkProjects}
            navbarLinkContact={navbarLinkContact}
            navbarHomeSkills={navbarHomeSkills}
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
                exact
              />
              <Route
                path="/projets/:project"
                element={<ProjectReader />}
                exact
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
