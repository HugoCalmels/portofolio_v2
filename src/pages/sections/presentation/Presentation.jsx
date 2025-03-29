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
        <strong>Bonjour ! Moi, c'est Hugo.</strong><br/>
        J’ai 37 ans, je viens de Toulouse, et je me reconvertis dans le développement web.<br/>
        <strong>Je cherche activement ma première expérience en entreprise</strong>, peu importe le type de contrat ou la localisation (<strong>même si j’ai une préférence pour Toulouse</strong>).
    </p>
    
    <h6>Mon parcours</h6>
<p>Je suis autodidacte et ma formation à <strong>The Hacking Project</strong> n’a été qu’un point de départ. Après, je n’ai pas trouvé d’emploi immédiatement, mais j’ai persévéré en continuant à apprendre et à me perfectionner par moi-même.</p>

<p>J’ai consacré environ <strong>2 ans</strong> à :</p>
<ul>
    <li><strong>Explorer Ruby et React</strong>, en développant des projets concrets et en approfondissant mes compétences avec ces technologies.</li>
    <li><strong>Lire la documentation et faire de la veille</strong>, pour rester à jour sur les bonnes pratiques.</li>
    <li><strong>Tester des algorithmes</strong> et améliorer ma logique avec des exercices techniques.</li>
    <li><strong>Déployer des services</strong> (serveurs, APIs, intégrations…) pour mettre en pratique mes acquis.</li>
    <li><strong>Reproduire des sites existants</strong> (McDonald’s, Facebook…) pour perfectionner mes compétences en <strong>Front-End</strong>.</li>
</ul>

<p>Puis, pendant <strong>1 an et demi</strong>, j’ai eu l’opportunité d’être mentoré sur <strong>Java/Spring/Angular</strong> par un développeur expérimenté. Nous avons travaillé ensemble sur un projet où j’ai appris à :</p>
<ul>
    <li><strong>Utiliser Java et Spring</strong> pour créer des Back-End robustes et des APIs performantes.</li>
    <li><strong>Développer des interfaces dynamiques</strong> avec Angular, en intégrant les bonnes pratiques de développement Front-End.</li>
    <li><strong>Appliquer la clean architecture</strong>, réaliser des <strong>code reviews</strong> et travailler sur la gestion des conflits au sein de l’équipe.</li>
</ul>

<p><strong>Aujourd’hui, je suis capable de travailler aussi bien en Front-End qu’en Back-End</strong>, et j’ai acquis une forte autonomie qui me permet d’apprendre rapidement et de m’adapter à de nouvelles technologies.</p>
    <h6>Ce que je recherche</h6>
    <p><strong>Je n’ai pas de préférence entre Back et Front</strong>, je m’adapte aux besoins du projet.
    Ce que je veux, c’est <strong>continuer à apprendre et progresser</strong>, tout en apportant de la valeur à l’entreprise qui me fera confiance.</p>
    
    <p><strong>Je suis aussi ouvert aux missions freelance</strong> : si vous avez un besoin spécifique et pensez que je peux y répondre, <strong>contactez-moi</strong> !</p>
  
    <h6>Et sinon ?</h6>
    <p>Quand je ne code pas, je suis souvent en <strong>randonnée dans les Pyrénées</strong>, à profiter de la montagne.
    Je suis aussi un grand amateur de <strong>jeux vidéo sur PC</strong>, comme beaucoup de développeurs.</p>
  
    <p><strong>Si mon profil vous intéresse, n’hésitez pas à me contacter pour échanger !</strong></p>
</div>
    </section>
    )
  }
  
  export default Presentation;
  