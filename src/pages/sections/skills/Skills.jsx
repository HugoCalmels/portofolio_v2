import "./Skills.scss";
import THPLogo from "../../../assets/images/THPLogo.png";
import MediumStain from "../../../assets/svgs/MediumStain";
import hugo from "../../../assets/images/hugoo.jpg";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";
import { FaBabyCarriage } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiTwotoneCode } from "react-icons/ai";
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { AiOutlineCode } from "react-icons/ai";
const Skills = (props) => {
  return (
    <section
      className="skills-wrapper"
      id="skills"
      ref={props.skillsWrapperElem}
    >
     
      <h2>Présentation</h2>
      <div className="skills-container">
 

        <div className="skills-content">

          <div className="skills-content-text">

            <div className="skills-content-intro">
              <p>Développeur fullstack en reconversion, je me concentre sur des projets personnels pour renforcer mes compétences en front-end et back-end. Mon portfolio témoigne de mon parcours et de mon apprentissage dans le domaine du développement web.<br/>
En dehors du travail, j’apprécie les montagnes et les activités sportives. Passionné de jeux vidéo, je passe beaucoup de temps à explorer des titres que j’affectionne.
              </p>
            </div>

            <div className="skills-content-techstack">
              <h5>TechStack :</h5>
              <div className="skills-content-techstack-container">
                <div className="skills-content-techstack-entity">
                  <div className="skills-content-techstack-entity-icon">
                    <FaJava className="skills-content-techstack-entity-icon-image"/>
                  </div>
                  <div className="skills-content-techstack-entity-stack">
                    <p>Java</p>
                  </div>
                </div>
                <div className="skills-content-techstack-entity">
                  <div className="skills-content-techstack-entity-icon">
                    <SiSpringboot className="skills-content-techstack-entity-icon-image"/>
                  </div>
                  <div className="skills-content-techstack-entity-stack">
                    <p>SpringBoot</p>
                  </div>
                </div>
                <div className="skills-content-techstack-entity">
                  <div className="skills-content-techstack-entity-icon">
                    <FaAngular className="skills-content-techstack-entity-icon-image"/>
                  </div>
                  <div className="skills-content-techstack-entity-stack">
                    <p>Angular</p>
                  </div>
                </div>
                <div className="skills-content-techstack-entity">
                  <div className="skills-content-techstack-entity-icon">
                    <FaReact className="skills-content-techstack-entity-icon-image"/>
                  </div>
                  <div className="skills-content-techstack-entity-stack">
                    <p>React</p>
                  </div>
                </div>
                <div className="skills-content-techstack-entity">
                  <div className="skills-content-techstack-entity-icon">
                    <SiPostgresql className="skills-content-techstack-entity-icon-image"/>
                  </div>
                  <div className="skills-content-techstack-entity-stack">
                    <p>PostgreSQL</p>
                  </div>
                </div>
              </div>
            </div>




          </div>
          <div className="skills-content-image">
            <img src={hugo}></img>
          </div>
        </div>



        <div className="skills-qualities">
          <div className="skills-qualities-container">

            <div className="skills-qualities-entity">
            <LiaBabyCarriageSolid  className="skills-qualities-entity-image"/>
              
              <div className="skills-qualities-entity-content">
                <h5>Reconversion</h5>
                <p>
                  À 30 ans passés, sans diplôme et avec des expériences professionnelles peu satisfaisantes, j’ai eu une prise de conscience décisive.<br />
                  Je me suis lancé, et j’ai complété le Bootcamp <a href="https://www.thehackingproject.org/" target="_blank">TheHackingProject</a> de développeur fullstack en 6 mois, où j’ai été parmi les rares à réussir.
                  
                </p>
              </div>
            </div>

            <div className="skills-qualities-entity">
            <AiOutlineCode className="skills-qualities-entity-image"/>
              <div className="skills-qualities-entity-content">
                <h5>Autodidacte</h5>
                <p>Suite au Bootcamp, j'ai dédié une grande partie de mon temps à un apprentissage intensif en autodidacte, en me concentrant sur des projets concrets pour développer mes compétences.<br/>
                  J'utilise divers outils comme YouTube, Google, ChatGPT, Midjourney, Reddit, et Notion pour m'autoformer et résoudre des problèmes.
            
                </p>
              </div>
            </div>

            <div className="skills-qualities-entity">
            <GiHumanPyramid className="skills-qualities-entity-image"/>
              <div className="skills-qualities-entity-content">
                <h5>Mentoré</h5>
                <p>Parallèlement à mon apprentissage autonome, j'ai eu la chance de bénéficier d'un mentorat.<br/>
                  Ce soutien m'a permis d'affiner mes compétences techniques et d'approfondir ma compréhension des concepts clés, enrichissant ainsi mon parcours professionnel.

                </p>
              </div>
            </div>
            
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Skills;
