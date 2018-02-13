import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria10Component } from './ria10.component';

describe('Ria10Component', () => {
  let component: Ria10Component;
  let fixture: ComponentFixture<Ria10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
