import { Component } from '@angular/core'
import { Skill, Value } from 'src/app/models/about'
import { IntersectionDirective } from 'src/app/directives/intersection.directive'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public loadStats = false
  public loadValues = false

  public contacts = [
    {
      icon: './assets/icons/linkedin.png',
      url: 'https://www.linkedin.com/in/gabrielgarci/',
    },
    { icon: './assets/icons/github.png', url: 'https://github.com/ggarciaro' },
    {
      icon: './assets/icons/codewar.png',
      url: 'https://www.codewars.com/users/ggarciaro',
    },
  ]
  public skills: Skill[] = [
    { name: 'CSS', score: 80 },
    { name: 'JS', score: 85 },
    { name: 'Angular', score: 80 },
    { name: 'React', score: 60 },
    { name: 'Ionic', score: 65 },
    { name: 'Jest', score: 65 },
    { name: 'Canvas', score: 60 },
    { name: 'Figma', score: 50 },
  ]
  public values: Value[] = [
    {
      title: 'Responsive',
      img: './assets/icons/responsive.png',
      descript: 'Aplicaciones para todos los dispositivos y resoluciones.',
    },
    {
      title: 'Clean Code',
      img: './assets/icons/clean-code.png',
      descript: 'Código limpio y buenas prácticas para trabajos colaborativos.',
    },
    {
      title: 'Fundamentos',
      img: './assets/icons/bases.png',
      descript:
        'Conocimiento de las bases en las que se desarrollan los frameworks.',
    },
    {
      title: 'Rendimiento',
      img: './assets/icons/speed.png',
      descript: 'Aplicaciones fluidas con bajos tiempos de carga.',
    },
  ]

  constructor() {}

  public getDelay(index) {
    return window.innerHeight > 600 ? index * 0.4 : index * 0.4 + 1
  }
}
