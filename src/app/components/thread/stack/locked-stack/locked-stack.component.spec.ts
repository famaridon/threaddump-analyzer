import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedStackComponent } from './locked-stack.component';

describe('LockedStackComponent', () => {
  let component: LockedStackComponent;
  let fixture: ComponentFixture<LockedStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockedStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
