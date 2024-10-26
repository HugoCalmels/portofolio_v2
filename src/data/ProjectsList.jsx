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
import vv1 from "../assets/images/LearnroomHome.png"
import vv2 from "../assets/images/LearnroomAuth.png"
import vv3 from "../assets/images/LearnroomJoin.png"
import vv4 from "../assets/images/LearnroomTeam.png"
import vv5 from "../assets/images/LearnroomProfile.png"
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

import fa1 from "../assets/images/fa1.png"
import fa2 from "../assets/images/fa2.png"
import fa3 from "../assets/images/fa3.png"
import fa4 from "../assets/images/f4.png"
import test from "../assets/images/screen-test-1.png"

import fa11 from "../assets/images/app-dota/f11.png"
import fa12 from "../assets/images/app-dota/f12.png"
import fa13 from "../assets/images/app-dota/f13.png"
import fa14 from "../assets/images/app-dota/f14.png"
import fa15 from "../assets/images/app-dota/f15.png"
import fa16 from "../assets/images/app-dota/f16.png"
import fa17 from "../assets/images/app-dota/f17.png"
import fa18 from "../assets/images/app-dota/f18.png"
import fa19 from "../assets/images/app-dota/f19.png"

import sq1 from "../assets/images/sq1.png"

import blog1 from "../assets/images/blog/saved/blogLogin.png"
import blog2 from "../assets/images/blog/saved/blogDessins2.png"
import blog3 from "../assets/images/blog/saved/blogDessins3.png"
import blog4 from "../assets/images/blog/saved/blogIndex3.png"
import blog5 from "../assets/images/blog/saved/blogNewsletter1.png"
import blog6 from "../assets/images/blog/saved/blogPerf.png"

import ha1 from "../assets/images/HabitsTrackerCheckpoint.png"
import ha2 from "../assets/images/HabitsTrackerStats.png"
import ha3 from "../assets/images/HabitsTrackerAuth.png"
import ha4 from "../assets/images/HabitsTrackerCycle.png"
import ha5 from "../assets/images/HabitsTrackerHome.png"

import cc2 from "../assets/images/cc/cc2.png"
import cc3 from "../assets/images/cc/cc3.png"
import cc4 from "../assets/images/cc/cc4.png"
import cc5 from "../assets/images/cc/cc5.png"
import cc6 from "../assets/images/cc/cc6.png"
import cc7 from "../assets/images/cc/cc7.png"
import cc8 from "../assets/images/cc/cc8.png"
import cc9 from "../assets/images/cc/cc9.png"
import cc10 from "../assets/images/cc/cc10.png"


import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

