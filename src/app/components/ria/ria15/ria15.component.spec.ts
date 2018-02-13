import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria15Component } from './ria15.component';

describe('Ria15Component', () => {
  let component: Ria15Component;
  let fixture: ComponentFixture<Ria15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
