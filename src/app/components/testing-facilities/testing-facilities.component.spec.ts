import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingFacilitiesComponent } from './testing-facilities.component';

describe('TestingFacilitiesComponent', () => {
  let component: TestingFacilitiesComponent;
  let fixture: ComponentFixture<TestingFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
