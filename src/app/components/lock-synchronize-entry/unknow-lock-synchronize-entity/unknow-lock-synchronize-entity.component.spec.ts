import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknowLockSynchronizeEntityComponent } from './unknow-lock-synchronize-entity.component';

describe('UnknowLockSynchronizeEntityComponent', () => {
  let component: UnknowLockSynchronizeEntityComponent;
  let fixture: ComponentFixture<UnknowLockSynchronizeEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknowLockSynchronizeEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknowLockSynchronizeEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
