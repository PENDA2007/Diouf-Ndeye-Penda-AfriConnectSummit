🌍 Site Web — Événement Tech Afrique

📌 Présentation

Ce projet est un site web vitrine responsive conçu pour présenter un événement technologique organisé en Afrique.

Le site permet aux visiteurs de découvrir l’événement, consulter le programme, découvrir les différents intervenants et s’inscrire ou contacter l’organisation.

Le projet est réalisé uniquement avec des technologies web natives :

* HTML5
* CSS3
* JavaScript Vanilla

Aucun framework ou bibliothèque JavaScript n’est nécessaire.

⸻

🚀 Fonctionnalités

📱 Menu responsive

Le site dispose d’un menu de navigation adapté aux différents écrans.

Sur mobile, la navigation est accessible grâce à un menu burger.

🌙 Mode sombre / clair

Un bouton permet de basculer entre :

* ☀️ Mode clair
* 🌙 Mode sombre

Le choix de l’utilisateur est sauvegardé grâce à localStorage.

Ainsi, le thème sélectionné est conservé lors des prochaines visites.

🎤 Filtre des intervenants

La page des intervenants permet de filtrer les profils selon leur domaine :

* 🤖 IA / Tech
* 💼 Business
* 🎨 Design

Chaque intervenant possède une catégorie permettant au JavaScript d’effectuer automatiquement le filtrage.

📩 Formulaire de contact

La page de contact contient un formulaire permettant à l’utilisateur de saisir ses informations.

Une validation JavaScript simple vérifie les champs avant l’envoi.

⏳ Compte à rebours

Un compte à rebours affiche le temps restant avant le début de l’événement.

La date de l’événement peut être facilement modifiée dans le fichier JavaScript.

⬆️ Bouton Retour en haut

Un bouton Retour en haut permet à l’utilisateur de revenir rapidement au début de la page lorsqu’il fait défiler le contenu.

⸻

📁 Structure du projet

site-evenement-tech-afrique/
│
├── index.html
├── intervenants.html
├── programme.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── core.js
│   └── pages.js
│
└── img/
    ├── logo.png
    ├── hero.jpg
    └── speakers/
        ├── speaker1.jpg
        ├── speaker2.jpg
        ├── speaker3.jpg
        └── speaker4.jpg

📄 Description des fichiers

Fichier / Dossier	Description
index.html	Page d’accueil de l’événement
intervenants.html	Présentation et filtrage des intervenants
programme.html	Programme de l’événement
contact.html	Formulaire de contact / inscription
css/style.css	Styles et mise en page du site
js/core.js	Fonctionnalités communes : menu, thème et scroll
js/pages.js	Fonctionnalités des pages : filtre, formulaire et compteur
img/	Images, logos et photos des intervenants

⸻

🛠️ 
Utilisé pour :

* la mise en page ;
* le responsive design ;
* Flexbox ;
* CSS Grid ;
* les variables CSS ;
* les animations ;
* les transitions ;
* le mode sombre / clair.

JavaScript Vanilla

Utilisé pour les fonctionnalités interactives :

* menu burger ;
* changement de thème ;
* localStorage ;
* filtre des intervenants ;
* validation du formulaire ;
* compte à rebours ;
* bouton retour en haut.

Frameworks

Aucun framework utilisé.

Le projet est réalisé en HTML, CSS et JavaScript Vanilla.

⸻

📝 
⸻

📱 Responsive Design

Le site est conçu pour fonctionner sur différents types d’appareils :

* 📱 Smartphones
* 📲 Tablettes
* 💻 Ordinateurs portables
* 🖥️ Ordinateurs de bureau

La mise en page s’adapte automatiquement à la taille de l’écran grâce au CSS responsive.

⸻

🎨 Interface utilisateur

Le design du site a été pensé pour proposer une expérience :

* moderne ;
* simple ;
* responsive ;
* accessible ;
* adaptée à un événement technologique.

Les animations et transitions CSS permettent d’améliorer l’expérience utilisateur sans alourdir le site.

⸻

🔧 Organisation du JavaScript

Le JavaScript est séparé en deux fichiers afin de garder un code organisé.

core.js

Contient les fonctionnalités communes à l’ensemble du site :

├── Menu burger
├── Mode sombre / clair
├── Sauvegarde du thème
└── Retour en haut

pages.js

Contient les fonctionnalités spécifiques aux pages :

├── Filtre des intervenants
├── Validation du formulaire
└── Compte à rebours

Cette séparation permet de rendre le projet plus facile à comprendre et à maintenir.

⸻

📂 Pages du site

🏠 Accueil — index.html

La page d’accueil présente :

* le nom de l’événement ;
* une présentation ;
* le compte à rebours ;
* les principales informations ;
* des boutons d’action ;
* la navigation vers les autres pages.

📅 Programme — programme.html

Cette page présente le programme et les différentes activités prévues pendant l’événement.

🎤 Intervenants — intervenants.html

Cette page présente les différents intervenants avec un système de filtrage par catégorie.

📩 Contact — contact.html

Cette page contient le formulaire permettant au visiteur de contacter l’organisation ou de s’inscrire.

⸻
⸻

Nom : Ndeye penda diouf
Formation : L1 IAGE
Projet : Site Web Événement Tech Afrique
Année : 2026

⸻

📄 Licence

Ce projet est distribué sous licence MIT.

Vous êtes libre d’utiliser, modifier et distribuer le projet conformément aux conditions de cette licence.

⸻

⭐ Objectif du projet

L’objectif de ce projet est de mettre en pratique les connaissances acquises en :

* développement web ;
* HTML5 ;
* CSS3 ;
* responsive design ;
* JavaScript ;
* manipulation du DOM ;
* gestion des événements ;
* localStorage ;
* Git et GitHub.

Le projet constitue également une base pour la création de sites web modernes destinés à des événements technologiques en Afrique.