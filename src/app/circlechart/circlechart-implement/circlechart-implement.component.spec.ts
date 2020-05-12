import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclechartImplementComponent } from './circlechart-implement.component';

describe('CirclechartImplementComponent', () => {
  let component: CirclechartImplementComponent;
  let fixture: ComponentFixture<CirclechartImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclechartImplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclechartImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
