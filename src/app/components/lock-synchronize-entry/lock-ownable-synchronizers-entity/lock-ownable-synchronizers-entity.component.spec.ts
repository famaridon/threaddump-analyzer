import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockOwnableSynchronizersEntityComponent } from './lock-ownable-synchronizers-entity.component';

describe('LockOwnableSynchronizersEntityComponent', () => {
  let component: LockOwnableSynchronizersEntityComponent;
  let fixture: ComponentFixture<LockOwnableSynchronizersEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockOwnableSynchronizersEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockOwnableSynchronizersEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
