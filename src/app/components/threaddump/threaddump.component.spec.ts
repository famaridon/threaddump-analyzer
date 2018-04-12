import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreaddumpComponent } from './threaddump.component';

describe('ThreaddumpComponent', () => {
  let component: ThreaddumpComponent;
  let fixture: ComponentFixture<ThreaddumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreaddumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreaddumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
