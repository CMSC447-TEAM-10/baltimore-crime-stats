import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapImplementComponent } from './map-implement.component';
import { MapModule } from '../map.module';
import { MapRoutingModule } from '../map-routing.module';

describe('MapImplementComponent', () => {
  let component: MapImplementComponent;
  let fixture: ComponentFixture<MapImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapImplementComponent ],
      imports: [ MapModule, MapRoutingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
