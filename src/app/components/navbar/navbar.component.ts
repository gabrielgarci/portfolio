import { Component, HostListener, ElementRef } from '@angular/core'
import { trigger, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('appearMenu', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateX(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
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
