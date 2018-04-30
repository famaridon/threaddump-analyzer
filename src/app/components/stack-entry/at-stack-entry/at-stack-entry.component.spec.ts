import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtStackEntryComponent } from './at-stack-entry.component';

describe('AtStackEntryComponent', () => {
  let component: AtStackEntryComponent;
  let fixture: ComponentFixture<AtStackEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtStackEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtStackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
