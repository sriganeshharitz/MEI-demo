import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria7Component } from './ria7.component';

describe('Ria7Component', () => {
  let component: Ria7Component;
  let fixture: ComponentFixture<Ria7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
