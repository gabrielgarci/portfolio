import { Component, OnInit } from '@angular/core'
import { Skill } from 'src/app/models/about'
import { IntersectionDirective } from 'src/app/directives/intersection.directive'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public loadStats = false

  public skills: Skill[] = [
    { name: 'CSS', score: 80 },
    { name: 'JS', score: 85 },
    { name: 'Angular', score: 80 },
    { name: 'Ionic', score: 60 },
    { name: 'SASS', score: 68 },
    { name: 'Jasmin', score: 65 },
  ]

  constructor() {}
}
