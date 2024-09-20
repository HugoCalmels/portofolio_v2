import "./Hero.scss";
import Computer from "../../../assets/svgs/Computer";
import BigStain from "../../../assets/svgs/BigStain";

const Hero = (props) => {
  return (
    <section className="hero-wrapper">
      
      <div className="hero-content">
        <div className="hero-top">
          <div className="hero-content-title">
            <h1>Hugo Calmels</h1>
          </div>
          <div className="hero-content-text">
            <p>Développeur d'applications web</p>
          </div>
        </div>
      
        <div className="hero-content-technos">
          
        </div>
      </div>

    </section>
  );
};

export default Hero;