export const ProjectsList = [
  {
    title: "Squirrel Arena",
    titleDetails: "Squirrel Arena",
    ref: "squirrel-arena",
    isDead: false,
    link: "https://app.dota-arena.fr/home",
    code: "private",
    image: sq1,
    shortDescription: "Projet collaboratif pour mettre en relation les joueurs et équipes de DotA2, où j'ai appris Java et Angular.<br> Actuellement au stade MVP, avec des améliorations prévues pour attirer plus d’utilisateurs.<br> Technologies : Java/Angular",
    longDescription: "Projet réalisé en duo avec mon mentor, autour de l'univers du jeu vidéo DotA 2. Personnellement je débutais sur Java et Angular, et mon mentor a su m'accompagner tout au long du projet. <br> Un utiliseur s'enregistre avec son compte Steam.<br> Pour la partie Team/Scrim : <br> Un utilisateur peut créer/rejoindre une Team, créer/rejoindre un Scrim via une proposition de Scrim que l'entité adverse pourra accepter/décliner. C'est un outil pour planifier des matchs à l'avance en format UTC, donc un joueur du Brésil pourra facilement planifier un match avec un joueur de France. <br> Pour la partie Lobby Sauvage : <br> Un utilisateur peut créer/rejoindre un Lobby Sauvage en temps réel. C'est un outil basé dans l'instant présent plutot que la planification de matchs à l'avance, et dès l'instant ou le Lobby Sauvage a atteint son nombre maximal de joueurs, alors il est lancé automatiquement.<br> La partie Lobby Sauvages manquant de fonctionnalités pour se démarquer du marché, nous avons décidé de la fermer temporairement.<br> Fiche technique :<br> - Mise en place d'un système sécurisé avec Spring Security, JWT-tokens, refresh tokens, et cookies HTTP-only.<br>- Intégration des SSE (Server-Sent Events) et des Websockets pour une communication en temps réel.<br>- Authentification rapide via OpenID Steam, permettant de récupérer les données de joueur (ID DotA, MMR, avatar) à partir des API Stratz et Steam. <br>- Gestion des fuseaux horaires en UTC pour planifier des matchs internationaux. <br>- Amélioration de l'interface utilisateur pour une expérience fluide et intuitive.",
    tags: [
      {
        title: "Java",
        icon: "<FaJava />"
      },
      {
        title: "SpringBoot",
        icon: "<SiSpringboot />"
      },
      {
        title: "Angular",
        icon: "<FaAngular />"
      },
      {
        title: "Postgresql",
        icon: "<SiPostgresql />"
      },
    ],
    features: [
      {
        title: "Homepage",
        screenshot: sq1,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Connexion rapide",
        screenshot: fa11,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Teampage",
        screenshot: cc2,
        description: `Vous recevrez automatiquement x3 invitations de la part de faux utilisateurs, que vous pourrez accepter ou décliner.
        `
      },
      {
        title: "TeamDetails",
        screenshot: cc3,
        description: `Voilà à quoi ressemble le profil rempli, d'un utilisateur.
        `
      },
      {
        title: "Scrimspage",
        screenshot: cc4,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "ScrimsDetails",
        screenshot: cc10,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "ScrimsHistory",
        screenshot: cc6,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "ScrimsForm",
        screenshot: cc7,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "Lobbypage",
        screenshot: cc9,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "LobbyDetails",
        screenshot: cc8,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
    ]
  },
  {
    title: "Clonebook",
    titleDetails: "Clonebook",
    ref: "clonebook",
    isDead: false,
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: Clonebook,
    shortDescription: "Version simplifiée de Facebook, reproduite au pixel près. <br>Projet vitrine qui montre mon savoir-faire pour recréer l’interface et les fonctionnalités principales d'un réseau social, sans objectif d’acquisition d’utilisateurs.<br> Technologies : Ruby/React" ,
    longDescription: "J'ai créé un clone de Facebook seul en quelques mois. Bien qu'il soit fonctionnel avec un backend et une base de données, ce projet sert surtout à montrer mes compétences, car personne n'utiliserait un clone limité face à l'original.<br> Ce fut néamoins un très bon exercice même s'il manque d'originalité et d'utilisation concrète des utilisateurs, il m'a permis de répérer certains designs patterns utilisés par Facebook comme d'autres grandes compagnies.<br> Fiche technique :<br> - Fonctionnalités : Connexion, récupération de mot de passe par email, fil d'actualité, publication de contenu (texte et image), système de commentaires et de likes, invitations et suggestions d'amis.<br>- Utilisation de Redux pour gérer de grosse quantités de données factices.<br> - Optimisation des requêtes et résolution de problèmes en backend, notamment concernant la complexité temporelle.",
    tags: [
      {
        title: "React",
        icon: "<FaReact />"
      },
      {
        title: "Ruby",
        icon: "<diDiRuby />"
      },
      {
        title: "RubyOnRails",
        icon: "<SiRubyonrails />"
      },
      {
        title: "Postgresql",
        icon: "<SiPostgresql />"
      },
    ],
    features: [
      {
        title: "Connexion",
        screenshot: Clonebook,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Inscription",
        screenshot: register,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Homepage",
        screenshot: firstConnection,
        description: `Vous recevrez automatiquement x3 invitations de la part de faux utilisateurs, que vous pourrez accepter ou décliner.
        `
      },
      {
        title: "Profil d'un utilisateur",
        screenshot: userProfile,
        description: `Voilà à quoi ressemble le profil rempli, d'un utilisateur.
        `
      },
      {
        title: "Formulaire",
        screenshot: createPost,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "Suggestions d'amis",
        screenshot: suggestions,
        description: `Vous pourrez aussi avoir accès à une liste de suggestions en fonction du nombres d'amis en communs.
        `
      },
    ]
  },
  
  {
    title: "Habits Tracker (fermé)",
    titleDetails: "Habits Tracker",
    ref: "habits-tracker",
    isDead: true,
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: ha1,
    shortDescription: "Application de suivi des habitudes pour un usage quotidien.<br> Projet personnel où j'ai exploré des fonctionnalités avancées en backend et amélioré mes bases en développement et création d’interfaces.<br> Technologies : Ruby on Rails",
    longDescription: "Habits Tracker était mon premier projet solo d'envergure après avoir terminé un bootcamp de développement. L'idée était de créer une application qui permet aux utilisateurs de suivre et d'analyser leurs habitudes au fil du temps, selon des cycles personnalisés (quotidien, hebdomadaire, mensuel). Ce projet m'a permis d'expérimenter à la fois du côté front-end et back-end, bien que j'aie rencontré de nombreux défis techniques en raison de mon manque d'expérience à l'époque. Bien que l'application ait fonctionné et ait été utilisée un temps par moi-même, elle souffrait de bugs, d'une interface peu intuitive et d'une complexité excessive dans la gestion des données. Je travaille actuellement à une version 2, en repartant de zéro. <br> Fiche technique : <br> - Création d'habitudes personnalisées avec des cycles quotidiens, hebdomadaires et mensuels, chacun avec un nombre de checkpoints défini par l'utilisateur. <br> - Visualisation des habitudes en temps réel avec des barres de progression colorées pour représenter l'évolution de chaque habitude (vert, orange, jaune, rouge). <br> - Statistiques détaillées avec un tableau de bord inspiré de l'interface calendrier de GitHub, affichant les habitudes réalisées selon des intervalles de temps définis. <br> - Gestion de données front-end et back-end pour organiser et afficher les habitudes en fonction de cycles.",
    tags: [
      {
        title: "Ruby",
        icon: "<diDiRuby />"
      },
      {
        title: "RubyOnRails",
        icon: "<SiRubyonrails />"
      },
      {
        title: "Postgresql",
        icon: "<SiPostgresql />"
      },
    ],
    features: [
      {
        title: "Habits panel",
        screenshot: ha1,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Habits stats",
        screenshot: ha2,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Connexion",
        screenshot: ha3,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Habits cycles",
        screenshot: ha4,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Homepage",
        screenshot: ha5,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },

    
      

    ]
  },
  {
    title: "Learnroom (fermé)",
    titleDetails: "Learnroom",
    ref: "learnroom",
    isDead: true,
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: vv1,
    shortDescription: "Application pour mettre en relation des personnes souhaitant suivre un MOOC ensemble. <br>Projet collaboratif réalisé en équipe de 4 développeurs, conçu pour faciliter les échanges entre apprenants. <br> Technologies : Ruby/React" ,
    longDescription: "Learnroom était un projet de groupe réalisé en fin de bootcamp, où nous étions quatre membres à travailler ensemble. Ce projet visait à créer une plateforme pour gérer et rejoindre des sessions d'apprentissage collaboratif en ligne, en se concentrant principalement sur les MOOC (Massive Open Online Courses). En tant que membre de l'équipe, j'étais responsable du développement du backend et de la page de profil utilisateur. Bien que j'aie appris beaucoup sur la collaboration en équipe et l'utilisation de GitHub dans un environnement de groupe, j'ai rencontré des défis importants en raison de mon niveau de compétence limité à l'époque.<br> Fiche technique :  <br> - Création et gestion de sessions d'apprentissage où les utilisateurs pouvaient créer des sessions et inviter d'autres participants.<br> - Système de gestion des fuseaux horaires pour organiser les sessions en fonction des différents fuseaux horaires des utilisateurs, bien que ce système ait été moins intuitif que les solutions modernes basées sur UTC. <br> - Page de profil utilisateur permettant aux utilisateurs de gérer leur informations personnelles et de voir les sessions auxquelles ils sont inscrits. <br > - Intégration backend pour gérer les données des utilisateurs et des sessions.",
    tags: [
      {
        title: "React",
        icon: "<FaReact />"
      },
      {
        title: "Ruby",
        icon: "<diDiRuby />"
      },
      {
        title: "RubyOnRails",
        icon: "<SiRubyonrails />"
      },
      {
        title: "Postgresql",
        icon: "<SiPostgresql />"
      },
    ],
    features: [
      {
        title: "Homepage",
        screenshot:vv1,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Connexion",
        screenshot: vv2,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Sessions",
        screenshot: vv3,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Session edit",
        screenshot: vv4,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "User profile",
        screenshot: vv5,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },

    
      

    ]
  },
]
