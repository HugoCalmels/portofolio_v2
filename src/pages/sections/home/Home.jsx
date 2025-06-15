import "./Home.scss";
import Hero from "./Hero";
import hugo from "../../../assets/images/hugoo.jpg";
import mam from "../../../assets/images/mam.jpg";
import arthur from "../../../assets/images/arthur-m.jpg";

import { useState } from "react";

const Home = (props) => {
  const [modalContent, setModalContent] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (text, image, title) => {
    setModalContent(text);
    setModalImage(image);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
    setModalImage("");
    setModalTitle("");
  };

  return (
    <section className="home-wrapper" id="home" ref={props.homeWrapperElem}>
      <Hero
        navbarLinkProjects={props.navbarLinkProjects}
        navbarLinkContact={props.navbarLinkContact}
        navigateTo={props.navigateTo}
      />
      <div className="home-testimonials">
        <div className="ht-body">
          <div className="ht-unit">
            <div className="ht-header">
              <div className="ht-header-image">
                <img src={arthur} alt="Arthur Mollet" />
              </div>
              <div className="ht-header-content">
                <p><strong>Arthur Mollet</strong></p>
                <p>Devéveloppeur Senior</p>
              </div>
            </div>

            <p className="ht-text">
              Ça fait quelques années que je travaille dans l'industrie, et j'ai déjà croisé des profils comme celui d’Hugo, mais c'est devenu rare...
            </p>
            <p 
              className="ht-btn" 
              onClick={() => openModal(
                `Ça fait quelques années que je travaille dans l'industrie, et j'ai déjà croisé des profils comme celui d’Hugo, mais c'est devenu rare.<br/>
                Hugo, c’est comme un commando : vous pouvez le lâcher sur une tâche dont il ne connaît rien techniquement, il vous pondra quelque chose qui fonctionne et qui est maintenable, le tout en autonomie.<br/>
                Et quand on le canalise et nourrit sa curiosité, ça fait des étincelles. C’est un véritable couteau suisse du développement : il s’adapte et est force de proposition.<br/>
                On a tous eu ce collègue dont on se dit : « Si un jour il ou elle part, ça va être un coup dur ! » Eh bien, vous avez ici l’occasion de l’embaucher… et en plus en promo, c’est sa première expérience professionnelle !`,
                arthur,
                "Arthur Mollet"
              )}
            >
              Lire la suite
            </p>
          </div>

          <div className="ht-unit">
            <div className="ht-header">
              <div className="ht-header-image">
                <img src={mam} alt="Gaëlle Boucherit" />
              </div>
              <div className="ht-header-content">
                <p><strong>Gaëlle Boucherit</strong></p>
                <p>Artiste</p>
              </div>
            </div>

            <p className="ht-text">
              J'avais besoin d'un nouveau site. Des échanges clairs et précis avec une écoute constructive...
            </p>
            <p 
              className="ht-btn" 
              onClick={() => openModal(
                `J'avais besoin d'un nouveau site.<br/>
                Des échanges clairs et précis avec une écoute constructive et adaptée à mes besoins.<br/>
                Aujourd’hui mon site est très performant et harmonieux. Toutes les pages sont réussies. <br/>
                Design élégant de la galerie et super idée pour la page d’accueil !`,
                mam,
                "Gaëlle Boucherit"
              )}
            >
              Lire la suite
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="ht-modal-overlay" onClick={closeModal}>
          <div className="ht-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="ht-modal-header">
              <img src={modalImage} alt={modalTitle} className="ht-modal-image" />
              <h6 className="ht-modal-title">{modalTitle}</h6>
              <button className="ht-modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="ht-modal-body">
            <p dangerouslySetInnerHTML={{ __html: modalContent }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;