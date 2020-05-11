import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartImplementComponent } from './chart-implement.component';

describe('ChartImplementComponent', () => {
  let component: ChartImplementComponent;
  let fixture: ComponentFixture<ChartImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartImplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
