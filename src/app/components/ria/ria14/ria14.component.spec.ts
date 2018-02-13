import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria14Component } from './ria14.component';

describe('Ria14Component', () => {
  let component: Ria14Component;
  let fixture: ComponentFixture<Ria14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
