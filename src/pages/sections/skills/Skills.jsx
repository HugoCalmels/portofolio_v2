import "./Skills.scss";
import THPLogo from "../../../assets/images/THPLogo.png";
import MediumStain from "../../../assets/svgs/MediumStain";

const Skills = (props) => {
  return (
    <section
      className="skills-wrapper"
      id="skills"
      ref={props.skillsWrapperElem}
    >
      <div className="skills-title">
        <h2>Compétences</h2>
        <div className="skills-stain">
          <MediumStain />
        </div>
      </div>

      <div className="skills-intro-text">
        <p>
        Compétences en développement Frontend pour des interfaces utilisateur réactives et performantes.
        </p>
      </div>
      <div className="skills-infos">
        <p>
          <span>Langages de programmation</span> : HTML, CSS, JavaScript, Ruby
        </p>
        <p>
          <span>Frameworks et bibliothèques</span> : React.js, Ruby on Rails,
          Jest
        </p>
        <p>
          <span>Base de données</span> : PostgreSQL
        </p>
        <p>
          <span>Outils</span> : Git, Github, Figma, npm, Webpack, Vite, Netlify,
          Heroku, JWT-tokens
        </p>
        <p>
          <span>Autres compétences</span> : Responsive design, Optimisation de
          la performance, Référencement naturel ( SEO ), Expérience UI/UX, Méthode Agile
        </p>
        <p>
          <span>Plateform cloud</span> : AWS
        </p>
      </div>

      <div className="skills-formation">
        <h4>Formation</h4>
        <div className="skills-formation-content">
          <div className="skills-formation-infos">
            <p>Développeur Full Stack :</p>
            <p>mars 2021 - septembre 2021</p>
            <p>Formation certifiante</p>
          </div>
          <div className="skills-formation-img">
            <img src={THPLogo} alt="THP Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
