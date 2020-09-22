import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ColaborationCardComponent } from './colaboration-card.component'

describe('ColaborationCardComponent', () => {
  let component: ColaborationCardComponent
  let fixture: ComponentFixture<ColaborationCardComponent>
  const mockItem = {
    company: 'mockCompany',
    description: 'mockDescription',
    tags: ['mockTag'],
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColaborationCardComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaborationCardComponent)
    component = fixture.componentInstance
    component.item = mockItem
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
