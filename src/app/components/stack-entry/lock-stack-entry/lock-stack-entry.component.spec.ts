import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockStackEntryComponent } from './lock-stack-entry.component';

describe('LockStackEntryComponent', () => {
  let component: LockStackEntryComponent;
  let fixture: ComponentFixture<LockStackEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockStackEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockStackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
