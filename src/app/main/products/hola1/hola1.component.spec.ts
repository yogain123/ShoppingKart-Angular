import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola1Component } from './hola1.component';

describe('Hola1Component', () => {
  let component: Hola1Component;
  let fixture: ComponentFixture<Hola1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
