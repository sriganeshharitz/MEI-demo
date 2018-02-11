import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrofittingComponent } from './retrofitting.component';

describe('RetrofittingComponent', () => {
  let component: RetrofittingComponent;
  let fixture: ComponentFixture<RetrofittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrofittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrofittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
