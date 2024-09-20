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

import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

export const ProjectsList = [
  {
    title: "Frogged Arena",
    titleDetails: "Frogged Arena",
    ref: "froggedarena",
    isDead: false,
    link: "https://app.dota-arena.fr/home",
    code: "private",
    image: fa1,
    shortDescription: "Un outil autour de l'univers du jeu-vidéo Steam 'DotA2' : <br>- Connexion rapide via son compte Steam <br>- Envoi et persistance de data texte et images <br>-  Récupération de data Steam du joueur via différentes API <br>- Système de création d'équipes <br>- Système de planification de matches sous format UTC <br>- Système de création de lobbies instantannés <br>- Sécurisé par jwt-token,cookie http-only, et refresh token <br>- Utilisation de SSE et Websockets <br> Technologies : Java/Angular",
    longDescription: "Projet réalisé en duo avec mon mentor, autour de l'univers du jeu vidéo DotA 2. Ce projet m'a permis de relever plusieurs défis techniques que j'ai su surmonter malgré le fait que je débutais en Java et Angular. <br>- Mise en place d'un système sécurisé avec Spring Security, JWT-tokens, refresh tokens, et cookies HTTP-only.<br>- Intégration des SSE (Server-Sent Events) et des Websockets pour une communication en temps réel.<br>- Authentification rapide via OpenID Steam, permettant de récupérer les données de joueur (ID DotA, MMR, avatar) à partir des API Stratz et Steam. <br>- Gestion des fuseaux horaires en UTC pour planifier des matchs internationaux. <br>- Amélioration de l'interface utilisateur pour une expérience fluide et intuitive. <br> Une partie du projet incluait la création automatique de lobbies via des bots. Après avoir exploré plusieurs solutions (Python, Golang), nous avons opté pour une création manuelle des lobbies, afin de garantir la fiabilité du système et une meilleure expérience utilisateur.",
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
        screenshot: fa1,
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
        screenshot: fa12,
        description: `Vous recevrez automatiquement x3 invitations de la part de faux utilisateurs, que vous pourrez accepter ou décliner.
        `
      },
      {
        title: "TeamDetails",
        screenshot: fa13,
        description: `Voilà à quoi ressemble le profil rempli, d'un utilisateur.
        `
      },
      {
        title: "Scrimspage",
        screenshot: fa14,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "ScrimsDetails",
        screenshot: fa15,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "ScrimsHistory",
        screenshot: fa16,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "ScrimsForm",
        screenshot: fa17,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "Lobbypage",
        screenshot: fa18,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "LobbyDetails",
        screenshot: fa19,
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
    shortDescription: "Un clone de Facebook incluant diverses fonctionnalités telles : <br>- Connexion/Deconnexion <br>- Récupération de mot de passe via email <br>- Envoi et persistance de data texte et images <br>- Ajout/suppression d'amis <br>- Suggestions d'amis en fonction du nombre d'amis <br>- Sécurisé par jwt-token <br> Technologies : Ruby/React" ,
    longDescription: "Ce projet a été réalisé dans le cadre d'une volonté d'approfondir mes compétences en React et Ruby on Rails. Mon objectif était de recréer l'interface et les fonctionnalités principales de Facebook afin de démontrer ma maîtrise des technologies front-end et back-end. Ce projet m'a permis de travailler sur des fonctionnalités complexes et de manipuler des données à grande échelle. <br> - Reproduction fidèle de l'interface de Facebook, au pixel près. <br> - Intégration des principales fonctionnalités utilisateur : fil d'actualité, publication de contenu, système de commentaires et de likes. <br> - Utilisation de Redux pour gérer des quantités importantes de données et améliorer les performances de l'application. <br> - Optimisation des requêtes et résolution de problématiques complexes en backend, notamment en matière de complexité algorithmique.",
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
    title: "Blog Automatisé (fermé)",
    titleDetails: "Blog Automatisé",
    ref: "blog",
    isDead: true,
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: blog5,
    shortDescription: "Blog entièrement automatisé avec fonctionnalités : <br>- Gestion complète du contenu (images, textes, vidéos) <br>- Newsletter automatisée avec envoi d'e-mails via un champ texte <br>- Système d'abonnement et gestion des utilisateurs <br>- Création et édition de sections du site (œuvres, événements, etc.) <br>- Interface admin sécurisée pour la gestion des utilisateurs et des données <br> - Sécurité par jwt-token <br>  Technologies : Ruby/React" ,
    longDescription: "Ce projet avait pour but de créer un blog totalement automatisé pour un artiste, permettant la gestion complète de contenu varié (images, textes, vidéos) sans intervention technique. Le site était structuré autour de nombreuses pages, sections, et sous-sections pour organiser une vaste collection d'œuvres d'art (1000 à 2000 dessins), performances, et événements. L'objectif principal était de permettre à l'utilisateur (l'artiste) de gérer et de mettre à jour le contenu de manière autonome, incluant la gestion de newsletters, utilisateurs, et abonnements. <br> - Gestion automatisée des œuvres d'art (images, textes, vidéos) par année et type, avec tri dynamique. <br> - Système de gestion de contenu (CMS) pour éditer la homepage et la plupart des pages du site via une interface administrateur intuitive. <br> - Newsletter automatisée : envoi d'e-mails à tous les abonnés via un simple champ texte. <br> - Système d'abonnement et gestion des utilisateurs avec des fonctionnalités comme l'inscription, connexion, et gestion des préférences. <br> - Formulaires de création et d'édition pour gérer différentes sections du site (œuvres, événements, etc.). <br> - Sécurisation et gestion des utilisateurs avec une interface admin dédiée permettant la modification de données sans intervention manuelle. <br>",
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
        title: "Newsletter",
        screenshot: blog5,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Connexion",
        screenshot: blog1,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Galerie dessins",
        screenshot: blog3,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Admin dessins",
        screenshot: blog2,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Admin homepage",
        screenshot: blog4,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "Admin performances",
        screenshot: blog6,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
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
    shortDescription: "Application de suivi des habitudes avec fonctionnalités : <br>- Connexion et persistance des données <br>- Création d'habitudes personnalisées (quotidien, hebdomadaire, mensuel) <br>- Visualisation en temps réel avec barres de progression colorées <br>- Statistiques détaillées avec tableau de bord <br> Technologies : Ruby on Rails",
    longDescription: "Habits Tracker était mon premier projet solo d'envergure après avoir terminé un bootcamp de développement. L'idée était de créer une application qui permet aux utilisateurs de suivre et d'analyser leurs habitudes au fil du temps, selon des cycles personnalisés (quotidien, hebdomadaire, mensuel). Ce projet m'a permis d'expérimenter à la fois du côté front-end et back-end, bien que j'aie rencontré de nombreux défis techniques en raison de mon manque d'expérience à l'époque. Bien que l'application ait fonctionné et ait été utilisée un temps par moi-même, elle souffrait de bugs, d'une interface peu intuitive et d'une complexité excessive dans la gestion des données. Je travaille actuellement à une version 2, en repartant de zéro. <br> - Création d'habitudes personnalisées avec des cycles quotidiens, hebdomadaires et mensuels, chacun avec un nombre de checkpoints défini par l'utilisateur. <br> - Visualisation des habitudes en temps réel avec des barres de progression colorées pour représenter l'évolution de chaque habitude (vert, orange, jaune, rouge). <br> - Statistiques détaillées avec un tableau de bord inspiré de l'interface calendrier de GitHub, affichant les habitudes réalisées selon des intervalles de temps définis. <br> - Gestion de données front-end et back-end pour organiser et afficher les habitudes en fonction de cycles.",
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
    shortDescription: "Application de gestion de sessions d'apprentissage en groupe avec fonctionnalités : <br> - Connexion et persistance des données <br>- Création et gestion de sessions d'apprentissage <br>- Système de gestion des fuseaux horaires <br>- Interface utilisateur pour rejoindre des sessions <br> - Sécurisé par jwt-token <br> Technologies : Ruby/React" ,
    longDescription: "Learnroom était un projet de groupe réalisé en fin de bootcamp, où nous étions quatre membres à travailler ensemble. Ce projet visait à créer une plateforme pour gérer et rejoindre des sessions d'apprentissage collaboratif en ligne, en se concentrant principalement sur les MOOC (Massive Open Online Courses). En tant que membre de l'équipe, j'étais responsable du développement du backend et de la page de profil utilisateur. Bien que j'aie appris beaucoup sur la collaboration en équipe et l'utilisation de GitHub dans un environnement de groupe, j'ai rencontré des défis importants en raison de mon niveau de compétence limité à l'époque. <br> - Création et gestion de sessions d'apprentissage où les utilisateurs pouvaient créer des sessions et inviter d'autres participants. <br> - Système de gestion des fuseaux horaires pour organiser les sessions en fonction des différents fuseaux horaires des utilisateurs, bien que ce système ait été moins intuitif que les solutions modernes basées sur UTC. <br> - Page de profil utilisateur permettant aux utilisateurs de gérer leur information personnelle et de voir les sessions auxquelles ils sont inscrits. <br > - Intégration backend pour gérer les données des utilisateurs et des sessions.",
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
