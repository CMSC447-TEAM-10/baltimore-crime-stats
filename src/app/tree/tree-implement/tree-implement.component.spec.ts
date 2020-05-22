import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeImplementComponent } from './tree-implement.component';
import { TreeRoutingModule } from '../tree-routing.module';
import { TreeModule } from '../tree.module';

describe('TreeImplementComponent', () => {
  let component: TreeImplementComponent;
  let fixture: ComponentFixture<TreeImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeImplementComponent ],
      imports: [ TreeRoutingModule, TreeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
