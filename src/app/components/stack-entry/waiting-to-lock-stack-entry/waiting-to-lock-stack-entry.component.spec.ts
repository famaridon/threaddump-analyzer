import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingToLockStackEntryComponent } from './waiting-to-lock-stack-entry.component';

describe('WaitingToLockStackEntryComponent', () => {
  let component: WaitingToLockStackEntryComponent;
  let fixture: ComponentFixture<WaitingToLockStackEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingToLockStackEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingToLockStackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
