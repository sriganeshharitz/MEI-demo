import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria11Component } from './ria11.component';

describe('Ria11Component', () => {
  let component: Ria11Component;
  let fixture: ComponentFixture<Ria11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
