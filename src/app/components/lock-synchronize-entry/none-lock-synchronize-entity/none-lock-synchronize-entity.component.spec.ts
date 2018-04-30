import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneLockSynchronizeEntityComponent } from './none-lock-synchronize-entity.component';

describe('NoneLockSynchronizeEntityComponent', () => {
  let component: NoneLockSynchronizeEntityComponent;
  let fixture: ComponentFixture<NoneLockSynchronizeEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneLockSynchronizeEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneLockSynchronizeEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
