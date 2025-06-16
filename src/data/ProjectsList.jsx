import React from 'react';
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

import imageapp from "../assets/images/imageapp.png"
import quiz from "../assets/images/quiz.png"
import pv1 from "../assets/images/pv1.png"

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

import blog from "../assets/images/blog.png"
import bg2 from "../assets/images/bg2.png"
import bg3 from "../assets/images/bg3.png"


//backend
import { FaJava } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

//frontend
import { IoLogoJavascript } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiNgrx } from "react-icons/si";
import { SiRedux } from "react-icons/si";

// outils
import { FaGitAlt } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { SiDbeaver } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { FaOpenid } from "react-icons/fa";

export const ProjectsList = [
  {
    title: "Squirrel Arena",
    titleDetails: "Squirrel Arena",
    ref: "squirrel-arena",
    isDead: false,
    link: "https://app.dota-arena.fr/home",
    code: "private",
    image: sq1,
    shortDescription: "Plateforme web DotA2 pour organiser des scrims entre équipes, avec système de ligues, tournois, et connexion via compte Steam (OpenID). Auth sécurisée avec tokens JWT & cookies HTTP-only.",
    longDescription: "<p>Squirrel Arena est une application web conçue pour simplifier l’organisation des <strong>scrims</strong> (matchs d’entraînement) dans <strong>DotA2</strong>. Aujourd’hui, ces matchs sont souvent planifiés à l’arrache sur Discord, ce qui peut poser des problèmes d’équilibrage et de logistique.</p><p>L’application propose une alternative plus structurée avec :</p><ul><li><strong>✔ Un système de matchmaking</strong> basé sur le niveau grâce à l’authentification Steam.</li><li><strong>✔ Un moteur de recherche avancé</strong> pour filtrer les matchs en fonction du niveau et des disponibilités.</li><li><strong>✔ Une gestion des équipes simplifiée</strong>, permettant aux joueurs de former et organiser leurs rosters.</li><li><strong>✔ Un mode \"Lobbies Sauvages\"</strong>, offrant une expérience plus flexible et instantanée.</li></ul><p><strong>Squirrel Arena</strong> vise donc à apporter plus de <strong>structure</strong> et d’<strong>équilibre</strong> aux scrims, tout en restant <strong>intuitif</strong> et <strong>rapide à utiliser</strong>.</p>",
    technical: "<ul><li><strong>Scrims avec matchmaking basé sur le niveau 🏅</strong><ul><li>✔ Récupération du MMR des joueurs via Steam pour des matchs équilibrés.</li><li>✔ Différents formats de scrims selon la taille des équipes.</li><li>✔ Système de tri avancé (niveau, horaire, slots disponibles, etc.).</li></ul></li><li><strong>Lobbies sauvages – Une League en construction 🏆 (WebSockets)</strong><ul><li>✔ Mode de jeu flexible, sans planification stricte.</li><li>✔ Matchmaking instantané avec actualisation en temps réel.</li><li>✔ Possibilité d’évolution vers un classement structuré.</li></ul></li><li><strong>Gestion des équipes 🤝</strong><ul><li>✔ Création et gestion d’équipes.</li><li>✔ Système de recrutement et adhésion des joueurs.</li><li>✔ Upload d’image d’équipe et affichage du profil.</li></ul></li><li><strong>Historique & suivi des performances 📊</strong><ul><li>✔ Liste des matchs passés avec résultats et statistiques.</li><li>✔ Données mises à jour en temps réel grâce au Server-Sent Events (SSE).</li></ul></li><li><strong>Sécurité & infrastructure 🔒⚙</strong><ul><li>✔ Connexion via OpenID Connect (Steam).</li><li>✔ JWT tokens & refresh tokens pour la gestion des sessions.</li><li>✔ Cookies HTTP-only pour renforcer la sécurité.</li><li>✔ WebSockets & SSE pour une expérience fluide et sans rafraîchissement manuel.</li><li>✔ Gestion des fuseaux horaires en UTC pour un matchmaking international.</li></ul></li></ul>",
    tags: [
      {
        title: "Java",
        icon: <FaJava className="data-icon"/>
      },
      {
        title: "Spring",
        icon: <SiSpring className="data-icon"/>
      },
      {
        title: "Postgres",
        icon: <SiPostgresql className="data-icon"/>
      },
      {
        title: "Angular",
        icon: <FaAngular className="data-icon"/>
      },
      {
        title: "NgRx",
        icon: <SiNgrx className="data-icon"/>
      },
      {
        title: "OpenID",
        icon: <FaOpenid className="data-icon"/>
      },
      
    ],
    features: [
      {
        title: "4.1 Acceuil",
        screenshot: sq1,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.2 Connexion via OpenID et Steam",
        screenshot: fa11,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.3 Liste des Equipes",
        screenshot: cc2,
        description: `Vous recevrez automatiquement x3 invitations de la part de faux utilisateurs, que vous pourrez accepter ou décliner.
        `
      },
      {
        title: "4.4 Détails d'une équipe",
        screenshot: cc3,
        description: `Voilà à quoi ressemble le profil rempli, d'un utilisateur.
        `
      },
      {
        title: "4.5 Liste des matchs planifiés (Scrims)",
        screenshot: cc4,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "4.6 Détails d'un match planifié",
        screenshot: cc10,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "4.7 Historique des matchs planifiés",
        screenshot: cc6,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "4.8 Formulaire de création d'un match",
        screenshot: cc7,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "4.9 Liste des matchs instannés ",
        screenshot: cc9,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "4.10 Détails d'un match instanné",
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
    shortDescription: "Clone technique de Facebook, reproduit pixel par pixel. Interface sociale, base de données, back-end et stockage cloud des images. Auth avec tokens JWT et cookies sécurisés." ,
    longDescription: "<p><strong>Clonebook</strong> est un projet personnel dans lequel j'ai recréé une version simplifiée de Facebook. L'objectif principal était de démontrer mes compétences en développement <strong>full-stack</strong>, en implémentant des fonctionnalités clés d'un réseau social, telles que l'<strong>authentification des utilisateurs</strong>, la gestion des <strong>publications</strong> et des <strong>interactions sociales</strong>.</p> <p>Pour ce projet, j'ai choisi d'utiliser <strong>Ruby on Rails</strong> pour le backend et <strong>React</strong> pour le frontend. Cela m'a permis de construire une application <strong>performante</strong> et <strong>responsive</strong>, avec une interface simple mais efficace. L'accent a été mis sur l'optimisation de l'expérience utilisateur et l'application des bonnes pratiques en développement web.</p> <p>Clonebook reflète ma capacité à intégrer des technologies modernes tout en créant une expérience cohérente pour les utilisateurs. Chaque aspect du projet, de la gestion des données à l'interface utilisateur, a été conçu pour offrir une solution complète et accessible.</p>",
    technical:"<p><strong>Authentification et gestion des utilisateurs</strong> 🔐</p><ul><li class='clonebook-li'>✔ Système d'inscription et de connexion sécurisé, avec récupération du mot de passe par email.</li><li class='clonebook-li'>✔ Gestion des profils utilisateurs, incluant la possibilité de télécharger des images de profil et de bannière.</li></ul> <p><strong>Fil d'actualité et interactions sociales</strong> 📰</p><ul><li class='clonebook-li'>✔ Création et gestion des publications, incluant du texte et des images.</li><li class='clonebook-li'>✔ Interaction avec les publications : commenter, liker, modifier ou supprimer.</li><li class='clonebook-li'>✔ Un système d'amis permettant de suivre uniquement les publications des amis de l'utilisateur.</li></ul> <p><strong>Gestion des amis et invitations</strong> 🤝</p><ul><li class='clonebook-li'>✔ Invitations d’amis, gestion des demandes d’amis, et suggestions d'amis basées sur des critères intelligents.</li><li class='clonebook-li'>✔ Interface pour accepter ou refuser les invitations d’amis.</li></ul> <p><strong>Recherche et navigation</strong> 💻</p><ul><li class='clonebook-li'>✔ Barre de recherche pour rechercher des utilisateurs, avec suggestions d'amis et historique de recherche.</li><li class='clonebook-li'>✔ Liste des amis connectés au cours des 30 dernières minutes et notifications pour chaque invitation reçue.</li></ul> <p><strong>Gestion des données avec Redux</strong> 🔄</p><ul><li class='clonebook-li'>✔ Utilisation de Redux pour la gestion d’état de l’application, permettant de manipuler efficacement de grandes quantités de données, tout en maintenant une expérience fluide.</li></ul> <p><strong>Optimisation des performances</strong> ⚡</p><ul><li class='clonebook-li'>✔ Optimisation du backend et de la gestion des requêtes pour garantir des performances élevées.</li><li class='clonebook-li'>✔ Compression des images pour minimiser les temps de chargement.</li></ul>",
    tags: [
      {
        title: "Ruby",
        icon: <DiRuby className="data-icon"/>
      },
      {
        title: "RoR",
        icon: <SiRubyonrails className="data-icon"/>
      },
      {
        title: "Postgres",
        icon: <SiPostgresql className="data-icon"/>
      },
      {
        title: "React",
        icon: <FaReact className="data-icon"/>
      },
      {
        title: "Redux",
        icon: <SiRedux className="data-icon"/>
      },
      {
        title: "AWS S3",
        icon: <FaAws className="data-icon"/>
      },
    ],
    features: [
      {
        title: "4.1 Connexion",
        screenshot: Clonebook,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.2 Inscription",
        screenshot: register,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.3 Acceuil",
        screenshot: firstConnection,
        description: `Vous recevrez automatiquement x3 invitations de la part de faux utilisateurs, que vous pourrez accepter ou décliner.
        `
      },
      {
        title: "4.4 Profil d'un utilisateur",
        screenshot: userProfile,
        description: `Voilà à quoi ressemble le profil rempli, d'un utilisateur.
        `
      },
      {
        title: "4.5 Création de contenu",
        screenshot: createPost,
        description: `Chaque utilisateur a la possibilité de créer du contenu texte, et y ajouter une image.
        `
      },
      {
        title: "4.6 Suggestions d'amis",
        screenshot: suggestions,
        description: `Vous pourrez aussi avoir accès à une liste de suggestions en fonction du nombres d'amis en communs.
        `
      },
    ]
  },
  {
    title: "Blog d'artiste",
    titleDetails: "Blog d'artiste",
    ref: "blog-artiste",
    isDead: false,
    link: "https://gaelle-boucherit.com/",
    code: "private",
    image: blog,
    shortDescription: "Site personnalisé avec galerie dynamique de 500 images réparties sur plusieurs pages et catégories. Performant, léger, sans backend, hébergé avec un coût minimal.",
    longDescription: "<p><strong>Ce projet</strong> consistait à créer une galerie d'art en ligne, affichant environ <strong>500 œuvres</strong> réparties sur plusieurs pages. L'objectif principal était d'assurer une <strong>navigation fluide</strong> et un <strong>chargement rapide des images</strong>, en optimisant leur taille et en intégrant du <strong>lazy loading</strong> pour une expérience sans latence.</p> <p><strong>J'ai mis en place des solutions techniques simples</strong> mais efficaces pour garantir une gestion optimale des images, permettant ainsi au site de rester léger et rapide, même avec une grande quantité de contenu visuel.</p> <p><strong>Ce projet m’a permis d’améliorer mes compétences</strong> en <strong>gestion des performances</strong> et en <strong>optimisation de contenu</strong>, tout en apprenant à répondre aux besoins spécifiques d'un client tout en respectant des <strong>contraintes techniques strictes</strong>.</p>",
    technical:"<ul><li><strong>Galerie d'Art et Navigation</strong> 🎨</li><li>✔ 500 images réparties sur plusieurs pages avec un système de navigation simple et rapide.</li><li>✔ <strong>Lazy loading</strong> pour charger progressivement les images et éviter des temps de chargement longs.</li><li>✔ <strong>Optimisation des images</strong> pour garantir une taille optimale et réduire les temps de chargement.</li><li><strong>Performance</strong> 🚀</li><li>✔ Le site se charge instantanément, contrairement à l'ancien site sous Joomla, qui mettait 2 à 3 secondes pour charger une page.</li><li>✔ <strong>Système de sous-navigation</strong> pour naviguer entre différentes catégories sans charger de pages intermédiaires.</li><li><strong>Conception et Design</strong> 🎨</li><li>✔ Design simple, épuré et fonctionnel pour mettre en valeur les œuvres.</li><li>✔ Le client a validé chaque étape du projet, avec une attention particulière portée à l'apparence de la galerie.</li><li><strong>Gestion de la flexibilité et des coûts</strong> 💸</li><li>✔ Le site a été conçu sans backend, ce qui réduit les coûts d'infrastructure et assure une solution abordable pour le client.</li><li>✔ <strong>Coût mensuel d'hébergement</strong> estimé entre 1 et 2 euros par mois.</li><li><strong>Responsive</strong> 📱</li><li>✔ Conception responsive pour une navigation optimale sur tous les appareils, desktop et mobile.</li></ul>",
    tags: [
      {
        title: "React",
        icon: <FaReact />
      },
      {
        title: "Vite",
        icon: <SiVite className="data-icon"/>
      },
    ],
    features: [
      {
        title: "4.1 Galerie",
        screenshot: blog,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.2 Galerie",
        screenshot: bg3,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.3 Images",
        screenshot: bg2,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
    ]
  },
  {
    title: "Learnroom",
    titleDetails: "Learnroom",
    ref: "learnroom",
    isDead: true,
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: vv1,
    shortDescription: "Application collaborative pour connecter des apprenants démarrant ensemble, centrée sur les MOOC. Design soigné et ergonomique, projet réalisé en équipe." ,
    longDescription: "<p><strong>Learnroom</strong> est une application web permettant aux apprenants de se regrouper et de démarrer un <strong>MOOC</strong> ensemble, favorisant l'engagement et la motivation.</p> <ul> <li><strong>Sessions collaboratives</strong> 📅 - Système intuitif pour <strong>créer ou rejoindre</strong> des sessions d’apprentissage en groupe.</li> <li><strong>Gestion des utilisateurs</strong> 👤 - Profils personnalisés, inscription et connexion sécurisées.</li> <li><strong>Coordination simplifiée</strong> ⏳ - Prise en compte des fuseaux horaires pour faciliter l’organisation entre participants.</li> </ul> <p>Ce projet a été une excellente opportunité pour travailler en équipe avec 4 autres développeurs en fin de formation. Bien que mon niveau n'était pas celui que j'ai aujourd'hui, cette expérience m'a permis de développer mes compétences techniques et collaboratives, tout en structurant une application autour de l’apprentissage collectif.</p>",
    technical:"<ul> <li><strong>Sessions d’apprentissage en groupe</strong> 📚</li> <li>✔ Création et gestion de sessions pour suivre un <strong>MOOC</strong> à plusieurs.</li> <li>✔ Possibilité de rejoindre une session existante en fonction de sa progression.</li> <li>✔ Interface intuitive pour voir les sessions disponibles.</li> <li><strong>Gestion des utilisateurs</strong> 👤</li> <li>✔ Inscription, connexion et profils avec historique des sessions suivies.</li> <li>✔ Pages dédiées pour chaque utilisateur.</li> <li><strong>Expérience interactive et dynamique</strong> ⚡</li> <li>✔ Pages mises à jour dynamiquement pour une navigation fluide.</li> <li>✔ Interface pensée pour une utilisation intuitive.</li> <li><strong>Prise en compte des fuseaux horaires</strong> 🌍</li> <li>✔ Affichage des horaires des sessions selon le fuseau du créateur.</li> <li>✔ Gestion basique du décalage horaire.</li> </ul>",
    tags: [
      {
        title: "Ruby",
        icon: <DiRuby className="data-icon"/>
      },
      {
        title: "RoR",
        icon: <SiRubyonrails className="data-icon"/>
      },
      {
        title: "Postgres",
        icon: <SiPostgresql className="data-icon"/>
      },
      {
        title: "React",
        icon: <FaReact className="data-icon"/>
      },
    ],
    features: [
      {
        title: "4.1 Acceuil",
        screenshot:vv1,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.2 Connexion",
        screenshot: vv2,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.3 Liste des sessions",
        screenshot: vv3,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.4 Page d'une session",
        screenshot: vv4,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.5 Profil utilisateur",
        screenshot: vv5,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },

    
      

    ]
  },
  {
    title: "Habits Tracker",
    titleDetails: "Habits Tracker",
    ref: "habits-tracker",
    isDead: true,
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: ha1,
    shortDescription: "Application qui suit les habitudes et affiche un calendrier visuel simple et efficace.",
    longDescription: "<p><strong>Habits Tracker</strong> est une application web qui permet aux utilisateurs de <strong>suivre et analyser leurs habitudes</strong> selon des cycles personnalisés (<strong>quotidien, hebdomadaire, mensuel</strong>). Son interface simple et visuelle facilite le suivi avec des <strong>barres de progression</strong> et des <strong>couleurs</strong> pour représenter les progrès réalisés.</p><p>Chaque habitude peut être définie avec un <strong>cycle spécifique</strong>, et l’utilisateur valide ses actions via une <strong>case à cocher</strong>. L’application utilise un <strong>système de scheduler</strong> pour collecter automatiquement les données à chaque cycle, simplifiant ainsi le suivi et permettant une gestion fluide des habitudes.</p><p>Ce projet a été un tournant important dans mon parcours de développement. Il m’a permis de surmonter des défis techniques et d’acquérir une expérience complète dans la création d’une application, en travaillant à la fois sur le <strong>front-end</strong> et le <strong>back-end</strong>, tout en apprenant à structurer des données complexes et à répondre aux besoins réels des utilisateurs.</p>",
    technical: "<ul> <li><strong>Création et gestion des habitudes</strong> 📝</li> <li>✔ Système pour créer et gérer des habitudes avec des cycles quotidiens, hebdomadaires et mensuels.</li> <li><strong>Suivi des habitudes</strong> 📊</li> <li>✔ Interface avec un tableau de bord interactif pour suivre les habitudes à travers des barres de progression colorées.</li> <li>✔ Collecte des données automatisée grâce à un système de validation par checkbox.</li> <li><strong>Calendrier et visualisation</strong> 📅</li> <li>✔ Affichage des habitudes réalisées sur un calendrier visuel avec des couleurs pour suivre les progrès.</li>  <li>✔ Notifications pour rappeler et guider les utilisateurs dans la gestion de leurs habitudes.</li> </ul>",
    tags: [
      {
        title: "Ruby",
        icon: <DiRuby className="data-icon"/>
      },
      {
        title: "RoR",
        icon: <SiRubyonrails className="data-icon"/>
      },
      {
        title: "Postgres",
        icon: <SiPostgresql className="data-icon"/>
      },
      {
        title: "JavaScript",
        icon: <IoLogoJavascript className="data-icon"/>
      },
    ],
    features: [
      {
        title: "4.1 Accceuil",
        screenshot: ha5,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.2 Connexion",
        screenshot: ha3,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.3 Système d'habitudes par checkboxs",
        screenshot: ha1,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.4 Cycles disponibles",
        screenshot: ha4,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
      {
        title: "4.5 Calendrier et statistiques",
        screenshot: ha2,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
    ]
  },
  {
    title: "Portfolio v1",
    titleDetails: "Portfolio v1",
    ref: "portfolio-v1",
    isDead: false,
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: pv1,
    shortDescription: "Premier portfolio qui illustre mes progrès et ma montée en compétences depuis 2022.",
    longDescription: "<p><strong>Mon premier portfolio</strong>, développé en <strong>JavaScript Vanilla</strong>, a été créé lorsque je codais depuis à peine un an. À l’époque, le projet était assez basique et simple, mais il a marqué le début de mon apprentissage en développement.</p><p>Depuis, le portfolio a évolué, passant de la <strong>V1</strong> en JavaScript à la <strong>V2</strong> en <strong>React</strong>, et aujourd’hui il est à la <strong>V5</strong>, avec des améliorations continues sur la performance, le design et la structure.</p><p>Ce projet reflète clairement mon évolution technique au fil des années, depuis mes débuts jusqu’à aujourd’hui, après 4 ans de développement. Il m’a permis de mieux comprendre le <strong>design responsive</strong>, les <strong>animations CSS</strong> et d’affiner mes compétences en front-end.</p>",
    technical: "<ul> <li><strong>Développement front-end</strong> 💻</li> <li>✔ Application construite en <strong>JavaScript Vanilla</strong>, avec une gestion basique du DOM et des animations simples.</li> <li><strong>Interface simple</strong> 🎨</li> <li>✔ Design simple et épuré, mais avec un manque de finesse dans l'UI/UX par rapport aux versions ultérieures.</li> <li><strong>Animations CSS</strong> 🎞️</li> <li>✔ Quelques animations de base pour ajouter un peu de dynamisme, mais pas encore parfaitement maîtrisées.</li></ul>",
    tags: [
      {
        title: "JavaScript",
        icon: <IoLogoJavascript className="data-icon"/>
      },
    ],
    features: [
      {
        title: "Acceuil",
        screenshot: pv1,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
    ]
  },
  {
    title: "Images App",
    titleDetails: "Images App",
    ref: "images-app",
    isDead: false,
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: imageapp,
    shortDescription: "Première app React simple, connectée à une API publique pour afficher des images.",
    longDescription: "<p><strong>Images App</strong> est ma première application React, développée pour interagir avec une API publique d'images. Elle permet de rechercher et afficher des images en temps réel.</p><p>Ce projet m'a permis de découvrir les bases de React, notamment les composants, les états, et les appels API pour récupérer des données de manière asynchrone.</p>",
    technical: "<ul> <li><strong>API</strong> 🌐</li> <li>✔ Récupération des images via <strong>fetch</strong>.</li> <li><strong>UI simple</strong> 🎨</li> <li>✔ Affichage des résultats avec pagination et gestion des états de chargement.</li></ul>",
       tags: [
      {
        title: "React",
        icon: <FaReact className="data-icon"/>
      },
    ],
    features: [
      {
        title: "Acceuil",
        screenshot: imageapp,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
    ]
  },
  {
    title: "Quiz App",
    titleDetails: "Quiz App",
    ref: "quiz-app",
    isDead: false,
    link: "https://clonebook-super.netlify.app/",
    code: "https://github.com/HugoCalmels/react-social-network-redux",
    image: quiz,
    shortDescription: "Première app JavaScript Vanilla, utilisant une API publique pour un quiz interactif.",
    longDescription: "<p><strong>Quiz App</strong> est ma première application <strong>JavaScript Vanilla</strong>, développée pour interagir avec une <strong>API publique de quiz</strong>. L'application permet de répondre à des questions et d'afficher les résultats sous forme de score.</p><p>Ce projet m'a permis de mieux comprendre les manipulations du <strong>DOM</strong>, la gestion des événements et d'ajouter des animations simples pour améliorer l'expérience utilisateur.</p>",
    technical: "<ul> <li><strong>API</strong> 🌐</li> <li>✔ Récupération des questions via <strong>fetch</strong> et gestion des réponses.</li> <li><strong>Animations</strong> 🎞️</li> <li>✔ Animation simple pour dynamiser l'interface et l'interaction.</li> <li><strong>Classement</strong> 🏆</li> <li>✔ Affichage d'un classement basé sur les scores obtenus.</li></ul>",
    tags: [
      {
        title: "JavaScript",
        icon: <IoLogoJavascript className="data-icon"/>
      },
    ],
    features: [
      {
        title: "Acceuil",
        screenshot: quiz,
        description: `Chaque utilisateur a la possibilité de créer un compte, il devra confirmer son identité avec un email de confirmation.
        Il est également posssible changer son mot de passe.
        `
      },
    ]
  },
  
]
