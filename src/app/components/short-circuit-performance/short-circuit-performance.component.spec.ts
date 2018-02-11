import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCircuitPerformanceComponent } from './short-circuit-performance.component';

describe('ShortCircuitPerformanceComponent', () => {
  let component: ShortCircuitPerformanceComponent;
  let fixture: ComponentFixture<ShortCircuitPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortCircuitPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortCircuitPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
