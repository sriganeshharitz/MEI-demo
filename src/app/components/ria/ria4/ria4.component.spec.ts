import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria4Component } from './ria4.component';

describe('Ria4Component', () => {
  let component: Ria4Component;
  let fixture: ComponentFixture<Ria4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
