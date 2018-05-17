import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadLinkComponent } from './thread-link.component';

describe('ThreadLinkComponent', () => {
  let component: ThreadLinkComponent;
  let fixture: ComponentFixture<ThreadLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
