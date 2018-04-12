import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneLockSynchonizerComponent } from './none-lock-synchonizer.component';

describe('NoneLockSynchonizerComponent', () => {
  let component: NoneLockSynchonizerComponent;
  let fixture: ComponentFixture<NoneLockSynchonizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneLockSynchonizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneLockSynchonizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
