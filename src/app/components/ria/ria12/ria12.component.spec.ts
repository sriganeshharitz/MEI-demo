import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria12Component } from './ria12.component';

describe('Ria12Component', () => {
  let component: Ria12Component;
  let fixture: ComponentFixture<Ria12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
