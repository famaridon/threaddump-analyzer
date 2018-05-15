import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingOnStackEntryComponent } from './waiting-on-stack-entry.component';

describe('WaitingOnStackEntryComponent', () => {
  let component: WaitingOnStackEntryComponent;
  let fixture: ComponentFixture<WaitingOnStackEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingOnStackEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingOnStackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
