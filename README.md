# Refactoriser le Code Legacy

Bienvenue dans le projet **Refactoriser le Code Legacy** ! Cet outil a été conçu pour aider les développeurs à gérer le code hérité, souvent difficile à lire et à maintenir.

## Objectif
Le but principal de ce projet est de fournir une série d'outils et de pratiques pour analyser le code existant, identifier les problèmes et proposer des solutions de refactorisation.

## Fonctionnalités
- Analyse statique du code : détecter les code smells et les problèmes de performance.
- Proposition de refactorisation automatique pour corriger les problèmes détectés.
- Outils de documentation automatique pour améliorer la compréhension du code.
- Intégration avec des outils existants comme SonarQube et ESLint.

## Installation
```bash
git clone https://github.com/votre-utilisateur/refactoriser-le-code-legacy.git
cd refactoriser-le-code-legacy
npm install
```

## Utilisation
Pour analyser un projet PHP :
```bash
node cli.js analyze --path ./votre-projet-legacy
```

Pour proposer des refactorisations :
```bash
node cli.js refactor --path ./votre-projet-legacy
```

## Contribuer
Les contributions sont les bienvenues ! Veuillez ouvrir une Pull Request ou soumettre un problème pour discuter des améliorations possibles.

## License
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.
