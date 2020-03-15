import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ValueComponent } from './value.component'

describe('ValueComponent', () => {
  let component: ValueComponent
  let fixture: ComponentFixture<ValueComponent>
  const mockItem = {
    title: 'mockTitle',
    img: 'mock/path/name.png',
    descript: 'This is a mock',
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValueComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueComponent)
    component = fixture.componentInstance
    component.item = mockItem
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
