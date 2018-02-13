import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria13Component } from './ria13.component';

describe('Ria13Component', () => {
  let component: Ria13Component;
  let fixture: ComponentFixture<Ria13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
