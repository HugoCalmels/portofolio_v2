
import "./Navbar.scss"
import Logo from "../../assets/svgs/Logo"
import { useNavigate , useParams} from "react-router-dom";
import { useContext, useRef } from "react"
import { SectionContext } from "../../context/SectionContext"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = (props) => {

  const burgerModalElem = useRef(null)
  const btnStyle = { color: "white", width: "35px", height: "35px" }
  const navigate = useNavigate()
  //const {querry} = useParams()

const { section, setSection } = useContext(SectionContext);
  const navigateToHome = () => {
    navigate(`/`)
    window.scrollTo({ top: '0px'});
    closeBurgerModal()
  }

  const scrollToSection = (direction) => {
    // YES BUT WHAT IF THEY CLICK OUTSIDE FROM INDEX, THEN ITS NOT scrollToSection
    setSection(direction)
  }

  const navigateTo = (arg) => {


      navigate(`/#${arg}`)

      setTimeout(() => {
        document.querySelector(`#${arg}`).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })

      },100)
      closeBurgerModal()
  
    


 

  }

  let url = window.location.pathname

  console.log("111111111111111")
  console.log("111111111111111")
  console.log(url)
    console.log("111111111111111")
  console.log("111111111111111")


  
  const triggerBurgerModal = () => {
    if (burgerModalElem.current.classList.contains("active")) {
      burgerModalElem.current.classList.remove("active")
    }
    else {
      burgerModalElem.current.classList.add("active")
    }
    
  }

  const closeBurgerModal = () => {
    burgerModalElem.current.classList.remove("active")
  }


  return (
    <>
        <div className="navbar-burger-menu-modal" ref={burgerModalElem}>
        <ul>
        {url === '/' ?
            <>
              <li ><a onClick={closeBurgerModal} className="nav-burger-link" href="#skills">compétences</a></li>
          <li ><a onClick={closeBurgerModal} className="nav-burger-link" href="#projects">projets</a></li>
          <li ><a onClick={closeBurgerModal} className="nav-burger-link" href="#contact">contact</a></li>
            </>
            :
            <>
           <li className="nav-burger-link skills"onClick={(e)=>navigateTo("skills")} >compétences</li>
          <li className="nav-burger-link projects" onClick={(e)=>navigateTo("projects")} >projets</li>
          <li className="nav-burger-link contact" onClick={(e)=>navigateTo("contact")} >contact</li>
            </>
          }
          </ul>
      </div>

      <nav className="navbar">
    
    <div className="navbar-container">
      <div className="navbar-home-btn" >
        <div className="nhb-logo-container"onClick={()=>navigateToHome()}>  <Logo/></div>
    
        <h3 className="nhb-title home"ref={props.navbarHomeSkills} onClick={()=>navigateToHome()}>Hugo Calmels</h3>
      </div>

      <div className="nc-burger-btn" onClick={triggerBurgerModal}>
        <GiHamburgerMenu style={btnStyle} />
      </div>

      

      <div className="navbar-menu-container">
      <ul className="navbar-menu-list">
          {url === '/' ?
            <>
              <li ><a  className="nml-link skills"ref={props.navbarLinkSkills} href="#skills">compétences</a></li>
          <li ><a className="nml-link projects" ref={props.navbarLinkProjects}href="#projects">projets</a></li>
          <li ><a className="nml-link contact" ref={props.navbarLinkContact}href="#contact">contact</a></li>
            </>
            :
            <>
           <li className="nml-link-second-page skills"onClick={(e)=>navigateTo("skills")} >compétences</li>
          <li className="nml-link-second-page projects" onClick={(e)=>navigateTo("projects")} >projets</li>
          <li className="nml-link-second-page contact" onClick={(e)=>navigateTo("contact")} >contact</li>
            </>
          }

          <li ><a className="nml-link-secondary-github" ref={props.navbarLinkGithub} href="https://github.com/HugoCalmels"  target="_blank">github</a></li>
        </ul>
        </div>
    </div>
  </nav>
    </>
   
  )
}

export default Navbar