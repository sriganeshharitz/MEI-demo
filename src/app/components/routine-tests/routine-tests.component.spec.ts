import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineTestsComponent } from './routine-tests.component';

describe('RoutineTestsComponent', () => {
  let component: RoutineTestsComponent;
  let fixture: ComponentFixture<RoutineTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
