import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public skills = [
    { name: 'CSS', score: 80 },
    { name: 'JS', score: 85 },
    { name: 'Angular', score: 80 },
    { name: 'Ionic', score: 60 },
    { name: 'SASS', score: 68 },
    { name: 'Node.js', score: 55 },
  ]

  constructor() {}

  ngOnInit(): void {}
}
