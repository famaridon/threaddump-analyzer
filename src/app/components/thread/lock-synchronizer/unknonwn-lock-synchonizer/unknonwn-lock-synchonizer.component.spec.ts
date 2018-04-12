import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknonwnLockSynchonizerComponent } from './unknonwn-lock-synchonizer.component';

describe('UnknonwnLockSynchonizerComponent', () => {
  let component: UnknonwnLockSynchonizerComponent;
  let fixture: ComponentFixture<UnknonwnLockSynchonizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknonwnLockSynchonizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknonwnLockSynchonizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
