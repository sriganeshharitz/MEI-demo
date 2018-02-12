import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralGovernmentDepartmentComponent } from './central-government-department.component';

describe('CentralGovernmentDepartmentComponent', () => {
  let component: CentralGovernmentDepartmentComponent;
  let fixture: ComponentFixture<CentralGovernmentDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralGovernmentDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralGovernmentDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
