import { Directive, AfterViewInit, OnInit } from '@angular/core'
import { ElementRef, EventEmitter, Output } from '@angular/core'

@Directive({
  selector: '[intersection]',
})
export class IntersectionDirective implements AfterViewInit {
  @Output() public intersection: EventEmitter<any> = new EventEmitter()

  private _intersectionObserver?: IntersectionObserver

  constructor(private _element: ElementRef) {}

  private checkForIntersection = (
    entries: Array<IntersectionObserverEntry>
  ) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.intersection.emit()
        this._intersectionObserver.unobserve(
          this._element.nativeElement as Element
        )
        this._intersectionObserver.disconnect()
      }
    })
  }

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (
      (entry as any).isIntersecting &&
      entry.target === this._element.nativeElement
    )
  }

  public ngAfterViewInit() {
    this._intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries)
    }, {})
    this._intersectionObserver.observe(this._element.nativeElement as Element)
  }
}
