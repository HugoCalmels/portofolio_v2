import "./Contact.scss"
import {useState} from "react"
import SmallStain from "../../../assets/svgs/SmallStain"
import { FiUser } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
import { BsHouse } from "react-icons/bs"
import { BsTelephone } from "react-icons/bs"
import {RiMapPinLine} from "react-icons/ri"
const Contact = (props) => {
  const btnStyle = { color: "white", width: "20px", height: "20px" }
  const btnStyle2 = { color: "black", width: "20px", height: "20px" }

  const [alertMessage, setAlertMessage] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")
  const [checked, setChecked] = useState(false) // a remettre apres les tests

  const canSave = Boolean(name) && Boolean(content) && Boolean(checked) && isValidEmail(email) 

  function isValidEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (canSave) {
      sendContactDemandAPI()
      setAlertMessage("Formulaire envoyé !")
    } else {
      setAlertMessage("Veuillez remplir tous les champs.")
    }
    console.log(name)
    console.log(email)
    console.log(content)
    console.log(e)

  }

  const sendContactDemandAPI = async () => {
    const body = {
      contact_demand: {
        name: name,
        email: email,
        content: content
      },
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const res = await fetch(`https://clonebook-api.herokuapp.com/api/v1/contact`, config)
    const data = await res.json();
    console.log("%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%")
    console.log(data)
    console.log("%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%")
   
  }

  return (
    <section className="contact-wrapper" id="contact"ref={props.contactWrapperElem}>
      <div className="contact-title">
        <h2>Contact</h2>
        <div className="contact-stain">
          <SmallStain />
        </div>
       
      </div>
      <div className="contact-text">
      <p>Je cherche actuellement un poste de développeur, dans une ESN ( Entreprise de Services du Numérique ) à Toulouse.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="contact-form-input">
              <label><FiUser style={btnStyle} /></label>
            <input placeholder="Nom / Prénom"type="text" onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className="contact-form-input">
              <label><HiOutlineMail style={btnStyle} /></label>
            <input placeholder="Email"type="text" onChange={(e)=>setEmail(e.target.value)}></input>
            </div>

            <div className="contact-form-input">
        
            <textarea placeholder="Entrez un texte" onChange={(e)=>setContent(e.target.value)}></textarea>
            </div>
            <div className="contact-form-checkbox-wrapper">
              <div className="cfc-checkbox">
                <input type="checkbox" onChange={()=>setChecked(!checked)}></input>
              </div>
              <div className="cfc-text">En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées afin de permettre de vous recontacter.</div>
            </div>
            <div className="contact-form-input-send">
              <input type="submit" value="envoyer"></input>
              </div>
            
          </form>
        </div>
        <div className="contact-infos">
          {alertMessage ?
            <>
              {alertMessage === "Formulaire envoyé !" ?
                   <div className="contact-alert-wrapper success">
                   {alertMessage}
                 </div>
                :
                <div className="contact-alert-wrapper danger">
                {alertMessage}
              </div>
              }
            </>
            :
            <></>
          }
       
          <h4>Hugo Calmels</h4>
          <div className="contact-line">
          <span><BsHouse style={btnStyle2}/></span><p>13 rue pégot,</p>
          </div>
          <div className="contact-line">
          <span></span><p>31500 Toulouse</p>
          </div>
          <div className="contact-line">
          <span><BsTelephone style={btnStyle2}/></span><p>(+33)7.68.10.99.80</p>
          </div>
          <div className="contact-line">
          <span><HiOutlineMail style={btnStyle2}/></span><p>calmels.hugo@yahoo.fr</p>
          </div>
          <div className="contact-line">
          <span><RiMapPinLine style={btnStyle2}/></span><p>www.portofolio-hugo-calmels.com</p>
          </div>
    
       
       

        </div>
        </div>
    </section>
  )
}

export default Contact