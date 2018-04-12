import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockSynchronizerComponent } from './lock-synchronizer.component';

describe('LockSynchronizerComponent', () => {
  let component: LockSynchronizerComponent;
  let fixture: ComponentFixture<LockSynchronizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockSynchronizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockSynchronizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
