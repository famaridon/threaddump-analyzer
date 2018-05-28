import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingToWaitForStackEntryComponent } from './parking-to-wait-for-stack-entry.component';

describe('ParkingToWaitForStackEntryComponent', () => {
  let component: ParkingToWaitForStackEntryComponent;
  let fixture: ComponentFixture<ParkingToWaitForStackEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingToWaitForStackEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingToWaitForStackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
