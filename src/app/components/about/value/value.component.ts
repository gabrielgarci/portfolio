import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
  @Input() item
  @Input() index
  @Input() loadValues

  constructor() {}

  ngOnInit(): void {}
}
