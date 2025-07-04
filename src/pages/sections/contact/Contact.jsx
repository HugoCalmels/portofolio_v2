import "./Contact.scss";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsHouse } from "react-icons/bs";
import { RiMapPinLine } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
const Contact = (props) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false); // a remettre apres les tests

  const canSave =
    Boolean(name) &&
    Boolean(content) &&
    Boolean(checked) &&
    isValidEmail(email);

  function isValidEmail(email) {
    let regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      sendContactDemandAPI();
      setAlertMessage("Formulaire envoyé !");
    } else {
      setAlertMessage("Veuillez remplir tous les champs.");
    }
  };

  const sendContactDemandAPI = async () => {
    const body = {
      contact_demand: {
        name: name,
        email: email,
        content: content,
      },
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    await fetch(`https://clonebook-api.herokuapp.com/api/v1/contact`, config);
  };

  return (
    <section
      className="contact-wrapper"
      id="contact"
      ref={props.contactWrapperElem}
    >
             <div className="contact-main-title">
        <h2>Contact</h2>
        </div>

      <div className="contact-content-container">
      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="contact-form-input">
              <label htmlFor="input name">
                <FiUser className="form-label-image" />
              </label>
              <input
                placeholder="Nom / Prénom"
                type="text"
                id="input name"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="contact-form-input">
              <label htmlFor="input mail">
                <HiOutlineMail className="form-label-image"  />
              </label>
              <input
                placeholder="Email"
                type="text"
                id="input mail"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className="contact-form-input">
              <textarea
                placeholder="Quel est l'objet de votre demande ?"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className="contact-form-checkbox-wrapper">
              <div className="cfc-checkbox">
                <input
                  type="checkbox"
                  onChange={() => setChecked(!checked)}
                  id="input textarea"
                ></input>
              </div>
              <div className="cfc-text">
                <label htmlFor="input textarea">
                En soumettant ce formulaire, j'accepte que les informations
                  saisies soient utilisées afin de permettre de vous recontacter.
                  </label>
              </div>
            </div>
            <div className="contact-form-input-send">
              <input type="submit" value="Valider"></input>
            </div>
            </form>
            {alertMessage ? (
            <>
              {alertMessage === "Formulaire envoyé !" ? (
                <div className="contact-alert-wrapper success">
                  {alertMessage}
                </div>
              ) : (
                <div className="contact-alert-wrapper danger">
                  {alertMessage}
                </div>
              )}
            </>
          ) : (
            <></>
          )}

        </div>
        <div className="contact-infos">
          
          <h4>Hugo Calmels</h4>
          <div className="contact-line">
            <span>
              <BsHouse className="contact-line-image" />
            </span>
            <p>13 rue pégot, 31500 Toulouse</p>
          </div>

          <div className="contact-line">
            <span>
              <HiOutlineMail className="contact-line-image" />
            </span>
            <p>calmels.hugo@yahoo.fr</p>
          </div>
          <div className="contact-line">
            <span>
              <RiMapPinLine className="contact-line-image" />
            </span>
            <p><a href="https://hugo-calmels.fr/" target="_blank" rel="noopener noreferrer">https://hugo-calmels.fr/</a></p>
            </div>
            
            <div className="contact-line">
            <span>
              <FaLinkedin className="contact-line-image" />
            </span>
            <p><a href="https://www.linkedin.com/in/hugo-calmels/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/hugo-calmels/</a></p>
            </div>
            
            <div className="contact-line">
            <span>
              <FaGithub className="contact-line-image" />
            </span>
            <p><a href="https://github.com/HugoCalmels" target="_blank" rel="noopener noreferrer">https://github.com/HugoCalmels</a></p>
            </div>
            
            <div className="contact-line">
            <span>
              <FaGitlab className="contact-line-image" />
            </span>
            <p><a href="https://gitlab.com/hugocalmels" target="_blank" rel="noopener noreferrer">https://gitlab.com/hugocalmels</a></p>
          </div>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Contact;
