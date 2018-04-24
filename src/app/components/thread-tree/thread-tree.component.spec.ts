import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadTreeComponent } from './thread-tree.component';

describe('ThreadTreeComponent', () => {
  let component: ThreadTreeComponent;
  let fixture: ComponentFixture<ThreadTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
