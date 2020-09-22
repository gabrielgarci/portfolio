import { Component } from '@angular/core'
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
  providers: [NavbarComponent],
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent {
  constructor(private navbar: NavbarComponent) {}

  public scroll() {
    this.navbar.scrollToElement('projects')
  }
}
