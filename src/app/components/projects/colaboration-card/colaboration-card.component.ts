import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-colaboration-card',
  templateUrl: './colaboration-card.component.html',
  styleUrls: ['./colaboration-card.component.scss'],
})
export class ColaborationCardComponent implements OnInit {
  @Input() item

  constructor() {}

  ngOnInit(): void {}
}
