import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SkillStatComponent } from './skill-stat.component'

describe('SkillStatComponent', () => {
  let component: SkillStatComponent
  let fixture: ComponentFixture<SkillStatComponent>
  const mockItem = { name: 'skillName', score: 100 }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillStatComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillStatComponent)
    component = fixture.componentInstance
    component.item = mockItem
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
