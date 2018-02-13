import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria16Component } from './ria16.component';

describe('Ria16Component', () => {
  let component: Ria16Component;
  let fixture: ComponentFixture<Ria16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
