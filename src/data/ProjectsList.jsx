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
export const ProjectsList = [
  {
    title: "Blog automatisé",
    ref: "blog",
    link: "https://site-temporaire-blog-de-gaelle.netlify.app/",
    code: "https://github.com/HugoCalmels/blog",
    image: Clonebook,
    shortDescription: "Une application pour poster des photos/vidéos qui a pour vocation d'être un site de publication d'oeuvres d'art.",
    longDescription: "this description is actually the long description which makes it way longer for the reason it's the long desctiption",
    tags: ["React.Js", "Rails API", "JavaScript", "JWT-tokens", "PostgreSQL", "AWS"],
    features: [
      {
        screenshot: Clonebook,
        description: "no feature description yet"
      }
    ]
  },
  {
    title: "Réseau social Front/Back",
    ref: "clonebook",
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: Clonebook,
    shortDescription: "Un clone de Facebook, avec quelques fonctionnalités complexes.",
    longDescription: "J'ai copié plusieurs fonctionnalité de Facebook, ainsi que son interface. Le but de ce projet était de pratiquer sur React.js en utilisant Redux, et en générant beaucoup de data. Cela m'a aussi permis de recopier et de comprendre un design qui a fait ses preuves. Cette application est une single page application ( SPA ). J'ai également crée ma propre API pour gérer les fonctionnalités, et la base de données est en PostgreSQL. ",
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
    title: "Portofolio v1",
    ref: "portofolio-v1",
    link: "https://www.portofolio-hugo-calmels.com/",
    code: "https://github.com/HugoCalmels/JS_Portofolio",
    image: portofoliov1,
    shortDescription: "Un portofolio que j'ai jugé trop peu professionel au niveau du design.",
    longDescription: `En avril 2022 je n'avais pas copié encore beaucoup de maquettes ou de sites existants. Il est propre, certains l'ont trouvé "sympa", mais je suis capable aujourd'hui d'apporter un design beaucoup plus professionel. Chacun de mes portofolios ont été réalisés de A à Z en moins de 10 jours, de la maquette à la mise en production. Aussi mon nouveau portofolio est plus modulable que l'ancien, et j'aurais plus de facilités à le faire évoluer par raport à l'ancien.`,
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
    longDescription: `Mon dernier projet de groupe, lors du bootcamp "The Hacking Project", réalisé avec trois autres camarades. J'ai participé à la mise en place de l'API incluant l'authentication, la récupération de mot passe, et les emails envoyés. Sur l'interface ( le front ), j'étais en charge de la page profil, mais j'ai participé sur toutes les pages. C'est une application pour rejoindre des sessions affiliées, que l'on appelle des "MOOC" ( un MOOC est un cours d'enseignement diffusé sur internet ). Nous avons aussi mis en place un système de fuseaux horaires.`,
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