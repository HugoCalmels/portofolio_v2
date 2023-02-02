
import "./Hero.scss"
import Computer from "../../../assets/svgs/Computer"
import BigStain from "../../../assets/svgs/BigStain"
import ResponsiveTitleStain from "../../../assets/svgs/ResponsiveTitleStain"
import {useRef} from "react"
const Hero = (props) => {

  const windowWidth =window.innerWidth
  console.log(windowWidth)


  return (
    <section className="hero-wrapper" >
      <div className="hero-content">
        <div className="hero-top">


        <div className="hero-content-title">
            <div className="hero-content-title-stain">
        
                <BigStain />
          
       
          </div>
    
          <h1>Hugo Calmels, Développeur Web</h1>
        </div>
        <div className="hero-content-text">
          <p>Expérience en développement pour des projets sur mesure.</p>
          </div>
          </div>
        <div className="hero-content-buttons">
          <a href="#projects"className="hero-btn projects">projets</a>
          <a href="#contact"className="hero-btn contact">contact</a>
        </div>
      </div>
      <div className="hero-img">
        <Computer/>
      </div>
    </section>
  )
}

export default Hero