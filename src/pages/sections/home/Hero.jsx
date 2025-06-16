import "./Hero.scss";
import test from "../../../../src/assets/images/landing-7.png";
import { useNavigate } from "react-router-dom";
const Hero = (props) => {
  const navigate = useNavigate();
  const { navigateTo } = props;

  const handleClick = (page) => {
    navigate(`/`);
    setTimeout(() => {
      navigateTo(page); 
    }, 50); 
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
  <p>Création de sites et applis web</p>
<p>➔ Ouvert à collaborer</p>
<p>➔ Disponible rapidement</p>
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
 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
