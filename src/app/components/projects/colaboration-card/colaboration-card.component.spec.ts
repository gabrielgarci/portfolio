import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ColaborationCardComponent } from './colaboration-card.component'

describe('ColaborationCardComponent', () => {
  let component: ColaborationCardComponent
  let fixture: ComponentFixture<ColaborationCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColaborationCardComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaborationCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
