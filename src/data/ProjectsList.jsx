import Clonebook from "../assets/images/Clonebook.png"
import register from "../assets/images/register.png"
import userProfile from "../assets/images/userProfile.png"
import firstConnection from "../assets/images/firstConnection.png"
import createPost from "../assets/images/createPost.png"
import suggestions from "../assets/images/suggestions.png"
import portofoliov1 from "../assets/images/portofoliov1.png"
import HabitsTrackerHome from "../assets/images/HabitsTrackerHome.png"
import HabitsTrackerCycle from "../assets/images/HabitsTrackerCycle.png"
import HabitsTrackerCheckpoint from "../assets/images/HabitsTrackerCheckpoint.png"
import HabitsTrackerStats from "../assets/images/HabitsTrackerStats.png"
import HabitsTrackerAuth from "../assets/images/HabitsTrackerAuth.png"
import LearnroomHome from "../assets/images/LearnroomHome.png"
import LearnroomAuth from "../assets/images/LearnroomAuth.png"
import LearnroomJoin from "../assets/images/LearnroomJoin.png"
import LearnroomTeam from "../assets/images/LearnroomTeam.png"
import LearnroomProfile from "../assets/images/LearnroomProfile.png"
import portofoliov1API from "../assets/images/portofoliov1API.png"

import blogPerf from "../assets/images/blog/blogPerf.png"
import blogDessins from "../assets/images/blog/blogDessins3.png"
import blogDessins2 from "../assets/images/blog/blogDessins2.png"
import blogIndex from "../assets/images/blog/blogIndex.png"
import blogIndex3 from "../assets/images/blog/blogIndex3.png"
import blogLogin from "../assets/images/blog/blogLogin.png"
import blogNewsletter1 from "../assets/images/blog/blogNewsletter1.png"
import blogNewsletter2 from "../assets/images/blog/blogNewsletter2.png"
import blogNewsletter3 from "../assets/images/blog/blogNewsletter3.png"

export const ProjectsList = [
  
  {
    title: "Réseau social Front/Back",
    ref: "clonebook",
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: Clonebook,
    shortDescription: "Un clone de Facebook, avec quelques fonctionnalités complexes.",
    longDescription: "J'ai copié plusieurs fonctionnalité de Facebook, ainsi que son interface. Le but de ce projet était de pratiquer sur React.js en utilisant Redux, et en générant beaucoup de data. Cela m'a aussi permis de recopier et de comprendre un design qui a fait ses preuves. J'ai aussi pu travailler sur des requêtes plus complexes en terme de base de données relationnelles, telles que les suggestions d'amis.",
    tags: ["React.Js", "Rails API", "JavaScript", "Redux-toolkit", "PostgreSQL", "AWS"],
    features: [
      {
        title: "1 - Inscription",
        screenshot: register,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "2 - Première connexion",
        screenshot: firstConnection,
        description: `Vous recevrez automatiquement x3 invitations de la part de faux utilisateurs, que vous pourrez accepter ou décliner.
        `
      },
      {
        title: "3 - Profil utilisateur",
        screenshot: userProfile,
        description: `Voilà à quoi ressemble le profil rempli, d'un utilisateur.
        `
      },
      {
        title: "4 - Créer du contenu",
        screenshot: createPost,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "5 - Suggestions",
        screenshot: suggestions,
        description: `Vous pourrez aussi avoir accès à une liste de suggestions en fonction du nombres d'amis en communs.
        `
      },
    ]
  },
  
  {
    title: "Habits Tracker",
    ref: "habits-tracker",
    link: "https://habits-tracker-plus.herokuapp.com/",
    code: "https://github.com/HugoCalmels/Rails_Project_Habits_Tracker",
    image: HabitsTrackerHome,
    shortDescription: "Une application pour créer des habitudes qui sont cochables et seront scannées et enregistrées selon une liste de cycles ( jour / semaine / mois ).",
    longDescription: `Ce projet a été mon premier challenge individuel. C'est une application qui permet de créer des "habitudes" avec un cycle choisi et un nombre de checkpoints. Chaque "habitude" sous un cycle ( quotidien, hebdomadaire, mensuel) est réinitialisée selon ce même cycle. Donc par exemple pour une "habitude" hebdomadaire, elle sera réinitialisée tous les jours. Aussi à chaque réinitialisation les résultats sont sauvegardés et affichés sous forme de calendrier. `,
    tags: ["Ruby on Rails", "AJAX", "Heroku scheduler", "JWT-tokens", "PostgreSQL"],
    features: [
      {
        title: "1 - Inscription",
        screenshot: HabitsTrackerAuth,
        description: `Pour profiter pleinement de l'application, l'utilisateur devra créer un compte.
        `
      },
      {
        title: "2 - Choix du cycle",
        screenshot: HabitsTrackerCycle,
        description: `Chaque habitude sera sauvegardée sous un cycle.
        `
      },
      {
        title: "3 - Vue du panel utilisateur",
        screenshot: HabitsTrackerCheckpoint,
        description: `Voici à quoi ressemble le panel utilisateur, et le systeme de cochage.
        `
      },
      {
        title: "4 - Vue des statistiques d'un cycle",
        screenshot: HabitsTrackerStats,
        description: `Exemple de statistiques d'un cycle quotidien.
        `
      },
    ]
  },
  {
    title: "Learnroom",
    ref: "learnroom",
    link: "https://learnroom-v2.netlify.app/",
    code: "https://github.com/HugoCalmels/front-learn-room",
    image: LearnroomHome,
    shortDescription: `Une application pour créer et rejoindre des sessions. Elle a pour but de rassembler les utilisateurs afin qu'ils étudient ensemble sur les mêmes fuseaux horaires.`,
    longDescription: `Mon dernier projet de groupe, lors du bootcamp "The Hacking Project", réalisé avec trois autres camarades. J'ai participé à la mise en place de l'API incluant l'authentication, la récupération de mot passe, et les emails envoyés. Sur l'interface ( le Front ), j'étais en charge de la page profil, mais j'ai participé sur toutes les pages. C'est une application pour rejoindre des sessions affiliées, à ce que l'on appelle des "MOOC" ( un MOOC est un cours d'enseignement diffusé sur internet ). Nous avons aussi mis en place un système de fuseaux horaires.`,
    tags: ["React.Js", "Rails API", "JavaScript", "Redux", "JWT-tokens", "PostgreSQL"],
    features: [
      {
        title: "1 - Inscription",
        screenshot: LearnroomAuth,
        description: `Pour profiter de l'application l'utilisateur doit s'enregistrer.
        `
      },
      {
        title: "2 - Créer/rejoindre une session",
        screenshot: LearnroomJoin,
        description: `Chaque utilisateur peut créer ou rejoindre une session, selon la liste de MOOC que nous avons défini ( un MOOC est un cours d'enseignement diffusé sur internet ).
        `
      },
      {
        title: "3 - Panel équipe",
        screenshot: LearnroomTeam,
        description: `Exemple du panel d'une session avec les membres de l'équipe.
        `
      },
      {
        title: "3 - Profil utilisateur",
        screenshot: LearnroomProfile,
        description: `Ici l'utilisateur peut éditer son nom, et son fuseau horaire. Il a aussi accès à l'historique des sessions auxquelles il a participé.
        `
      },
    ]
  },
]

