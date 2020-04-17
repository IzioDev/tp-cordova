# Cordova project

## Faire tourner le projet avec reload automatique :

### Prérequis :

- NodeJs v12+
- Phonegap `npm i -g phonegap`

### Lancer l'application :

`npm run serve` - lance la compilation en watchmode.

`phonegap serve` - sert les fichiers de `www` en ajoutant la couche cordova.

Aller sur `http://localhost:3000`

## Juste lancer l'application :

`cordova run [platform]` - lance l'application qui se trouve dans `www`.

Choisir la platforme (par défaut c'est sensé être android).
