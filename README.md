﻿# Answer
---
# Sommaire

- Présentation et contexte
- Cahier des charges
- Livrables et notation

# Présentation et contexte

## Présentation du projet - Application web de communication

### Contexte

Dans le cadre d’un challenge technique de deux jours, les étudiants sont invités à concevoir et développer une application web de quiz en utilisant Node.js avec Express. Ce projet a pour objectif de simuler un environnement de travail réel, où les étudiants devront:

- Collaborer en binôme pour la réalisation du projet.
- Gérer leurs versions de code de manière professionnelle via Git.
- Respecter des délais serrés pour livrer les différentes phases du développement.
- L’accent est mis sur la collaboration, la gestion du temps et l’application des bonnes pratiques
de développement logiciel.

# Cahier des charges

## 1- Description du projet

L’objectif de ce projet est de développer une application web de quizz en utilisant Node.js avec Express suivant une architecture microservice (1 api).
L’application dans sa version finale “3è itération” offrira aux utilisateurs la possibilité de :

- S’inscrire et créer un compte.
- Se connecter de manière sécurisée.
- Création de quiz interactifs et personnalisés.
- Statistiques de progression des utilisateurs.
- Mode multijoueur en répondant à un quizz en concurrence avec un autre utilisateur
- Le développement sera réalisé de manière itérative, avec l’ajout progressif de fonctionnalités et d’ améliorations à chaque étape du projet.

## 2- Objectifs du projet

- Développer une application de quizz simple, rapide et sécurisée, permettant aux utilisateurs de créer et jouer à des quizz.
- Permettre l’inscription et l’authentification des utilisateurs, avec une gestion fluide des comptes (création, connexion).
- Faciliter la gestion des quizz, en offrant la possibilité de jouer à des quizz de manière efficace et intuitive.
- Assurer la sécurité et la confidentialité des données, en utilisant des protocoles sécurisés pour protéger les données et prévenir tout accès non autorisé.

## 3- Exigences techniques

- **Technologies front-end** : Vue.js avec Axios
- **Technologies back-end** : Node.js / Express, Sequelize.
- **Architecture claire** : Séparez clairement les couches de l'application en controllers/models/routes
- **Gestion des erreurs utilisateur** : Traitez les erreurs utilisateur, et les erreurs d’exécution , en utilisant des blocs try-catch et des exceptions.
- **Messages d'erreur clairs** : Fournissez des messages d'erreur clairs et compréhensibles pour l'utilisateur.
- **Versioning** : Travail en binôme et mise à jour régulière sur votre dépôt Github, et bonne pratique du versioning
- **Sécurité** : Intégrez deux sécurité minimale pour l’itération n°2 (au minimum une sécurité contre une faille connue).
- **Bonnes pratiques de codage** : Respectez les bonnes pratiques de codage, y compris les règles de nommage et le clean code.
- **Commentaires et documentation** : Commentez bien le code et fournissez des explications claires des fonctions et méthodes.
- **Base de données** : Utilisez une base de données SGBDR avec MySQL (Itération n°2).
- **Données en temps réel** : Utilisez les WebSocket pour obtenir des informations en temps réel (Itération n°3)

## 4- Itérations

### Itération 1 (MVP)

**Objectif principal :**
Permettre aux utilisateurs d'accéder rapidement à un quizz déjà existant et d’y jouer en renseignant un nom d’utilisateur temporaire en utilisant seulement un front-end.

### User Stories et Critères d’acceptation

**1 - User Story - Saisir un pseudonyme pour accéder aux quizz:**

- En tant qu’utilisateur, je souhaite renseigner un pseudonyme unique pour accéder aux quizz.

Critères d’acceptation:

- L’utilisateur arrive sur une page d’accueil avec un champ pour entrer un pseudonyme.
- Si le champ pseudonyme est vide, un message d’erreur est affiché pour demander de le renseigner
- Une fois le pseudonyme validé, l’utilisateur est redirigé vers la liste des quizz existant
- Le pseudonyme est affiché sur la page de la liste des quizz avec un message d’accueil

**2 - User Story - Jouer à un quizz**

- En tant qu’utilisateur, je souhaite pouvoir jouer à un quizz et avoir le score du quizz

Critères d’acceptation:

- L’utilisateur peut voir une interface de liste de quizz dès qu’il a entré son pseudonyme
- L’utilisateur peut cliquer sur un quizz pour le débuter
- L’utilisateur accède à une suite de QCM avec quatre choix possible et une seule bonne réponse pour chaque question. La prochaine question doit s’afficher après avoir sélectionné une réponse
- Après avoir répondu à toutes les questions, le score doit être affiché avec le nombre de bonnes et de mauvaises réponse ainsi que le pourcentage de bonne question. L’utilisateur peut ensuite revenir sur la liste des quizz via un bouton “Retour”

**3 - User Story - Déconnexion**

- En tant qu’utilisateur, je souhaite pouvoir quitter la liste des quizz pour revenir à la page d’accueil.

Critères d’acceptation:

