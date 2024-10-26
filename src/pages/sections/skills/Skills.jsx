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
import { FaGears } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";

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
              <p>Développeur Full Stack junior, je me spécialise dans la création d’applications web avec une approche pratique et un esprit d’apprentissage continu.<br/>
               
              Je suis prêt à mettre mes compétences au service de projets ambitieux en CDI, CDD, contrat de professionnalisation ou mission freelance, pour contribuer activement aux projets et continuer de développer mon expertise.<br />
              Mon objectif est de produire un code propre et optimisé et d’apporter de la valeur à chaque mission.<br/> En dehors du développement, j’apprécie les randonnées en montagne et les jeux vidéo.

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
            <FaCode  className="skills-qualities-entity-image"/>
              
              <div className="skills-qualities-entity-content">
                <h5>Frontend</h5>
                <p>
                  Je suis force de proposition : je dessine mes idées sur Figma pour échanger avec l’équipe ou le client, et je sais reproduire fidèlement une maquette en interface utilisateur. <br />
                  J’ai aussi un attrait particulier pour la création de formulaires personnalisés et l’amélioration continue des interfaces selon les retours.
                </p>
              </div>
            </div>

            <div className="skills-qualities-entity">
            <FaGears className="skills-qualities-entity-image"/>
              <div className="skills-qualities-entity-content">
                <h5>Backend</h5>
                <p>Je crée des systèmes pour faire circuler les données et assurer leur sécurité.<br />
                J’ai de l’expérience en gestion de bases de données, en gestion des accès utilisateurs, en mise à jour en temps réel, en optimisation des performances, en gestion des erreurs, en envoi d’emails automatiques et en gestion de fichiers (images, vidéos).
                </p>
              </div>
            </div>

            <div className="skills-qualities-entity">
            <FaHandsHelping className="skills-qualities-entity-image"/>
              <div className="skills-qualities-entity-content">
                <h5>Mentoré</h5>
                <p>J’ai été mentoré par un développeur professionnel sur Java et Angular, qui a validé et enrichi mes bonnes pratiques.<br/>
                Cette expérience m’a permis de mieux travailler en équipe, de gérer des conflits Git, et de produire un code clair et facile à maintenir.<br/> J’ai aussi gagné en organisation et en capacité à collaborer sur des projets.

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
