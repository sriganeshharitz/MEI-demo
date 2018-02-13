import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ria182Component } from './ria18-2.component';

describe('Ria182Component', () => {
  let component: Ria182Component;
  let fixture: ComponentFixture<Ria182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ria182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ria182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