// projets retirés de la liste

/*
{
    title: "Blog automatisé",
    ref: "blog",
    link: "https://site-temporaire-blog-de-gaelle.netlify.app/gaelle-boucherit",
    code: "https://github.com/HugoCalmels/blog",
    image: blogDessins,
    shortDescription: "Une application pour poster des photos/vidéos qui a pour vocation d'être un site de publication d'oeuvres d'art.",
    longDescription: `Fraîchement réalisé, ceci n'est pas la version finale du site c'est une MVP ( Minimum Viable Product ). C'est une application qui a pour but d'aider le client ( ma mère ) à poster du contenu sur son site, sans n'y connaître rien en développement informatique. Il reste quelques fonctionnalités à ajouter, à revoir l'architecture front ( pages & menus ), et aussi à travailler sur le style de manière générale ( polices, couleurs, design ). Mais l'application est déjà pleinement fonctionnelle et vous pouvez aller y jeter un oeil. `,
    tags: ["React.Js", "Rails API", "JavaScript", "JWT-tokens", "PostgreSQL", "AWS"],
    features: [
      {
        title: "1.1 - Index du site",
        screenshot: blogIndex,
        description: `Voici un apperçu de la page index.
        `
      },
      {
        title: "1.2 - Index du site en admin",
        screenshot: blogIndex3,
        description: `Le principe de cette application, est de rendre un maximum de choses modulables et modifiables.
        `
      },
      {
        title: "2.1 - Partie administrateur",
        screenshot: blogLogin,
        description: `L'admin devra s'authentifier. Chaque requête de changement de contenu du site est protégée par un token généré aléatoirement et regénéré à chaque nouvelle connexion.
        `
      },
      {
        title: "2.2 - Page dessins en admin",
        screenshot: blogDessins2,
        description: `L'admin pourra publier/éditer/supprimer des catégories, et il pourra publier/éditer/supprimer des fichiers images appartenant à ces catégories. Il n'y a aucun changement de page lors des manipulations, ce qui rend l'expérience utilisateur agréable.
        `
      },
      {
        title: "2.3 - Page performances en admin",
        screenshot: blogPerf,
        description: `L'admin pourra publier/éditer/supprimer des catégories, et il pourra publier/éditer/supprimer des fichiers vidéos appartenant à ces catégories, ainsi qu'un lien vers un site existant.
        `
      },
      {
        title: "3.1 - Newsletter",
        screenshot: blogNewsletter1,
        description: `Chaque utilisateur a la possiblité de s'abonner à la newsletter du site. Il a aussi la possibilité de se désabonner avec un lien présent dans chaque mail de newsletter.
        `
      },
      {
        title: "3.2 - Newsletter",
        screenshot: blogNewsletter2,
        description: `Voici à quoi ressemble la base de données actuelle concernant la newsletter. Chaque adresse email recevra une newsletter envoyée depuis le site.
        `
      },
      {
        title: "3.3 - Newsletter",
        screenshot: blogNewsletter3,
        description: `L'admin devra créer son template sur un site tiers, et copier le code HTML du template dans le champ prévu à cet effet. Une prévisualisation est présente pour voir à quoi ressemblera l'email.
        `
      },
    ]
  },

  {
    title: "Portofolio v1",
    ref: "portofolio-v1",
    link: "https://portofolio-hugo-calmels.netlify.app/",
    code: "https://github.com/HugoCalmels/JS_Portofolio",
    image: portofoliov1,
    shortDescription: "Un portofolio que j'ai jugé trop peu professionel au niveau du design.",
    longDescription: `Réalisé en avril 2022, c'est mon ancien portofolio. Depuis j'ai relevé mon niveau en design, en apportant une touche plus professionnelle. En plus du design, mon nouveau portofolio est plus simple, plus performant, et plus complet que l'ancien. `,
    tags: ["JavaScript", "Google API"],
    features: [
      {
        title: "Google API",
        screenshot: portofoliov1API,
        description: `Capacité à utiliser les API de Google.
        `
      },
    ]
  },

*/