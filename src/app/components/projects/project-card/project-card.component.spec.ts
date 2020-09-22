import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectCardComponent } from './project-card.component'

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent
  let fixture: ComponentFixture<ProjectCardComponent>
  const mockItem = {
    name: 'mockName',
    url: 'mockUrl',
    repo: 'mockRepo',
    description: 'mockDescription',
    tech: 'mockTech',
    img: 'mockImg',
    tags: ['mockTag'],
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent)
    component = fixture.componentInstance
    component.item = mockItem
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
