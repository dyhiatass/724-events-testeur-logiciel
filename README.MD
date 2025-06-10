# Projet Tests Logiciels - 724-events-testeur-logiciel

## Description

Ce projet a pour but de réaliser des tests automatisés sur une application web événementielle.  
Il inclut des tests frontend avec Cypress et des tests backend (API) pour garantir la qualité et la fiabilité des fonctionnalités.

---

## Prérequis

- [Git](https://git-scm.com/) installé sur votre machine  
- Un compte GitHub
- [GitHub Desktop](https://desktop.github.com/)  
- [Docker](https://www.docker.com/) installé et lancé  
- [Node.js](https://nodejs.org/) et npm installés  
- [Visual Studio Code](https://code.visualstudio.com/) recommandé  
- Cypress (sera installé via npm)

---
## Installation et lancement du projet

### 1. Cloner le dépôt GitHub officiel

```git clone https://github.com/OpenClassrooms-Student-Center/724-events-testeur-logiciel.git```
### ➤ avec GitHub Desktop :
- Ouvrir GitHub Desktop

- Cliquer sur File > Clone repository

- Coller l’URL du projet :
https://github.com/OpenClassrooms-Student-Center/724-events-testeur-logiciel.git

- Sélectionner un dossier local pour cloner le projet

### 2. Créer un dossier local et un dépôt GitHub personnel

### 3. Ouvrir le projet avec Visual Studio Code
```code .```

### 4. Lancer le projet avec Docker
```docker-compose up -d```

## Accès au Projet
- Frontend disponible sur : http://localhost:3000

- Documentation API Swagger : http://localhost:8080/api-docs

## Tests automatisés avec Cypress

### 1- Installation
```npm install cypress --save-dev```
### 2- Lancer les tests Cypress
Interface graphique :
```npx cypress open```
Ligne de commande
```npx cypress run```

## Dossiers de tests
### Frontend – Exemples de fichiers :
Exemples de fichiers de tests :
- eventListFilter.cy.js
- form-inscription-submit.cy.js
- form-contact-submit.cy.js
- menuNavigation.cy.js
- homepage.cy.js
### Backend (API) – Exemples de fichiers :
- events-api.cy.js
- event-details-api.cy.js

## Rapport des Tests Cypress 
## Front
| Fichier de test                 | Statut     |
| ------------------------------- | ---------- |
| `eventListFilter.cy.js`         | ❌ Échec    |
| `form-inscription-submit.cy.js` | ❌ Échec    |
| `form-contact-submit.cy.js`     | ❌ Échec    |
| `menuNavigation.cy.js`          | ⚠️ Partiel |
| `homepage.cy.js`                | ✅ Réussi   |

## Backend (API)
| Fichier de test           | Statut   |
| ------------------------- | -------- |
| `event-details-api.cy.js` | ✅ Réussi |
| `events-api.cy.js`        | ✅ Réussi |

## Synthèse
- Les tests Backend sont tous passés avec succès, indiquant que l’API fonctionne correctement.

- Les tests Frontend ont révélé plusieurs anomalies, notamment :

- Échecs des tests de soumission de formulaires (form-inscription et form-contact)

- Échec du test de filtrage des événements

- Test partiellement réussi pour la navigation du menu

- Seul le test de la page d'accueil a été entièrement réussi côté Frontend.

