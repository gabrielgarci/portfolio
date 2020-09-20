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
      tags: ['Angular', 'Jest', 'Git', 'BEM', 'SASS', 'ngx-scanner'],
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
      url: 'https://gabrielgarci.github.io/rick-and-morty-quiz/',
      repo: 'https://github.com/gabrielgarci/rick-and-morty-quiz',
      img: '',
      tags: ['react', 'mobile first', 'jest', 'firebase', 'react-hooks'],
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
