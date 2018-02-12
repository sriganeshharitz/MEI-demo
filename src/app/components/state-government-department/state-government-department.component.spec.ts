import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateGovernmentDepartmentComponent } from './state-government-department.component';

describe('StateGovernmentDepartmentComponent', () => {
  let component: StateGovernmentDepartmentComponent;
  let fixture: ComponentFixture<StateGovernmentDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateGovernmentDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateGovernmentDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
