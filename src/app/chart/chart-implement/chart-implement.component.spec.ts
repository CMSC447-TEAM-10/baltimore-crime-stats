import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartImplementComponent } from './chart-implement.component';
import { ChartRoutingModule } from '../chart-routing.module';
import { ChartModule } from '../chart.module';

describe('ChartImplementComponent', () => {
  let component: ChartImplementComponent;
  let fixture: ComponentFixture<ChartImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartImplementComponent ],
      imports: [ ChartRoutingModule, ChartModule ]
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
