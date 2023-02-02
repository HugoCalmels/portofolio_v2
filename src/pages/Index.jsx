import "./Index.scss";
import Home from "./sections/home/Home";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import { BsArrowUpCircle } from "react-icons/bs";

const Index = (props) => {
  const btnStyle2 = {
    borderRadius: "50%",
    backgroundColor: "white",
    color: "#000C2E",
    width: "35px",
    height: "35px",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: "0px", behavior: "smooth" });
  };

  return (
    <div className="main-default">
      <div className="index-fixed-btns-container">
        <div className="if-btn">
          <BsArrowUpCircle style={btnStyle2} onClick={() => scrollToTop()} />
        </div>
      </div>
      <Home homeWrapperElem={props.homeWrapperElem} />
      <Skills skillsWrapperElem={props.skillsWrapperElem} />
      <Projects projectsWrapperElem={props.projectsWrapperElem} />
      <Contact contactWrapperElem={props.contactWrapperElem} />
    </div>
  );
};

export default Index;
