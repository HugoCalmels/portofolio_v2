import "./Presentation.scss";

const Presentation = (props) => {
  return (
    <section
      className="presentation-wrapper"
      id="presentation"
      ref={props.presentationWrapperElem}
    >
      <div className="presentation-main-title">
        <h2>Présentation</h2>
      </div>
      <div className="presentation-body">
      <p>
  Développeur fullstack spécialisé en <strong>Java/Spring</strong> côté back, <strong>React/Angular</strong> côté front.  
  Je conçois des applications web et mobiles, de l’interface jusqu’à la mise en ligne, incluant le déploiement sur des plateformes cloud comme Heroku ou Netlify, ou sur des serveurs VPS avec <strong>pipelines CI/CD</strong>.
</p>

<h6>Mon parcours</h6> <p><strong>Bootcamp :</strong> 6 mois intensifs pour apprendre React et Ruby on Rails. Formation complète pour poser des bases solides, front-end comme back-end.</p> <p><strong>Autodidacte :</strong> environ 2 ans à progresser sur des projets personnels et collaboratifs en Ruby et React, avec un travail régulier et sérieux.</p> <p><strong>Mentorat :</strong> 1 an accompagné par un développeur senior sur un projet Java/Spring/Angular. Cette expérience a permis de structurer ma méthode et d’intégrer les bonnes pratiques professionnelles.</p> <ul> <li><strong>Code review et bonnes pratiques de développement</strong></li><br/> <li><strong>Gestion des conflits Git et travail en équipe</strong></li><br/> <li><strong>Architecture logicielle</strong> (REST APIs, clean architecture, etc.)</li><br/> </ul>
        <h6>Pour les pros</h6>
        <p>
          Disponible pour un <strong>CDI</strong> ou un <strong>CDD</strong>. Je m’adapte aux environnements existants, et je monte vite en compétence sur les projets en place. 
          Autonome, rigoureux, et capable de livrer.
        </p>

        <h6>Pour les particuliers & petites structures</h6>
        <p>
          Vous avez besoin d’un <strong>site vitrine</strong>, d’une <strong>application web ou mobile</strong>, ou d’un <strong>outil sur-mesure</strong> ? 
          Je peux tout gérer, de l’idée jusqu’à la mise en ligne, avec un budget clair et un suivi simple.
        </p>
        <p>
          Pas besoin de jargon. On discute de votre besoin, je vous propose une solution concrète.
        </p>

        <p><strong>Contactez-moi si vous cherchez un dev sérieux et adaptable.</strong></p>
      </div>
    </section>
  );
};

export default Presentation;
