import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockOwnableSynchonizerComponent } from './lock-ownable-synchonizer.component';

describe('LockOwnableSynchonizerComponent', () => {
  let component: LockOwnableSynchonizerComponent;
  let fixture: ComponentFixture<LockOwnableSynchonizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockOwnableSynchonizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockOwnableSynchonizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
