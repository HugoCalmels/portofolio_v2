import "./Skills.scss";
import THPLogo from "../../../assets/images/THPLogo.png";
import MediumStain from "../../../assets/svgs/MediumStain";
import hugo from "../../../assets/images/hugoo.jpg";
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
import { useState, useEffect } from "react";

//backend
import { FaJava } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

//frontend
import { IoLogoJavascript } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiNgrx } from "react-icons/si";
import { SiRedux } from "react-icons/si";

// outils
import { FaGitAlt } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { SiDbeaver } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
const CompetencesBlock = ({ title, items }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Dès qu'une partie de l'élément est visible
    triggerOnce: false, // Permet l'animation chaque fois que l'élément devient visible
  });

  useEffect(() => {
    if (inView) {
      // Quand l'élément devient visible, on active l'animation
      setHasAnimated(true);
    } else {
      // Quand l'élément sort de la vue, on réinitialise l'animation
      setHasAnimated(false);
    }
  }, [inView]); // Dépendance sur inView pour réagir au changement de visibilité

  return (
    <div
      ref={ref}
      className={`competences ${hasAnimated ? "visible" : ""}`} // Applique "visible" selon l'état
    >
      <h4>{title}</h4>
      <div className="competences-wrapper">
        {items.map((item, index) => (
          <div key={index} className="competence-target">
            {item.icon}
            <div className="competence-title">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = ({ skillsWrapperElem }) => {
  return (
    <section className="skills-wrapper" id="skills" ref={skillsWrapperElem}>
      <div className="competences-main-title">
        <h2>Compétences</h2>
      </div>

      <div className="competences-container">
        <CompetencesBlock
          title="Back End"
          index={0} // Premier bloc (gauche)
          items={[
            { name: "Java", icon: <FaJava /> },
            { name: "Spring", icon: <SiSpring /> },
            { name: "Postgres", icon: <SiPostgresql /> },
            { name: "Ruby", icon: <DiRuby /> },
            { name: "RoR", icon: <SiRubyonrails /> },
          ]}
        />
        <CompetencesBlock
          title="Front End"
          index={1} // Bloc du milieu (droite)
          items={[
            { name: "JavaScript", icon: <IoLogoJavascript /> },
            { name: "React", icon: <FaReact /> },
            { name: "Angular", icon: <FaAngular /> },
            { name: "Vite", icon: <SiVite /> },
            { name: "NgRx", icon: <SiNgrx /> },
            { name: "Redux", icon: <SiRedux /> },
          ]}
        />
        <CompetencesBlock
          title="Outils"
          index={2} // Dernier bloc (gauche)
          items={[
            { name: "Git", icon: <FaGitAlt /> },
            { name: "Netlify", icon: <BiLogoNetlify /> },
            { name: "Heroku", icon: <GrHeroku /> },
            { name: "Figma", icon: <FaFigma /> },
            { name: "Dbeaver", icon: <SiDbeaver /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "IntelliJ", icon: <SiIntellijidea /> },
            { name: "VSCode", icon: <VscVscode /> },
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
