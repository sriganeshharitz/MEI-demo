import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria181Component } from './ria18-1.component';

describe('Ria181Component', () => {
  let component: Ria181Component;
  let fixture: ComponentFixture<Ria181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
