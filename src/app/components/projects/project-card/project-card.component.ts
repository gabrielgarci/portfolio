import { Component, Input } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() item

  constructor(private sanitizer: DomSanitizer) {}

  public sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }
}
