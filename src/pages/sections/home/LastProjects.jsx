import "./LastProjects.scss";
import { ProjectsList } from "../../../data/ProjectsList";
import { useNavigate } from "react-router-dom";
const LastProjects = () => {
  const navigate = useNavigate();

  const navigateTo = (title) => {
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    navigate(`/projets/${title}`);
    window.scrollTo({ top: "0px", behavior: "auto" });
    setTimeout(() => {
      html.style.scrollBehavior = "smooth";
    }, 100);
  };
  const filteredProjects = ProjectsList.filter((project, index) => index < 2);
  return (
    <section className="last-projects-wrapper">
      <div className="last-projects-title">
        <h4>Dernières réalisations :</h4>
      </div>
      <div className="last-project-cardslist">
        {filteredProjects.map((project) => (
          <div
            className="last-project-card"
            onClick={() => navigateTo(project.ref)}
          >
            <div className="last-project-img">
              <img src={project.image} alt="project image" />
            </div>
            <div className="last-project-content">
              <div className="lpc-top">
                <h6>{project.title}</h6>

                <p>{project.shortDescription}</p>
              </div>
              <ul className="last-project-tags-container">
                {project.tags.map((tag) => (
                  <li className="last-project-tag">{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LastProjects;
