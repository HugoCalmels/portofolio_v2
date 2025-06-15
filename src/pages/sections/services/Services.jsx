import "./Services.scss";
import figma from "../../../assets/images/ffigma2.png";

const Services = (props) => {
  return (
    <section
      className="services-wrapper"
      id="services"
      ref={props.servicesWrapperElem}
    >
      <div className="services-main-title">
      <h2>Services</h2>
      </div>

      <div className="services-body">
        <div className="service creation">
          <h4>Création et Développement 🛠️</h4>
          <p>✔ Maquettage & Design (Wireframes, prototypes Figma)</p>
          <p>✔ Développement Front-End (UI responsive, animations, accessibilité, frameworks modernes)</p>
          <p>✔ Développement Back-End (APIs REST, gestion des utilisateurs, logique métier)</p>
          <p>✔ Mise en place d'une Base de Données (PostgreSQL, gestion des performances, migrations)</p>
        </div>
        <div className="service creation">
          <h4> Optimisation et Performance 🚀</h4>
          <p>✔ Optimisation des performances web (chargement rapide, optimisations images, lazy loading, Lighthouse)</p>
          <p>✔ Déploiement & Référencement (SEO, sitemap, indexation Google)</p>
        </div>
        <div className="service creation">
          <h4> Sécurité, Connexions & Intégrations 🔐</h4>
          <p>✔ Authentification & Sécurité (JWT-tokens, refresh tokens, http-only cookies)</p>
          <p>✔ Intégration d’API & Services Externes (Stripe, Google Maps, Google Calendar, Google OAuth, OpenID, Gmail SMTP)</p>
          <p>✔ Connexion avec d’autres API (services météo, transport, finance, etc.)</p>
        </div>

        
      </div>
      <div className="services-exemples">
        <h4>Exemple de maquette (mobile app)</h4>
      <img src={figma} alt="Figma logo" className="my-image" />
</div>




    </section>
  )
}

export default Services;


