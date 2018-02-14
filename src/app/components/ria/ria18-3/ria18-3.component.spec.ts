import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria183Component } from './ria18-3.component';

describe('Ria183Component', () => {
  let component: Ria183Component;
  let fixture: ComponentFixture<Ria183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
