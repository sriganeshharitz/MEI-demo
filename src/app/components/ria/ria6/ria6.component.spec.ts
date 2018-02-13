import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria6Component } from './ria6.component';

describe('Ria6Component', () => {
  let component: Ria6Component;
  let fixture: ComponentFixture<Ria6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
