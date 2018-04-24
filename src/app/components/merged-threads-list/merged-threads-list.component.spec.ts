import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergedThreadsListComponent } from './merged-threads-list.component';

describe('MergedThreadsListComponent', () => {
  let component: MergedThreadsListComponent;
  let fixture: ComponentFixture<MergedThreadsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergedThreadsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergedThreadsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
