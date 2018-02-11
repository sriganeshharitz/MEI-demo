import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationChartComponent } from './organisation-chart.component';

describe('OrganisationChartComponent', () => {
  let component: OrganisationChartComponent;
  let fixture: ComponentFixture<OrganisationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
