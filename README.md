# Mini-Projet Gestion des Étudiants

Ce mini-projet a été développé dans le cadre d'un test. Il s'agit d'une application simple qui propose les fonctionnalités suivantes :

- Ajouter un étudiant
- Liste des étudiants
- Supprimer un étudiant
- Trier les étudiants (par ID, Nom, Âge, Note)
- Afficher les étudiants admis et non admis
- Calcul simple de l'âge

## Technologies Utilisées

- [JSON Server](https://github.com/typicode/json-server) pour la gestion de la base de données
- Programmation Orientée Objet (POO)
- Fonctions Asynchrones (Async Functions)
- Template Literals pour la création de templates dynamiques

## Prérequis

Avant de commencer le projet, assurez-vous d'avoir installé `json-server`. Vous pouvez l'installer en exécutant la commande suivante :

```bash
npm install -g --save json-server
```

Ensuite, lancez le serveur en exécutant la commande :

```bash
json-server --watch student.json
```

Assurez-vous de lancer le serveur `json-server` en ligne de commande pour éviter tout problème éventuel avec PowerShell ou tout autre terminal.

## Structure du Projet

Le projet est construit en utilisant les technologies suivantes :

- **Frontend** :
  - HTML
  - CSS
  - Bootstrap
  - Ecmascript
  - Javascript

- **Backend** :
  - JSON Server (Côté Serveur)

## Comment Démarrer

1. Clonez le repository :

```bash
git clone https://github.com/AbdelhamidSmiri/ecmascript_mini_prj.git
cd ecmascript_mini_prj
```

2. Installez les dépendances :

```bash
# Installe les dépendances du projet
npm install
```

4. Ouvrez votre navigateur et accédez à [http://127.0.0.1:3000/](http://127.0.0.1:3000/) pour voir l'application.

## Remarque

N'oubliez pas de modifier le fichier `student.json` pour ajouter vos propres données d'étudiants.
