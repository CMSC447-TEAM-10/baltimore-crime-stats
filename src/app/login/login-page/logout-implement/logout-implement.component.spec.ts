import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutImplementComponent } from './logout-implement.component';

describe('LogoutImplementComponent', () => {
  let component: LogoutImplementComponent;
  let fixture: ComponentFixture<LogoutImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutImplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
