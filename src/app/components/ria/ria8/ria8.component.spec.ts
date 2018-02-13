import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria8Component } from './ria8.component';

describe('Ria8Component', () => {
  let component: Ria8Component;
  let fixture: ComponentFixture<Ria8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
