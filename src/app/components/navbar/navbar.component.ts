import { Component, HostListener, ElementRef } from '@angular/core'
import { menuAnimation } from 'src/app/animations/navbar.animation'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [menuAnimation],
})
export class NavbarComponent {
  public showMenu = false

  constructor(private eRef: ElementRef) {}

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showMenu = false
    }
  }
}
