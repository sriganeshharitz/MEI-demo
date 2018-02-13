import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria1Component } from './ria1.component';

describe('Ria1Component', () => {
  let component: Ria1Component;
  let fixture: ComponentFixture<Ria1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
