import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockReportComponent } from './lock-report.component';

describe('LockReportComponent', () => {
  let component: LockReportComponent;
  let fixture: ComponentFixture<LockReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
