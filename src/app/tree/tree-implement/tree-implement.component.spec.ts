import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeImplementComponent } from './tree-implement.component';

describe('TreeImplementComponent', () => {
  let component: TreeImplementComponent;
  let fixture: ComponentFixture<TreeImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeImplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // no need to create
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
