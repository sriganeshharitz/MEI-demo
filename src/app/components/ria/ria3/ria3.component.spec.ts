import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria3Component } from './ria3.component';

describe('Ria3Component', () => {
  let component: Ria3Component;
  let fixture: ComponentFixture<Ria3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