- L’utilisateur peut cliquer sur un bouton "Quitter".
- Après avoir cliqué, l’utilisateur est redirigé vers la page d’accueil où il peut saisir un nouveau pseudonyme.

### Focus technique pour la 1ère itération

**1 - Backend:**

- Gestion des quizz :
    - La liste des quizz, des questions et des réponses seront stockés dans un fichier data.json dans un premier temps (situé dans `client/src/assets/data.json`)

**2 - Frontend:**

- Interface simple avec une page d'accueil pour le pseudonyme et une page avec la liste des quizz et une page avec les questions.
- Mise à jour dynamique de la liste des questions (ex. via Javascript)

**3 - Validation des pseudonymes :**

- Vérifier que le pseudonyme saisi n’est pas vide

### Itération 2

### User Stories et Critères d’acceptation

**1 - User Story - Inscription avec validation stricte**

- En tant qu’utilisateur, je souhaite pouvoir m’inscrire en fournissant un nom d’utilisateur unique et un mot de passe complexe, afin de créer un compte sécurisé.

Critères d’acceptation:

- L’utilisateur peut accéder à une page d’inscription avec :
    - Un champ pour un nom d’utilisateur unique.
    - Un champ pour un mot de passe respectant une règle de complexité (regex).
- Les contraintes du mot de passe sont les suivantes :
    - Minimum 8 caractères.
    - Contient au moins une majuscule, une minuscule, un chiffre et un caractère spécial.
- Si les contraintes ne sont pas respectées, un message d’erreur s’affiche.
- Les mots de passe sont hashés (ex. avec BCrypt) et salés avant d’être stockés dans la base de données.

**2 - User Story - Connexion avec validation**

- En tant qu’utilisateur, je souhaite me connecter avec mon nom d’utilisateur et mon mot de passe pour accéder à l’application.

Critères d’acceptation:

- L’utilisateur peut accéder à une page d’inscription avec :
- L’utilisateur peut accéder à une page de connexion.
- Il doit fournir son nom d’utilisateur et son mot de passe.
- Le mot de passe est validé par comparaison avec la version hashée stockée en base de données.
- Après connexion, l’utilisateur est redirigé vers l’interface principale.
- Si le nom d’utilisateur ou le mot de passe est incorrect, un message d’erreur clair s’affiche.

**3 - User Story - Statistique de quizz réussi ou non**

- En tant qu’utilisateur, je souhaite obtenir les statistiques des quizz réussi ou échouées avec un pourcentage de victoire et un pourcentage de défaite

Critères d’acceptation:

- Une zone dédiée doit être présent avec les statistiques sur la page de la liste des quizz
- Un quizz est considéré comme réussi lorsqu’au moins 80% des réponses sélectionnés sont valides

### Focus technique pour la 2è itération

**1 - Backend:**

- Intégrer une base MySQL
- Créer une API REST
- Implémenter un système d’inscription et de connexion sécurisé
- Utiliser les données à des fins de statistiques

**2 - Frontend:**

- Créer une interface pour l’inscription et la connexion avec une validation (ex. via JavaScript).
- Ajouter un champ dynamique pour afficher des statistiques de victoire et de défaite

### Itération 3

### User Stories et Critères d’acceptation

**1 - User Story - Inviter un autre joueur sur un quizz**

- En tant qu’utilisateur, je dois pouvoir inviter un autre joueur sur un quizz avec un code d’invitation

Critères d’acceptation:

- Un utilisateur peut générer un code qui contient une suite de lettre aléatoire d’une longueur de 8 caractère
- Un code généré doit expirer 10 minutes après sa génération
- Un autre utilisateur doit pouvoir entrer le code et rejoindre le quizz
- Le code généré doit être unique

**2 - User Story - Affronter un autre joueur sur un quizz en temps réel**

- En tant qu’utilisateur, je veux pouvoir affronter un autre joueur ayant rejoint mon quizz et savoir qui est le vainqueur après avoir terminé le quizz

Critères d’acceptation:

- Les pseudonyme des deux joueurs sont affichés pendant le quizz
- Les deux joueurs doivent avoir répondu à une question avant de passer à la suivante
- Le pseudonyme du vainqueur doit être affiché à la fin du quizz avec le nombre de bonne réponse
- Le nombre de victoire et de défaite global de chaque joueurs ont été incrémentés suivant le résultat

### Focus technique pour la 2è itération

**1 - Backend:**

- Utiliser un algorithme de génération de lettre aléatoire
- Utiliser WebSocket pour avoir les informations et les réponses des joueurs sur un quizz en temps réel.

**2 - Frontend:**

- Ajouter une barre latérale dynamique pour afficher la liste des utilisateurs connectés.
- Ajouter un champ pour générer et entrer un code d’invitation

## Lancer le projet
- Cloner le projet
- Installer un serveur MySQL puis créer une base de données "answer_db"
- Installer les packages dans client/ et dans server/
- Démarrer le client avec npm run serve
- Démarrer le serveur avec npm run start

![image](https://github.com/user-attachments/assets/70aae6df-4152-4453-9d9a-ec54ebfa63a5)
