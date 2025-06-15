import "./Services.scss";
import figma from "../../../assets/images/ffigma4.png";
import { svgLogoList } from "../../../components/SvgLogoList";

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
        <div className="service-inter-container">

          <div className="service creation">
            <div className="service-logo-container">
              {svgLogoList.pencil} 
            </div>
            <div className="service-body">
              <h4>Maquettes & Prototypage</h4>
              <p>✔ Conception d’interfaces (mobile & desktop)</p>
              <p>✔ Wireframes & prototypes interactifs (Figma)</p>
              <p>✔ Itérations visuelles avant dev</p>
            </div>
          </div>

          <div className="service creation">
            <div className="service-logo-container">
             {svgLogoList.monitor} 
            </div>
            <div className="service-body">
              <h4>Front-End</h4>
              <p>✔ Interfaces responsives et animées</p>
              <p>✔ Accessibilité, performance, UX</p>
              <p>✔ Frameworks modernes</p>
            </div>
          </div>

          <div className="service creation">
            <div className="service-logo-container">
              {svgLogoList.database} 
            </div>
            <div className="service-body">
              <h4>Back-End</h4>
              <p>✔ APIs REST & logique métier</p>
              <p>✔ Gestion des utilisateurs & rôles</p>
              <p>✔ Base de données (PostgreSQL, migrations)</p>
            </div>
          </div>

          <div className="service creation">
            <div className="service-logo-container">
              {svgLogoList.google}
            </div>
            <div className="service-body">
              <h4>Connexions & Services</h4>
              <p>✔ Intégration API (Stripe, Google, etc.)</p>
              <p>✔ Services tiers (cartes, météo, mail, calendrier, paiement)</p>
            </div>
          </div>

          <div className="service creation">
            <div className="service-logo-container">
              {svgLogoList.cloud} 
            </div>
            <div className="service-body">
              <h4>Déploiement & Hosting</h4>
              <p>✔ CI/CD (déploiement continu)</p>
              <p>✔ Hébergement (Heroku, VPS, nom de domaine)</p>
            </div>
          </div>

          <div className="service creation">
            <div className="service-logo-container">
      {svgLogoList.stats}
            </div>
            <div className="service-body">
              <h4>SEO & Suivi</h4>
              <p>✔ Référencement (SEO, sitemap, indexation)</p>
              <p>✔ Google Analytics, outils de tracking</p>
            </div>
          </div>

        </div>
      </div>

      <div className="services-exemples">
        <h4>Exemple de maquette (mobile app)</h4>
        <img src={figma} alt="Figma logo" className="my-image" />
      </div>
    </section>
  );
};

export default Services;
