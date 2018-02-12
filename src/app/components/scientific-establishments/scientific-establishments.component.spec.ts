import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificEstablishmentsComponent } from './scientific-establishments.component';

describe('ScientificEstablishmentsComponent', () => {
  let component: ScientificEstablishmentsComponent;
  let fixture: ComponentFixture<ScientificEstablishmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificEstablishmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificEstablishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
