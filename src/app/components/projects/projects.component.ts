import { Component, OnInit } from '@angular/core'
import { Colaboration, Project } from 'src/app/models/projects'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public colaborations: Colaboration[] = [
    {
      company: 'Telefónica',
      description:
        'Desarrollo de librería Angular destinada a la gestión de material desde dispositivos móviles: escaneo de artículos (ngx-scanner), desarrollo de test unitarios (Jest), control de version con metodología Git-Flow y aplicación de estilos mediante preprocesador de CSS SASS y metodología BEM.',
      tags: [
        'Angular',
        'Jest',
        'Git',
        'Git-flow',
        'BEM',
        'SASS',
        'ngx-scanner',
      ],
    },
    {
      company: 'Inversis',
      description:
        'Rediseño de la UI de aplicativo web (JSP): aplicación de estilos y animaciones mediante CSS y JS, diseño de iconos (figma) y control de versiones (CVS).',
      tags: ['CSS', 'JS', 'Figma', 'CSV', 'JSP'],
    },
  ]

  public projects: Project[] = [
    {
      name: 'Rick and Morty Quiz',
      description:
        '¿Eres un experto de este famoso programa televisivo? Ponte a prueba y consigue la mejor puntuación en el ranking.',
      tech:
        ' Aplicación web mobile-first desarrollada con react aplicando hooks. Base de datos sobre firebase y test unitarios con Jest. Metodologías BEM y Git-flow.',
      url: 'https://gabrielgarci.github.io/rick-and-morty-quiz/',
      repo: 'https://github.com/gabrielgarci/rick-and-morty-quiz',
      img: './assets/img/projects/rick-and-morty-quiz.png',
      tags: [
        'react',
        'mobile first',
        'jest',
        'firebase',
        'react-hooks',
        'Git-flow',
        'BEM',
      ],
    },
    {
      name: 'NgxInterceptor',
      description:
        'Añade un interceptor de solicitudes HTTP a tu proyecto Angular con un solo paquete. Altamente configurable para poder ajustarse a las necesidades del aplicativo.',
      tech:
        'Librería desarrollada en Angular y publicada en npmjs. Gestiona las peticiones HTTP, permitiendo mostrar un modal durante el tiempo de respuesta. Confirable tanto contenido a mostrar, https a interceptar o tiempos en los que actuar.',
      url: 'https://www.npmjs.com/package/ngx-interceptor',
      repo: 'https://github.com/gabrielgarci/ngx-interceptor',
      img: './assets/img/projects/npm.png',
      tags: ['Angular', 'Libreria', 'npm', 'http-interceptor', 'Git-flow'],
    },
    {
      name: 'Canvas-snake',
      description:
        'Proyecto minimalista donde se crea de cero (código original) el clásico juego de arcade Snake. Se ha otorgado distinta interfaz dependiendo del tipo de disposito desde el que se use.',
      tech:
        'Manipulación de Canvas mediante JS plano (Vanilla JavaScript). No se ha empleado librearías gráficas ni framework de ningún tipo. Para el despliegue del aplicativo se ha rezalido el bundler mediante Webpack.',
      url: 'https://gabrielgarci.github.io/canvas-snake/',
      repo: 'https://github.com/gabrielgarci/canvas-snake',
      img: './assets/img/projects/canvas-snake.png',
      tags: ['Canvas', 'Vanilla JavaScript', 'Webpack', 'BEM', 'Git-flow'],
    },
    {
      name: 'Portfolio',
      description:
        'Por último, pero no menos importante, este portfolio a modo de carte de presentación y como plataforma donde ir mostrando mis proyectos.',
      tech:
        'Aplicación web desarrollada en Angular. Interfaz sencilla con animaciones interactivas con el usuario mediante CSS y directivas y animaciones de Angular. Se han seguido las metodologías BEM para estilos y Git-flow en el control de versiones.',
      url: 'https://gabrielgarci.github.io/portfolio/',
      repo: 'https://github.com/gabrielgarci/portfolio',
      img: './assets/img/projects/portfolio.png',
      tags: ['Angular', 'Directivas Angular', 'BEM', 'Git-flow'],
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
