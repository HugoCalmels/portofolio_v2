import "./Projects.scss"
import SmallStain from "../../../assets/svgs/SmallStain"
import { ProjectsList } from "../../../data/ProjectsList"
import { useNavigate } from "react-router-dom";

const Projects = (props) => {
  const navigate = useNavigate()

  const navigateTo = (title) => {
    const html = document.documentElement;
    html.style.scrollBehavior = "auto"
    navigate(`/projets/${title}`)
    window.scrollTo({ top: '0px', behavior: "auto"});
    setTimeout(() => {
      html.style.scrollBehavior = "smooth"
    },100)

  }
  return (
    <section className="projects-wrapper" id="projects" ref={props.projectsWrapperElem}>
  <div className="projects-title">
        <h2>Projets</h2>
        <div className="projects-title-stain">   <SmallStain/></div>
     
        
      </div>
      <div className="projets-intro-container">
        <p>Vous pouvez également trouver sur mon <a href="https://github.com/HugoCalmels" target="_blank">github</a> l'ensemble des projets que j'ai publié.</p>
      </div>
      <div className="projects-container">
        <div className="projects-rectangle">
          <div className="projects-box">
        

      <div className="projects-content">
   
        {ProjectsList.map((project) => (
          <div className="projects-project-card" onClick={()=>navigateTo(project.ref)}>
            <div className="project-card-img"><img src={project.image}/></div>
            <div className="project-card-content">
              <h6>{project.title}</h6>
              <p>{project.shortDescription}</p>
              <ul className="project-card-tags-grid">
              {project.tags.map((tag) => (
                <li className="project-card-tag">{tag}</li>
              ))}
              </ul>
 
            </div>
          
          </div>
        ))}
                          <div className="project-card-invis-div"></div>  
            </div>
         
          </div>

      </div>
      </div>
    </section>
  )
}

export default Projects