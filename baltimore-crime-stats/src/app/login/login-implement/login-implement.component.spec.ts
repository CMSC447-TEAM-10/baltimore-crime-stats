import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginImplementComponent } from './login-implement.component';

describe('LoginImplementComponent', () => {
  let component: LoginImplementComponent;
  let fixture: ComponentFixture<LoginImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginImplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
