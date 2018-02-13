import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria9Component } from './ria9.component';

describe('Ria9Component', () => {
  let component: Ria9Component;
  let fixture: ComponentFixture<Ria9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
