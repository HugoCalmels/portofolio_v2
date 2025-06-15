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
const CompetencesBlock = ({ title, items, isVisible }) => {
  const [resetCounter, setResetCounter] = useState(0);
  const [visibleState, setVisibleState] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setVisibleState(true);
    } else {
      setVisibleState(false);
      setResetCounter((c) => c + 1);
    }
  }, [isVisible]);

  return (
    <div className="competences">
      <h4>{title}</h4>
      <div
        key={`competences-wrapper-${resetCounter}`}
        className="competences-wrapper"
        style={{ display: "flex", gap: "20px" }}
      >
        {items.map((item, index) => {
          const delay = (items.length - 1 - index) * 150; // inverse ordre d'apparition

          return (
            <div
              key={index}
              className={`competence-target ${visibleState ? "visible" : ""}`}
              style={{
                transitionDelay: `${delay}ms`,
              }}
            >
              {item.icon}
              <div className="competence-title">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Skills = ({ skillsWrapperElem }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section className="skills-wrapper" id="skills" ref={skillsWrapperElem}>
      <div className="competences-main-title">
        <h2>Compétences</h2>
      </div>

      <div className="competences-container" ref={ref}>
        <CompetencesBlock
          title="Back End"
          items={[
            { name: "Java", icon: <FaJava /> },
            { name: "Spring", icon: <SiSpring /> },
            { name: "Postgres", icon: <SiPostgresql /> },
            { name: "Ruby", icon: <DiRuby /> },
            { name: "RoR", icon: <SiRubyonrails /> },
          ]}
          isVisible={inView}
        />
        <CompetencesBlock
          title="Front End"
          items={[
            { name: "JavaScript", icon: <IoLogoJavascript /> },
            { name: "React", icon: <FaReact /> },
            { name: "Angular", icon: <FaAngular /> },
            { name: "Vite", icon: <SiVite /> },
            { name: "NgRx", icon: <SiNgrx /> },
            { name: "Redux", icon: <SiRedux /> },
          ]}
          isVisible={inView}
        />
        <CompetencesBlock
          title="Outils"
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
          isVisible={inView}
        />
      </div>
    </section>
  );
};

export default Skills;