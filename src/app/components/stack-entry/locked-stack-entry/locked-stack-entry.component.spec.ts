import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedStackEntryComponent } from './locked-stack-entry.component';

describe('LockedStackEntryComponent', () => {
  let component: LockedStackEntryComponent;
  let fixture: ComponentFixture<LockedStackEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockedStackEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedStackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
