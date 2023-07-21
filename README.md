
# JATE Racc ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description 
Just Another Text Editor Racc 🦝 is a text editor that you can install for online or offline usage! The service worker allows you to use it offline, meanwhile the notes you take are stored in an IndexedDB(and local storage), so you can access them even if you don’t have internet connection!  

## Deployment
Heroku: [JATEracc](https://jate-racc-ac7dc3f879c0.herokuapp.com/)  
GitHub repo: [JATE-Racc-noter](https://github.com/jaychan0125/J.A.T.E-Racc-noter)

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Installation
Here we've used concurrently to run the client and server folders together, and we've also used exress, nodemon, iddb, webpack (and a host of its dependencies) to make it work like the css loader, and babble.

## Usage

If you use the deployed [heroku link](https://jate-racc-ac7dc3f879c0.herokuapp.com/) it will take you here to the starting page, where you'll see the header. 
![deployed](./Assets/jate-deploy.png)  

You can see the service worker loaded in: 
![sw](./Assets/jate-sw.png)  

You can also see the data that is saved in the IndexedDB:
![indexedDB](./Assets/jate-indexedDB.png)  

You can see the manifest for the application: 
![manifest](./Assets/jate-manifest.png)  

And you can also install it so you have the application too:
![installed](./Assets/jate-installed.png)  

## Contributors
[jaychan0125](https://github.com/jaychan0125)

## License
Licensed under the [MIT License](https://opensource.org/licenses/MIT)

