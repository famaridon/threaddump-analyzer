import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingToLockStackComponent } from './waiting-to-lock-stack.component';

describe('WaitingToLockStackComponent', () => {
  let component: WaitingToLockStackComponent;
  let fixture: ComponentFixture<WaitingToLockStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingToLockStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingToLockStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
