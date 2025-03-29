import "./Hero.scss";
import { SiReact, SiNodedotjs, SiJavascript, SiCss3 } from "react-icons/si";
import hugo from "../../../assets/images/hugoo.jpg";
import img from "../../../../src/assets/images/backgroundThree.png";
import img2 from "../../../../src/assets/images/7.jpg";
import Illustration from "../../../assets/svgs/Illustration.jsx";

import test from "../../../../src/assets/images/Galaxy Tab S8 Ultra5.jpg";
import { useNavigate } from "react-router-dom";
const Hero = (props) => {
  const navigate = useNavigate();
  const { navigateTo } = props;

  const handleClick = (page) => {
    console.log(`Navigating to ${page}`);

    // Navigue vers la page d'accueil ou une route spécifique
    navigate(`/`);

    // Ajoute un délai court avant de faire défiler vers l'élément
    setTimeout(() => {
      navigateTo(page); // Utilise navigateTo de App.jsx pour scroller
    }, 50); // 50 ms est généralement suffisant, ajuste si nécessaire
  };
  return (
    <section className="hero-wrapper">
      <div className="hero-content">
        <div className="hero-top">
          <div className="hero-body">
            <div className="hero-text-wrapper">
              <div className="hero-content-title">
                <h1>Hugo Calmels</h1>
              </div>
              <div className="hero-content-text">
                <h3>Développeur Full Stack</h3>
                <p>Je conçois des applications ou des sites web et mobile.</p>
                <p>➔ Je recherche actuellement ma première expérience en entreprise.</p>
                <p>➔ Je peux coder votre site ou votre application.</p>
              </div>
            </div>
            
            <div className="hero-buttons">
              <a onClick={() => handleClick("projects")} className="btn-custom main">Voir mes projets</a>
              <a onClick={() => handleClick("contact")} className="btn-custom second">Me contacter</a>
            </div>
          </div>
          <div className="hero-photo">
            <div className="hero-photo-wrapper">
              <img src= {test}/>
   
            </div>
            {/* Remplacer l'img par le composant SVG */}
 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
