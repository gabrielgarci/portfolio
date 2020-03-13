import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-skill-stat',
  templateUrl: './skill-stat.component.html',
  styleUrls: ['./skill-stat.component.scss'],
})
export class SkillStatComponent implements OnInit {
  @Input() item
  @Input() index
  @Input() loadStats

  constructor() {}

  ngOnInit(): void {
    // setInterval(()=> console.log(this.loadStats), 500)
  }
}
