import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria2005Component } from './ria-2005.component';

describe('Ria2005Component', () => {
  let component: Ria2005Component;
  let fixture: ComponentFixture<Ria2005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria2005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria2005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
