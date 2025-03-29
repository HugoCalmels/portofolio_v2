import "./Navbar.scss";
import logo from "../../assets/images/logo9.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = (props) => {
  const burgerModalElem = useRef(null);
  const btnStyle = { color: "#283044", width: "30px", height: "30px" };
  const navigate = useNavigate();
  const { navigateTo } = props;

  const navigateToHome = () => {
    navigate(`/`);
    window.scrollTo({ top: "0px" });
    closeBurgerModal();
  };

  const triggerBurgerModal = () => {
    burgerModalElem.current.classList.toggle("active");
  };

  const closeBurgerModal = () => {
    burgerModalElem.current.classList.remove("active");
  };



  const handleClick = (page) => {
    console.log(`Navigating to ${page}`);
    closeBurgerModal();
    console.log('Current pathname:', window.location.pathname);
    // Navigue vers la page d'accueil ou une route spécifique
    navigate(`/`);

    // Ajoute un délai court avant de faire défiler vers l'élément
    setTimeout(() => {
      navigateTo(page); // Utilise navigateTo de App.jsx pour scroller
    }, 50); // 50 ms est généralement suffisant, ajuste si nécessaire
  };
  return (
    <>
      <div className="navbar-burger-menu-modal" ref={burgerModalElem}>
        <ul>
          <li>
            <a className="nav-burger-link" onClick={() => handleClick("skills")}>
              Présentation
            </a>
          </li>
          <li>
            <a className="nav-burger-link" onClick={() => handleClick("projects")}>
              Projets
            </a>
          </li>
          <li>
            <a className="nav-burger-link" onClick={() => handleClick("contact")}>
              Contact
            </a>
          </li>
          <li>
            <a className="nav-burger-link" href="https://www.linkedin.com/in/hugo-calmels/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="nav-burger-link" href="https://github.com/HugoCalmels" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a className="nav-burger-link" href="https://gitlab.com/hugocalmels" target="_blank" rel="noopener noreferrer">
              Gitlab
            </a>
          </li>
        </ul>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-home-btn">
            <div
              className="nhb-logo-container"
              onClick={() => navigateToHome()}
            >
              <img src={logo} alt="Logo" />
            </div>

            <h3
              className="nhb-title home"
              onClick={() => navigateToHome()}
            >
              Hugo Calmels
            </h3>
          </div>



          <div className="navbar-menu-container">
            <ul className="navbar-menu-list">
              <li onClick={() => handleClick("presentation")} className="nml-link">
                Présentation
              </li>
              <li onClick={() => handleClick("skills")} className="nml-link">
                Compétences
              </li>
              <li onClick={() => handleClick("services")} className="nml-link">
                Services
              </li>
              <li onClick={() => handleClick("projects")} className="nml-link">
                Projets
              </li>
              <li onClick={() => handleClick("contact")} className="nml-link">
                Contact
              </li>

            </ul>
          </div>

          <div className="nc-burger-btn" onClick={triggerBurgerModal}>
                <GiHamburgerMenu style={btnStyle} />
              </div>
          
          <div className="navbar-buttons-icons">
          <div className="nbi-logo" onClick={() => window.open("https://www.linkedin.com/in/hugo-calmels/", "_blank")} role="button" tabIndex="0" onKeyPress={(e) => e.key === 'Enter' && window.open("https://www.linkedin.com/in/hugo-calmels/", "_blank")}>
              <FaLinkedin className="black-logo"/>
            </div>
            <div className="nbi-logo" onClick={() => window.open("https://github.com/HugoCalmels", "_blank")} role="button" tabIndex="0" onKeyPress={(e) => e.key === 'Enter' && window.open("https://github.com/HugoCalmels", "_blank")}>
              <FaGithub className="black-logo"/>
            </div>
            <div className="nbi-logo" onClick={() => window.open("https://gitlab.com/hugocalmels", "_blank")} role="button" tabIndex="0" onKeyPress={(e) => e.key === 'Enter' && window.open("https://gitlab.com/hugocalmels", "_blank")}>
              <FaGitlab className="black-logo"/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
