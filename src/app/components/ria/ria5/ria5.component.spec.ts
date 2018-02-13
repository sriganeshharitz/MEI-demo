import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria5Component } from './ria5.component';

describe('Ria5Component', () => {
  let component: Ria5Component;
  let fixture: ComponentFixture<Ria5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
