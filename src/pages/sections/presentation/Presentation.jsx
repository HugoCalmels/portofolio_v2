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
          Développeur Web Full-Stack spécialisé en <strong>Java/Spring</strong> et <strong>Angular/React</strong>, je recherche une première expérience où je pourrai mettre en pratique mes compétences et continuer à progresser.
        </p>

        <h6>Mon parcours</h6>
        <p>
          Après une <strong>formation intensive certifiante</strong>, j’ai poursuivi mon apprentissage en autodidacte pendant <strong>2 ans</strong>, en travaillant sur des projets concrets et en approfondissant mes connaissances.
        </p>
        <p>
          J’ai ensuite eu la chance d’être <strong>mentoré pendant 1 an</strong> par un développeur expérimenté sur un projet en <strong>Java/Spring/Angular</strong>. Grâce à ce mentorat, j’ai acquis une véritable méthodologie de travail : 
        </p>
        <ul>
          <li><strong>Code Review</strong> et bonnes pratiques de développement</li><br/>
          <li><strong>Gestion des conflits Git</strong> et travail collaboratif</li><br/>
          <li><strong>Architecture logicielle</strong> (clean architecture, REST APIs…)</li><br/>
          <li><strong>Développement Full-Stack</strong> (Java/Spring côté back, Angular/React côté front)</li>
        </ul>
        <p>
          Aujourd’hui, je suis capable de <strong>travailler aussi bien en Back qu’en Front</strong>, et j’ai une forte autonomie qui me permet de m’adapter rapidement à de nouveaux environnements.
        </p>

        <h6>Ce que je recherche</h6>
        <p>
          <strong>Peu importe le projet, Back ou Front</strong>, je m’adapte. Mon objectif est de monter en compétences et d’apporter de la valeur à l’entreprise qui me fera confiance.
        </p>
        <p>
          Je suis aussi ouvert aux <strong>missions freelance</strong>, alors si vous avez un besoin, n’hésitez pas à me contacter !
        </p>

        <h6>En dehors du code</h6>
        <p>
          Passionné de <strong>randonnée</strong> dans les Pyrénées et amateur de <strong>jeux vidéo sur PC</strong>, je suis toujours curieux d’explorer de nouveaux défis, que ce soit en développement ou ailleurs !
        </p>

        <p><strong>Si mon profil vous intéresse, contactez-moi !</strong></p>
      </div>
    </section>
  );
};

export default Presentation;
