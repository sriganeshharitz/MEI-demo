import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria2Component } from './ria2.component';

describe('Ria2Component', () => {
  let component: Ria2Component;
  let fixture: ComponentFixture<Ria2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
