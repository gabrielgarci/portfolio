import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SkillStatComponent } from './skill-stat.component'

describe('SkillStatComponent', () => {
  let component: SkillStatComponent
  let fixture: ComponentFixture<SkillStatComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillStatComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillStatComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
