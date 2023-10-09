# Tour des héros - Angular Universal

## Introduction

![SSR Schema Representation](Server-Side-Rendering-Flowchart.jpg)

Angular Universal : Server Side Rendering, Rendu des application web angular cotée serveur.
Intégration du SSR à l'application Tour des Héros réalisée antérieurement.

Le Chargement initial des applications web utilisant des Framworks JavaScript sont en général très long. En effet le navigateur doit télécharger au près du serveur tout le code javascript liées aux modules nécessaires fonctionnement de l'application. Surtout dans le cas d'une SPA, une application qui est composées de beaucoup de pages et de fonctionnalitées, obligera l'utilisateur à télécharger tous ces éléments au chargement initiale. Une fois le chargement effectuée l'utilisateur n'aura plus à télécharger les assets de l'application voir regénérer son arborescence. La navigation paraîtra plus fluide.

Qu'est-ce que le SSR ?
Le SSR est une technique de rendu qui consiste à générer la page HTML au niveau du serveur lors du premier rendu de l'application sur le navigateur puis de renvoyer le reste du contenu notamment le JavaScript afin d'hydrater les composants déjà générer pour rajouter l'intéractivité mais aussi accéder au reste des fonctionnalités de l'application. Le rendu initial de l'application ce fait plus simplement puisque le navigateur ne charge qu'une page HTML.
Elle fait opposition à la technique de rendu CSR qui consiste à renvoyer tout les assets dont le navigateur aura besoin afin de générer l'affichagede l'application sur le navigateur du client dès son premier rendu. Elle permet d'améliorer référencement des pages web, puisque certains bots responsables de l'indexation des sites web ne prennent pas en charge le JavaScript.

## Guide

### Comment mettre en place le SSR ?

Activer le SSR sur angular

    ng add @nguniversal/express-engine

Modifiée le fichier app.module.ts avec le module nécessaire à l'hydratation des composants du DOM générer par le serveur

    import {provideClientHydration} from '@angular/platform-browser';
    // ...

    @NgModule({
      // ...
      providers: [ provideClientHydration() ],  // add this line
      bootstrap: [ AppComponent ]
    })
    export class AppModule {
      // ...
    }

Démarrer le rendu de l'application avec Angular Universal

    npm run dev:ssr

## Tester

### Docker Build

Cloner le dépot
Build l'application avec Docker

    docker build -t [docker-name] .
    docker run -p 4000:4000 [docker-name]

Accéder à [http://localhost:4000](http://localhost:4000)

---

### Docker Registry

Lancer l'image container de l'application sur le Docker Hub

    docker run -p 4000:4000 kerny971/tof-ssr

Accéder à [http://localhost:4000](http://localhost:4000)

## Sources

[Le guide complet de SSR et CSR pour débutants | React NextJS](https://www.youtube.com/watch?v=KHRwgK2dnFc) par __Melvynx__
[Server-side rendering (SSR) with Angular Universal](https://angular.io/guide/universal) par __Angular Developer Guides__
[A Closer Look at Client-Side & Server-Side Rendering](https://www.growth-rocket.com/blog/a-closer-look-at-client-side-server-side-rendering) par __Fiona Gurtiza__
