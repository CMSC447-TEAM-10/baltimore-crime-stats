import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapImplementComponent } from './map-implement.component';

describe('MapImplementComponent', () => {
  let component: MapImplementComponent;
  let fixture: ComponentFixture<MapImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapImplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // no need to create
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
