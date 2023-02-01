import "./ProjectReader.scss"
import { useState, useRef } from "react"
import { ProjectsList } from "../../data/ProjectsList"
import { useParams, useNavigate } from "react-router-dom";
import MediumStain from "../../assets/svgs/MediumStain"
import LongStain from "../../assets/svgs/LongStain"
import VeryLongStain from "../../assets/svgs/VeryLongStain"
import ImagesReader from "./ImagesReader"
import { RxTriangleRight } from "react-icons/rx"
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs"
import {BsArrowUpCircle} from "react-icons/bs"
const ProjectReader = () => {
  const navigate = useNavigate()
  const btnStyle = { color: "#8D8DDA", width: "30px", height: "30px" }
  const btnStyle2 = { borderRadius: "50%", backgroundColor: "white",color: "#000C2E", width: "35px", height: "35px" }
  const [selectedImage, setSelectedImage] = useState("")
  const [isReaderOpen, setIsReaderOpen] = useState(false)
  const ImagesReaderRef = useRef(null)
  const title = useParams()
  console.log(title.project)
  const foundProject = ProjectsList.find(el => el.ref === title.project)
  
  /*
   <ul className="prb-tags-grid">
                  {foundProject.tags.map((tag => (
                    <li className="prb-tag">{tag}</li>
                  )))}
                </ul>
  */
                    
  const handleImage = (image) => {
    //setIsReaderOpen(true)
    console.log('111111')
    console.log(image)
    console.log('111111')
    setSelectedImage(image)
    ImagesReaderRef.current.classList.add("active")
 
   }                 
  /*
       <div className="reader-overlay">
        
      </div>
  */
  const handleClickPreviousPage = () => {
    history.push
  }

  const navigateTo = (arg) => {
    navigate(`/#${arg}`)

    setTimeout(() => {
      document.querySelector(`#${arg}`).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

    },100)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: '0px',
    behavior: 'smooth'});
  }
  
  return ( 
    <section className="project-reader-wrapper">
      <ImagesReader selectedImage={selectedImage} ImagesReaderRef={ImagesReaderRef} />

      <div className="projet-reader-fixed-btns-container">

        <div className="prfb-btn projects" onClick={()=>navigateTo("projects")}>
          <BsArrowLeftCircle style={btnStyle2} />
        </div>
        <div className="prfb-btn">
          <BsArrowUpCircle style={btnStyle2} onClick={()=>scrollToTop()} />
          </div>
   

      </div>

      <div className="project-reader-container">
      <div className="project-reader-intro">
          <h2>{foundProject.title}</h2>
          {foundProject.ref === "clonebook" ?
              <div className="project-reader-stain very-long">
              <VeryLongStain/>
            </div>
            : foundProject.ref === "blog" ?
            <div className="project-reader-stain long">
            <LongStain/>
          </div>
            :
            <div className="project-reader-stain">
            <MediumStain/>
          </div>
          }
     
      </div>
      
      <div className="project-reader-content">
        <div className="project-reader-rectangle">
            <div className="project-reader-box">
       
              <div className="prb-img" >
              <a href={foundProject.link}  target="_blank"/>
                <img src={foundProject.image}/>
              </div>
              <div className="prb-content">
                <div className="prb-description">
                  <h6>Description de l'application :</h6>
                  <p>{foundProject.longDescription}</p>
                </div>
                <div className="prb-buttons-container">
                  <a className="prb-button link" href={foundProject.link} target="_blank">lien</a>
                  <a className="prb-button code" href={foundProject.code} target="_blank">code</a>

               </div>
              </div>
          </div>
        </div>
        </div>

        <h3 id="project-reader-more-about-title">Plus à propos de ce projet :</h3>

        <div className="project-reader-features-list">
          {foundProject.features.map((feature) => (
            <div className="prf-feature-wrapper">
              <h5 className="prf-feature-title">{feature.title}</h5>
            <div className="prf-feature">
          
              <div className="prf-img" onClick={()=>handleImage(feature.screenshot)}>
                <img src={feature.screenshot}/>
              </div>
              <div className="prf-text">
                <p>{feature.description}</p>
              </div>
            </div>
            </div>
          ))}
        </div>

        <div className="project-reader-languages">
          <h6>Langages et outils utilisés :</h6>
          <ul>
          {foundProject.tags.map((tag) => (
            <li className="prl-tag"><RxTriangleRight style={btnStyle} />{tag}</li>
          ))}
            </ul>
        </div>
        </div>
    </section>
  )
}

export default ProjectReader